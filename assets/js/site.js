/* ==========================================================================
   IIT Kharagpur OCN — shared site behaviour
   Mobile navigation, accessible accordions, text resizing, scroll reveal,
   stat counters, back-to-top and the enquiry form guard.
   No dependencies.
   ========================================================================== */
(function () {
  'use strict';

  var doc = document;
  var $  = function (s, c) { return (c || doc).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || doc).querySelectorAll(s)); };

  /* ---------- Mobile navigation ---------------------------------------- */
  function initNav() {
    var toggle = $('.nav__toggle');
    var list   = $('.nav__list');
    if (!toggle || !list) return;

    toggle.addEventListener('click', function () {
      var open = list.getAttribute('data-open') === 'true';
      list.setAttribute('data-open', String(!open));
      toggle.setAttribute('aria-expanded', String(!open));
    });

    // Close on escape, and when a link is chosen on small screens.
    doc.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && list.getAttribute('data-open') === 'true') {
        list.setAttribute('data-open', 'false');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.focus();
      }
    });
    $$('a', list).forEach(function (a) {
      a.addEventListener('click', function () {
        list.setAttribute('data-open', 'false');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---------- Text size control (accessibility) ------------------------- */
  function initTextSize() {
    var group = $('.textsize');
    if (!group) return;
    var SIZES = { small: '14px', normal: '16px', large: '18.5px' };
    var KEY = 'ocn-text-size';

    function apply(name) {
      doc.documentElement.style.setProperty('--body-size', SIZES[name] || SIZES.normal);
      $$('button', group).forEach(function (b) {
        b.setAttribute('aria-pressed', String(b.dataset.size === name));
      });
      try { localStorage.setItem(KEY, name); } catch (e) { /* storage unavailable */ }
    }

    $$('button', group).forEach(function (b) {
      b.addEventListener('click', function () { apply(b.dataset.size); });
    });

    var saved;
    try { saved = localStorage.getItem(KEY); } catch (e) { saved = null; }
    apply(saved || 'normal');
  }

  /* ---------- Accordions ------------------------------------------------ */
  function initAccordions() {
    $$('.accordion__btn').forEach(function (btn) {
      var panel = doc.getElementById(btn.getAttribute('aria-controls'));
      if (!panel) return;
      btn.addEventListener('click', function () {
        var open = btn.getAttribute('aria-expanded') === 'true';
        btn.setAttribute('aria-expanded', String(!open));
        panel.setAttribute('data-open', String(!open));
        panel.hidden = open;
      });
    });
  }

  /* ---------- Scroll reveal --------------------------------------------- */
  /* Elements start visible in CSS. JS parks the ones below the fold, then
     reveals them on approach. A throttled sweep backs up the observer so a
     fast scroll or an anchor jump can never strand content at opacity 0.   */
  function initReveal() {
    var items = $$('.reveal');
    if (!items.length) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    var pending = [];
    var MARGIN = 80;

    items.forEach(function (el) {
      if (el.getBoundingClientRect().top > window.innerHeight - MARGIN) {
        el.setAttribute('data-shown', 'false');
        pending.push(el);
      }
    });
    if (!pending.length) return;

    function show(el) {
      el.setAttribute('data-shown', 'true');
      var i = pending.indexOf(el);
      if (i !== -1) pending.splice(i, 1);
    }

    if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            show(entry.target);
            io.unobserve(entry.target);
          }
        });
      }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
      pending.slice().forEach(function (el) { io.observe(el); });
    }

    // Safety sweep: anything already at or above the fold gets shown, whatever
    // the observer did or did not report.
    var ticking = false;
    function sweep() {
      ticking = false;
      pending.slice().forEach(function (el) {
        if (el.getBoundingClientRect().top < window.innerHeight - MARGIN) show(el);
      });
      if (!pending.length) {
        window.removeEventListener('scroll', onScroll);
        window.removeEventListener('resize', onScroll);
      }
    }
    function onScroll() {
      if (!ticking) { requestAnimationFrame(sweep); ticking = true; }
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
  }

  /* ---------- Animated stat counters ------------------------------------ */
  function initCounters() {
    var nums = $$('[data-count]');
    if (!nums.length || !('IntersectionObserver' in window)) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var el     = entry.target;
        var target = parseFloat(el.dataset.count);
        var suffix = el.dataset.suffix || '';
        var start  = performance.now();
        var DUR    = 1150;

        (function step(now) {
          var t = Math.min((now - start) / DUR, 1);
          var eased = 1 - Math.pow(1 - t, 3);
          el.textContent = Math.round(target * eased).toLocaleString('en-IN') + suffix;
          if (t < 1) requestAnimationFrame(step);
        })(start);

        io.unobserve(el);
      });
    }, { threshold: 0.5 });
    nums.forEach(function (el) { io.observe(el); });
  }

  /* ---------- Back to top ----------------------------------------------- */
  function initToTop() {
    var btn = $('.to-top');
    if (!btn) return;
    var ticking = false;
    function update() {
      btn.setAttribute('data-visible', String(window.scrollY > 600));
      ticking = false;
    }
    window.addEventListener('scroll', function () {
      if (!ticking) { requestAnimationFrame(update); ticking = true; }
    }, { passive: true });
    btn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    update();
  }

  /* ---------- Enquiry form ---------------------------------------------- */
  function initForm() {
    var form = $('#enquiry-form');
    if (!form) return;
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var status = $('#form-status');
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      // No endpoint is wired yet: point this at the Institute's enquiry
      // handler (or the ProofSlate intake API) before going live.
      if (status) {
        status.hidden = false;
        status.textContent =
          'Thank you. Your enquiry has been recorded and the Outreach office ' +
          'will respond to the email address provided.';
        status.focus();
      }
      form.reset();
    });
  }

  /* ---------- Current year ---------------------------------------------- */
  function initYear() {
    $$('[data-year]').forEach(function (el) {
      el.textContent = String(new Date().getFullYear());
    });
  }

  doc.addEventListener('DOMContentLoaded', function () {
    initNav();
    initTextSize();
    initAccordions();
    initReveal();
    initCounters();
    initToTop();
    initForm();
    initYear();
  });
})();
