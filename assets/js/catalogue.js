/* ==========================================================================
   IIT Kharagpur OCN — Micro-Specialisation catalogue
   --------------------------------------------------------------------------
   Single source of truth for every programme rendered across the site.
   Transcribed from: "IIT Kharagpur OCN Micro-Specialisations", July 2026,
   compiled by ProofSlate Private Limited.

   Programme names, credits, course stacks, faculty allocation, semester
   scheduling and availability are indicative and subject to academic
   finalisation by the respective departments.

   To add or amend a programme, edit this file only — the catalogue page,
   the detail page, the home page and the sitemap all read from it.
   ========================================================================== */

const OCN_THEMES = [
  { no: '01', id: 'ai',        name: 'AI, Computing and Mathematics' },
  { no: '02', id: 'finance',   name: 'Finance, Business and Entrepreneurship' },
  { no: '03', id: 'energy',    name: 'Energy, Sustainability and Climate' },
  { no: '04', id: 'manufact',  name: 'Advanced Manufacturing and Materials' },
  { no: '05', id: 'health',    name: 'Healthcare and Life Sciences' },
  { no: '06', id: 'aero',      name: 'Autonomous Systems and Aerospace' },
  { no: '07', id: 'comms',     name: 'Next-Generation Communications' },
  { no: '08', id: 'safety',    name: 'Safety and Risk Engineering' }
];

