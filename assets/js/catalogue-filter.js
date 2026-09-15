/* ==========================================================================
   Micro-Specialisation catalogue — client-side filtering.
   Progressive enhancement: every programme is present in the HTML, so the
   catalogue is complete and navigable with JavaScript disabled.
   ========================================================================== */
(function () {
  'use strict';

  var form = document.getElementById('catalogue-filters');
  if (!form) return;

  var search  = document.getElementById('f-search');
  var theme   = document.getElementById('f-theme');
  var unit    = document.getElementById('f-unit');
  var band    = document.getElementById('f-band');
  var count   = document.getElementById('result-count');
  var empty   = document.getElementById('empty-state');
  var themeNav = document.querySelector('.theme-nav');

  var cards  = Array.prototype.slice.call(document.querySelectorAll('.course-card[data-theme]'));
  var blocks = Array.prototype.slice.call(document.querySelectorAll('[data-theme-block]'));
  var TOTAL  = cards.length;

  function apply() {
    var q  = (search.value || '').trim().toLowerCase();
    var th = theme.value;
    var un = unit.value;
    var bd = band.value;
    var shown = 0;

    cards.forEach(function (card) {
      var haystack = card.dataset.title + ' ' + card.dataset.unit + ' ' +
                     card.textContent.toLowerCase();
      var ok = (!q  || haystack.indexOf(q) !== -1) &&
               (!th || card.dataset.theme === th) &&
               (!un || card.dataset.unit === un) &&
               (!bd || card.dataset.band === bd);
      card.hidden = !ok;
      if (ok) shown++;
    });

    // Hide a theme heading once every card beneath it is filtered out.
    blocks.forEach(function (block) {
      var visible = block.querySelectorAll('.course-card:not([hidden])').length;
      block.hidden = visible === 0;
    });

    var filtering = !!(q || th || un || bd);
    if (themeNav) themeNav.hidden = filtering;

    count.innerHTML = 'Showing <strong>' + shown + '</strong> of ' + TOTAL +
                      ' Micro-Specialisation' + (TOTAL === 1 ? '' : 's');
    empty.hidden = shown !== 0;
  }

  ['input', 'change'].forEach(function (evt) {
    form.addEventListener(evt, function (e) {
      if (e.target === search || e.target === theme || e.target === unit || e.target === band) {
        apply();
      }
    });
  });

  form.addEventListener('submit', function (e) { e.preventDefault(); });
  form.addEventListener('reset', function () {
    // Reset fires before the fields are cleared.
    window.setTimeout(apply, 0);
  });

  // Deep link: /programmes.html#energy preselects that theme.
  function fromHash() {
    var id = (location.hash || '').replace('#', '');
    if (!id) return;
    var opt = theme.querySelector('option[value="' + id + '"]');
    if (opt) {
      // Leave the select alone so the anchor scroll still works; the full
      // catalogue stays visible and the browser jumps to the theme block.
      var target = document.getElementById(id);
      if (target) target.scrollIntoView();
    }
  }
  window.addEventListener('hashchange', fromHash);

  apply();
})();