const OCN_CATALOGUE = [
  /* ---------------- THEME 01 · AI, Computing and Mathematics ------------- */
  {
    slug: 'foundations-of-generative-ai',
    code: 'OCN-AI-01',
    title: 'Foundations of Generative AI',
    theme: 'ai',
    unit: 'Department of Computer Science and Engineering',
    credits: 12,
    courseCount: '4',
    contactHours: '144',
    prereq: 'Programming (C or Python)',
    summary: 'Covers the core pillars of modern AI, beginning with the mathematical principles of machine learning and advancing into deep neural network architectures. The programme extends into two major application domains, natural language processing and computer vision, giving learners both the theory and the practical tools to build intelligent systems. Together the courses span the full stack of contemporary AI, from learning algorithms to perception and language understanding.',
    courses: [
      { name: 'Machine Learning', ltp: '3-0-0', credits: 3 },
      { name: 'Deep Learning', ltp: '3-0-0', credits: 3 },
      { name: 'Natural Language Processing', ltp: '3-0-0', credits: 3 },
      { name: 'Advanced Digital Image Processing and Computer Vision', ltp: '3-0-0', credits: 3 }
    ]
  },
  {
    slug: 'generative-and-agentic-ai',
    code: 'OCN-AI-02',
    title: 'Generative and Agentic AI',
    theme: 'ai',
    unit: 'Department of Artificial Intelligence',
    credits: 12,
    courseCount: '4',
    contactHours: '144',
    prereq: 'Programming in Python, Probability and Statistics, Linear Algebra',
    summary: 'A structured pathway into generative and agentic AI, moving from the fundamentals of machine learning through large language models, autonomous AI agents and responsible AI practice. Builds the conceptual understanding and the practical skill needed to design, build and deploy generative and agentic AI solutions for real-world problems, in a field that continues to reshape industries and redefine the future of work.',
    courses: [
      { name: 'Foundation of Machine Learning', ltp: '3-0-0', credits: 3 },
      { name: 'Foundation of Large Language Models', ltp: '3-0-0', credits: 3 },
      { name: 'Agentic AI Systems', ltp: '3-0-0', credits: 3 },
      { name: 'Responsible AI', ltp: '3-0-0', credits: 3 }
    ],
    note: 'A project component applies to Agentic AI Systems.',
    tags: ['Project component']
  },
  {
    slug: 'mathematical-foundations-of-ai-and-ml',
    code: 'OCN-AI-03',
    title: 'Mathematical Foundations of AI and ML',
    theme: 'ai',
    unit: 'Department of Mathematics',
    credits: 16,
    courseCount: '5',
    contactHours: '192 recorded + 64 live',
    prereq: 'First-year level foundational mathematics',
    summary: 'Bridges mathematical foundations and their application in AI and ML. Every theoretical concept is tied to a working application: linear algebra and numerical optimisation for training and refining models, probability for modelling uncertainty, and discrete structures for the graphs and search algorithms underpinning AI.',
    courses: [
      { name: 'Probabilistic Techniques for Machine Learning', ltp: '3-0-0', credits: 3 },
      { name: 'Applied Linear Algebra', ltp: '3-0-0', credits: 3 },
      { name: 'Discrete Structures and Algorithms', ltp: '3-0-0', credits: 3 },
      { name: 'Numerical Optimization', ltp: '3-0-0', credits: 3 },
      { name: 'Advanced Machine Learning', ltp: '4-0-0', credits: 4 }
    ]
  },
  {
    slug: 'foundations-of-algorithms',
    code: 'OCN-AI-04',
    title: 'Foundations of Algorithms',
    theme: 'ai',
    unit: 'Department of Computer Science and Engineering',
    credits: 12,
    courseCount: '4 of 8',
    contactHours: '144',
    prereq: 'Any programming language',
    summary: 'A rigorous foundation in algorithm design and analysis, progressing from classical techniques to advanced topics. Covers exact, randomized, parameterized and approximation algorithms, with electives spanning algorithmic game theory, graph-theoretic methods and online decision-making.',
    courses: [
      { name: 'Algorithms I', ltp: '3-1-0', credits: 4, core: true },
      { name: 'Algorithms II', ltp: '3-1-0', credits: 4, core: true },
      { name: 'Selected Topics in Algorithms', ltp: '3-0-0', credits: 3 },
      { name: 'Randomized Algorithms Design', ltp: '3-0-0', credits: 3 },
      { name: 'Parameterized Algorithms', ltp: '3-0-0', credits: 3 },
      { name: 'Approximation and Online Algorithms', ltp: '3-0-0', credits: 3 },
      { name: 'Advanced Graph Theory', ltp: '3-1-0', credits: 4 },
      { name: 'Algorithmic Game Theory', ltp: '3-0-0', credits: 3 }
    ],
    note: 'Algorithms I and Algorithms II are core courses. The remaining credits are completed through electives selected from the list above.',
    tags: ['Elective choice']
  },

  /* ------------- THEME 02 · Finance, Business and Entrepreneurship ------- */
  {
    slug: 'financial-modeling-and-risk-analysis',
    code: 'OCN-FIN-01',
    title: 'Financial Modeling and Risk Analysis',
    theme: 'finance',
    unit: 'Department of Humanities and Social Sciences',
    credits: 12,
    courseCount: '4 of 6',
    contactHours: '144',
    prereq: 'None',
    summary: 'A comprehensive understanding of financial institutions, markets, derivatives, corporate valuation and financial management, with a strong focus on practical financial modeling. Learners are equipped to analyse risk, make informed investment decisions and evaluate corporate performance.',
    courses: [
      { name: 'Financial Institutions and Markets', ltp: '3-0-0', credits: 3, core: true },
      { name: 'Financial Management', ltp: '3-0-0', credits: 3 },
      { name: 'Corporate Valuation and Restructuring', ltp: '3-0-0', credits: 3 },
      { name: 'Derivatives', ltp: '3-0-0', credits: 3 },
      { name: 'Financial Modelling', ltp: '3-0-0', credits: 3 },
      { name: 'Financial Econometrics', ltp: '3-0-0', credits: 3 }
    ],
    note: 'Financial Institutions and Markets is mandatory. The programme is completed with any two courses from the second component and any one from the third.',
    tags: ['Elective choice']
  },
  {
    slug: 'financial-mathematics',
    code: 'OCN-FIN-02',
    title: 'Financial Mathematics',
    theme: 'finance',
    unit: 'Department of Mathematics',
    credits: 15,
    courseCount: '4',
    contactHours: '180',
    prereq: 'First-year level foundational mathematics',
    summary: 'Bridges mathematical foundations and their application in finance. Each theoretical concept is connected to a financial application, from modelling uncertainty through statistical inference to stochastic calculus for derivative pricing.',
    courses: [
      { name: 'Probability and Statistical Inference with R', ltp: '4-0-0', credits: 4 },
      { name: 'Optimization Methods in Finance', ltp: '4-0-0', credits: 3 },
      { name: 'Regression and Time Series', ltp: '4-0-0', credits: 4 },
      { name: 'Stochastic Calculus in Finance', ltp: '4-0-0', credits: 4 }
    ]
  },
  {
    slug: 'global-business-and-economic-strategy',
    code: 'OCN-FIN-03',
    title: 'Global Business and Economic Strategy',
    theme: 'finance',
    unit: 'Department of Humanities and Social Sciences',
    credits: 14,
    courseCount: '5',
    contactHours: '168',
    prereq: 'None',
    summary: 'Enables learners to interpret the contemporary dynamics of global business in an era of energy transition and rising geopolitical risk. A balanced theoretical and empirical approach sharpens analytical thinking and prepares learners for business leadership and entrepreneurship.',
    courses: [
      { name: 'Principles of Economics', ltp: '3-0-0', credits: 3 },
      { name: 'Market Structure and Pricing Strategies', ltp: '3-0-0', credits: 2 },
      { name: 'Foundations of Global Business', ltp: '3-0-0', credits: 3 },
      { name: 'Shifting Dynamics of Globalization', ltp: '3-0-0', credits: 3 },
      { name: 'Sustainable Global Business Practices', ltp: '3-0-0', credits: 3 }
    ]
  },
  {
    slug: 'entrepreneurship-and-venture-creation-in-the-ai-era',
    code: 'OCN-FIN-04',
    title: 'Entrepreneurship and Venture Creation in the AI Era',
    theme: 'finance',
    unit: 'Rajendra Mishra School of Engineering Entrepreneurship',
    credits: 14,
    courseCount: '5',
    contactHours: '168',
    prereq: 'None',
    summary: 'Equips learners to transform innovative ideas into viable ventures by integrating technical problem-solving with business strategy. Emphasises design thinking, product development, business model innovation, feasibility assessment, financing and market potential. The capstone requires a prototype or business concept, a business plan, and a pitch to a panel of faculty, industry and investors.',
    courses: [
      { name: 'Foundation of Entrepreneurship', ltp: '3-0-0', credits: 3 },
      { name: 'Product Development', ltp: '3-0-0', credits: 3 },
      { name: 'Design Thinking Laboratory', ltp: '0-0-3', credits: 2 },
      { name: 'Financing New Venture', ltp: '3-0-0', credits: 3 },
      { name: 'Marketing and Market Research', ltp: '2-1-0', credits: 3 }
    ],
    tags: ['Capstone', 'Laboratory']
  },

  /* -------------- THEME 03 · Energy, Sustainability and Climate ---------- */
  {
    slug: 'battery-technology-for-energy-storage',
    code: 'OCN-ENR-01',
    title: 'Battery Technology for Energy Storage',
    theme: 'energy',
    unit: 'School of Energy Science and Engineering',
    credits: 13,
    courseCount: '2 courses + capstone',
    contactHours: '156',
    prereq: 'None',
    summary: 'A broad overview of energy storage technologies, comparing batteries, fuel cells and alternative systems. Covers the fundamentals of battery operation, key components and performance metrics, followed by rechargeable battery behaviour, modelling and simulation.',
    courses: [
      { name: 'Battery Storage and Fuel Cells', ltp: '3-1-0', credits: 4 },
      { name: 'Rechargeable Battery Performance Modeling', ltp: '3-0-0', credits: 3 },
      { name: 'Capstone Project', ltp: '0-0-6', credits: 6 }
    ],
    tags: ['Capstone']
  },
  {
    slug: 'modern-methods-in-thermal-fluid-sciences',
    code: 'OCN-ENR-02',
    title: 'Modern Methods in Thermal-Fluid Sciences and Engineering',
    theme: 'energy',
    unit: 'Department of Mechanical Engineering',
    credits: 12,
    courseCount: '4',
    contactHours: '144',
    prereq: 'None',
    summary: 'A research-driven journey through the core and cutting-edge domains of thermal-fluid sciences, spanning fundamental heat transfer and fluid mechanics, computational methods including CFD and OpenFOAM, AI and ML driven flow analysis, microscale thermo-fluid systems, IC engine technologies and sustainable energy applications.',
    courses: [],
    note: 'The detailed course stack for this Micro-Specialisation is being finalised by the department and will be shared on confirmation.',
    tags: ['Stack being finalised']
  },
  {
    slug: 'cryogenics-for-energy-and-environment',
    code: 'OCN-ENR-03',
    title: 'Cryogenics for Energy and Environment',
    theme: 'energy',
    unit: 'Cryogenic Engineering Centre',
    credits: 19,
    courseCount: '6',
    contactHours: '228',
    prereq: 'None',
    summary: 'Covers industrial-scale production of low temperature fluids such as LNG, liquid hydrogen and liquid oxygen, which serve as environmentally favourable energy carriers, together with carbon capture, gas separation and hydrogen technology.',
    courses: [
      { name: 'Cryogenic Liquefaction Systems and Cryocoolers', ltp: '4-0-0', credits: 4 },
      { name: 'LNG Engineering and Technology', ltp: '3-1-0', credits: 4 },
      { name: 'Cryogenic Carbon Capture', ltp: '2-0-0', credits: 2 },
      { name: 'Cryogenic Process Plants Simulation', ltp: '1-0-3', credits: 3 },
      { name: 'Hydrogen Technology', ltp: '3-0-0', credits: 3 },
      { name: 'Cryogenic Gas Separation and Purification', ltp: '3-0-0', credits: 3 }
    ]
  },
  {
    slug: 'cryogenic-technology-fundamentals-materials-applications',
    code: 'OCN-ENR-04',
    title: 'Cryogenic Technology Fundamentals, Materials and Applications',
    theme: 'energy',
    unit: 'Cryogenic Engineering Centre',
    credits: 18,
    courseCount: '5',
    contactHours: '216',
    prereq: 'None',
    summary: 'Provides the fundamentals underlying the applications of cryogenics, together with the relevant materials science and enabling technologies, from superconductivity and low-temperature matter through to vacuum technology and heat and mass transfer.',
    courses: [
      { name: 'Introduction to Cryogenics and Superconductivity', ltp: '3-1-0', credits: 4 },
      { name: 'Cryogenic Liquefaction Systems and Cryocoolers', ltp: '3-1-0', credits: 4 },
      { name: 'Heat and Mass Transfer in Cryogenic Systems', ltp: '3-1-0', credits: 4 },
      { name: 'Vacuum Technology', ltp: '3-0-0', credits: 3 },
      { name: 'Matter at Low Temperatures', ltp: '3-0-0', credits: 3 }
    ]
  },
  {
    slug: 'engineering-hydrology-and-water-infrastructures',
    code: 'OCN-ENR-05',
    title: 'Engineering Hydrology and Water Infrastructures using AI/ML',
    theme: 'energy',
    unit: 'Department of Civil Engineering',
    credits: 14,
    courseCount: '4 courses + 1 lab',
    contactHours: '168',
    prereq: 'Nil',
    summary: 'Integrates core principles of hydrology and hydraulic engineering with modern data-driven techniques to address contemporary water resource challenges. Learners gain analytical, computational and experimental skills to design, assess and optimise water infrastructure systems under varying environmental conditions.',
    courses: [
      { name: 'Hydraulic Engineering', ltp: '3-0-0', credits: 3 },
      { name: 'Engineering Hydrology', ltp: '3-0-0', credits: 3 },
      { name: 'Water Infrastructures', ltp: '3-0-0', credits: 3 },
      { name: 'Statistical and Machine Learning Methods', ltp: '3-0-0', credits: 3 },
      { name: 'Smart Water Laboratory', ltp: '0-0-2', credits: 2 }
    ],
    tags: ['Laboratory']
  },
  {
    slug: 'sustainable-water-and-remediation-technologies',
    code: 'OCN-ENR-06',
    title: 'Sustainable Water and Remediation Technologies',
    theme: 'energy',
    unit: 'School of Water Resources',
    credits: 13,
    courseCount: '4',
    contactHours: '156',
    prereq: 'None',
    summary: 'Focuses on emerging challenges and advanced technological solutions in water pollution control, aquatic ecosystem management, subsurface contamination remediation and sustainable water reclamation engineering.',
    courses: [
      { name: 'Geogenic Water Pollution and Control', ltp: '3-0-0', credits: 3 },
      { name: 'Aquatic Ecology and Microbiology', ltp: '4-0-0', credits: 4 },
      { name: 'Subsurface Contamination Remediation', ltp: '3-0-0', credits: 3 },
      { name: 'Advanced Water Reclamation Engineering', ltp: '3-0-0', credits: 3 }
    ]
  },

  /* ------------- THEME 04 · Advanced Manufacturing and Materials --------- */
  {
    slug: 'advanced-materials-and-manufacturing-with-digital-twins',
    code: 'OCN-MFG-01',
    title: 'Advanced Materials and Manufacturing with Digital Twins',
    theme: 'manufact',
    unit: 'Department of Mechanical Engineering',
    credits: 20,
    courseCount: '5',
    contactHours: '240',
    prereq: 'None',
    summary: 'A comprehensive treatment of modern manufacturing, from advanced welding, micro-machining and surface engineering to the fabrication of high-performance composites, supported by digital twin tools. Integrates computational methods such as Finite Element Analysis to solve real-world engineering problems, with emphasis on precision, quality control and industrial reliability. Includes international faculty from Concordia University and the University of Delaware.',
    courses: [
      { name: 'Welding and Allied Processes', ltp: '3-0-1', credits: 4 },
      { name: 'Precision and Micro Manufacturing', ltp: '3-0-1', credits: 4 },
      { name: 'Finite Element Analyses: Theory and Software Implementation', ltp: '3-0-1', credits: 4 },
      { name: 'Thermal Spray Coatings and Tribology', ltp: '3-0-1', credits: 4 },
      { name: 'Fabrication, Processing and Modelling of Advanced Materials', ltp: '3-0-1', credits: 4 }
    ],
    tags: ['International faculty', 'Laboratory']
  },
  {
    slug: 'polymer-science-and-technology',
    code: 'OCN-MFG-02',
    title: 'Polymer Science and Technology',
    theme: 'manufact',
    unit: 'Department of Chemistry',
    credits: 12,
    courseCount: '3',
    contactHours: '144',
    prereq: 'None',
    summary: 'Covers the fundamentals and applications of polymers, spanning synthesis, molecular weight determination and chemical characterisation, alongside processing and the characterisation of thermal, mechanical, rheological and optical properties.',
    courses: [
      { name: 'Polymer Chemistry', ltp: '3-1-0', credits: 4 },
      { name: 'Metallopolymers for Smart Applications', ltp: '3-1-0', credits: 4 },
      { name: 'Advanced Polymer Applications', ltp: '3-1-0', credits: 4 }
    ]
  },

  /* ---------------- THEME 05 · Healthcare and Life Sciences -------------- */
  {
    slug: 'biodesign-for-affordable-healthcare',
    code: 'OCN-HLT-01',
    title: 'Biodesign for Affordable Healthcare',
    theme: 'health',
    unit: 'Centre of Excellence in Affordable Healthcare',
    credits: 12,
    courseCount: '4 of 5 (one compulsory)',
    contactHours: '144',
    prereq: 'None',
    summary: 'Addresses the need for interdisciplinary training in healthcare technology, with a focus on affordable and scalable solutions. Spans medical device design, digital health, embedded systems, biomechanics and assistive technologies, areas typically taught in isolation but inherently connected in real-world healthcare systems.',
    courses: [
      { name: 'Biodesign Concept and Practice', ltp: '2-0-2', credits: 3, core: true },
      { name: 'Embedded System Design for Affordable Healthcare', ltp: '2-0-2', credits: 3 },
      { name: 'Introduction to Movement Biomechanics and Rehabilitation', ltp: '3-0-0', credits: 3 },
      { name: 'Biomedical Assistive System', ltp: '2-0-2', credits: 3 },
      { name: 'Design for Digital Health', ltp: '2-0-2', credits: 3 }
    ],
    note: 'Biodesign Concept and Practice is compulsory. The programme is completed with any three of the remaining four courses.',
    tags: ['Elective choice', 'Laboratory']
  },
  {
    slug: 'next-generation-sequencing-technologies',
    code: 'OCN-HLT-02',
    title: 'Next Generation Sequencing Technologies and Applications in Omics',
    theme: 'health',
    unit: 'Department of Bioscience and Biotechnology',
    credits: 14,
    courseCount: '4',
    contactHours: '168',
    prereq: 'Genetics',
    summary: 'Next Generation Sequencing has transformed the biological and medical sciences and is applied routinely across industrial and academic R&D. Introduces sequencing platforms, data analysis and applications across genomics, metagenomics and transcriptomics.',
    courses: [
      { name: 'Introduction to Next Generation Sequencing and Sequence Data Analysis', ltp: '2-0-2', credits: 3 },
      { name: 'Genome Assembly, Annotation and Analysis', ltp: '2-0-2', credits: 3 },
      { name: 'Applications of Metagenomics', ltp: '3-1-0', credits: 4 },
      { name: 'RNA-sequencing and Transcriptomic Data Analysis', ltp: '3-0-2', credits: 4 }
    ],
    tags: ['Laboratory']
  },

  /* ------------- THEME 06 · Autonomous Systems and Aerospace ------------- */
  {
    slug: 'drone-technology',
    code: 'OCN-AER-01',
    title: 'Drone Technology',
    theme: 'aero',
    unit: 'Aerospace Engineering, ECE, AI and Mathematics',
    credits: 16,
    courseCount: '6 courses + project',
    contactHours: '204',
    prereq: 'NA',
    summary: 'A multi-disciplinary programme spanning aerospace, electronics, AI and mathematics, covering drone dynamics, aerodynamics and propulsion, flight controls, avionics and AI for drone systems, closing with applications, case studies and a dedicated project. Includes international faculty from Texas A&M University and an industry contributor.',
    courses: [
      { name: 'Mathematical Foundations for Drone Technology', ltp: '2-0-0', credits: 2 },
      { name: 'Aerodynamics and Propulsion for Drone Systems', ltp: '2-0-0', credits: 2 },
      { name: 'Fundamentals of Drone Flight Controls', ltp: '3-0-0', credits: 3 },
      { name: 'Avionics', ltp: '2-0-0', credits: 2 },
      { name: 'AI for Drone Systems', ltp: '2-0-0', credits: 2 },
      { name: 'Drone Applications and Case Studies', ltp: '2-0-0', credits: 2 },
      { name: 'Project', ltp: '0-0-4', credits: 3 }
    ],
    tags: ['International faculty', 'Project component', 'Multi-disciplinary']
  },
  {
    slug: 'aerodynamics-and-control-of-autonomous-drones',
    code: 'OCN-AER-02',
    title: 'Aerodynamics and Control of Autonomous Drones',
    theme: 'aero',
    unit: 'Department of Aerospace Engineering',
    credits: 14,
    courseCount: '4',
    contactHours: '168',
    prereq: 'Basic Engineering Mathematics',
    summary: 'Introduces the aerodynamic, control and design foundations required for modern unmanned aerial vehicles and small autonomous aircraft. Aligned with current aerospace and drone-technology trends including autonomous UAVs, advanced air mobility, Beyond Visual Line of Sight operations and indigenous drone-system development.',
    courses: [
      { name: 'Introduction to Aerodynamics', ltp: '3-1-0', credits: 4 },
      { name: 'Introduction to Flight Vehicle Controls', ltp: '3-0-0', credits: 3 },
      { name: 'Unsteady Aerodynamics', ltp: '3-0-0', credits: 3 },
      { name: 'Aircraft Design and Optimization', ltp: '3-1-0', credits: 4 }
    ]
  },

  /* -------------- THEME 07 · Next-Generation Communications -------------- */
  {
    slug: '6g-netra',
    code: 'OCN-COM-01',
    title: '6G NETRA: Networks, Edge Intelligence, RAN and Architectures',
    theme: 'comms',
    unit: 'G. S. Sanyal School of Telecommunications',
    credits: 14,
    courseCount: '4 courses + 1 laboratory',
    contactHours: '168',
    prereq: 'Digital Communication, Computer Networks, Probability Theory, Basic Programming',
    summary: 'Covers the network and systems stack of next-generation wireless: AI-native and self-optimising networks, O-RAN and programmable RAN, edge and semantic communication, network digital twins, and space-air-ground-sea integrated architectures. Blends rigorous foundations in network modelling, optimisation and machine learning with extensive hands-on design, simulation and emulation.',
    courses: [
      { name: 'Foundations of 6G Networks', ltp: '3-0-0', credits: 3 },
      { name: 'AI-Native and Self-Optimising 6G Networks', ltp: '3-0-0', credits: 3 },
      { name: '6G Network Systems Laboratory: Design, Simulation and Emulation', ltp: '0-0-3', credits: 2 },
      { name: '6G Architecture and Protocol Stack', ltp: '3-0-0', credits: 3 },
      { name: '6G Networks for Cyber-physical and Immersive Systems', ltp: '3-0-0', credits: 3 }
    ],
    tags: ['Laboratory']
  },
  {
    slug: '6g-phynext',
    code: 'OCN-COM-02',
    title: '6G PHYNEXT: Physical Layer Emerging Technologies',
    theme: 'comms',
    unit: 'G. S. Sanyal School of Telecommunications',
    credits: 14,
    courseCount: '4 courses + 1 laboratory',
    contactHours: '168',
    prereq: 'Digital Communication, Signals and Systems, Probability Theory',
    summary: 'Covers the physical layer of next-generation wireless: waveform design, advanced antenna technologies for high-frequency wideband communication, AI-enabled transceiver algorithm design, and intelligent sensing with hardware acceleration. Combines rigorous foundations with hands-on laboratory training in design, simulation and hardware realisation.',
    courses: [
      { name: 'Foundations of Wireless Physical Layer Systems and Signal Processing', ltp: '3-0-0', credits: 3 },
      { name: 'AI-Enabled Transceiver Algorithm Design', ltp: '3-0-0', credits: 3 },
      { name: 'Waveform Design and Advanced Antenna Technologies for High Frequency Wideband Communications', ltp: '3-0-0', credits: 3 },
      { name: 'Intelligent Sensing and Hardware Acceleration for 6G Systems', ltp: '2-0-0', credits: 3 },
      { name: 'PHY Systems Laboratory: Design, Simulation and Hardware Realization', ltp: '0-0-2', credits: 2 }
    ],
    note: 'Courses 1 and 2 are foundational, courses 3 and 4 are advanced specialisation courses, and course 5 is a hands-on laboratory.',
    tags: ['Laboratory']
  },

  /* ----------------- THEME 08 · Safety and Risk Engineering -------------- */
  {
    slug: 'integrated-safety-engineering-and-economics',
    code: 'OCN-SAF-01',
    title: 'Integrated Safety Engineering and Economics',
    theme: 'safety',
    unit: 'Centre of Excellence on Safety Engineering and Analytics',
    credits: 12,
    courseCount: '3',
    contactHours: '144',
    prereq: 'None',
    summary: 'Builds an integrated understanding of safety across industrial, economic and occupational domains. Process safety covers hazard identification, risk assessment and control strategies; safety economics examines the cost-benefit analysis of safety investment; occupational safety engineering addresses workplace hazard management.',
    courses: [
      { name: 'Process Engineering', ltp: '3-1-0', credits: 4 },
      { name: 'Safety Economics', ltp: '3-1-0', credits: 4 },
      { name: 'Occupational Safety Engineering', ltp: '3-1-0', credits: 4 }
    ]
  }
];

/* Convenience lookups used by the page scripts. */
const OCN_THEME_BY_ID = OCN_THEMES.reduce((m, t) => (m[t.id] = t, m), {});
const OCN_UNITS = [...new Set(OCN_CATALOGUE.map(p => p.unit))].sort();

if (typeof module !== 'undefined') {
  module.exports = { OCN_THEMES, OCN_CATALOGUE, OCN_THEME_BY_ID, OCN_UNITS };
}
