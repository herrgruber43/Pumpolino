var CONTENT = {

  site: {
    tagline: 'Precision, applied.',
    url:     'pumpolino.com',
  },

  nav: {
    process:  'Process & Intelligence',
    art:      'Art & Provenance',
    pumps:    'Industrial Pumps & Art',
    contact:  'Contact',
    legal:    'Legal Notice',
  },

  /* ── Process & Intelligence ── */
  process: {
    title:  'Process &<br>Intelligence',
    sub:    'Consulting · Data · AI',
    intro:  'We work where <strong>complexity asks for calm.</strong>',
    body:   'Systems that move: water · information · decisions<br><br>Pumpolino combines deep technical expertise in industrial processes with modern data architecture and applied intelligence.',

    serviceflow: {
      title:      'Pumpolino ServiceFlow',
      sub:        'Software · Service · Automation',
      lead:       'Moving from reactive service to controlled operations. ServiceFlow transforms efficiency into structure, bringing service history, scheduling, and resource allocation into a single, transparent system.',
      stepsLabel: 'Implementation',
      features: [
        { label: 'Central Data Management', text: 'All service history and product customisations are unified in one place. Knowledge that was scattered across teams and documents becomes a single, reliable source of truth: accessible and consistent over time.' },
        { label: 'Automation',              text: 'Well-designed systems do not react, they anticipate. Service intervals are tracked automatically and technicians are notified before issues arise, shifting the operating mode from reactive to proactive.' },
        { label: 'Resource Planning',       text: 'Specialists, spare parts, and logistics are coordinated with accuracy. The right expertise is available exactly when needed, reducing operational friction and keeping service delivery consistent.' },
      ],
      steps: [
        { title: 'Analysis',                  text: 'Definition of processes and identification of tailored features.' },
        { title: 'Configuration & Migration', text: 'Data integration into existing workflows.' },
        { title: 'Rollout',                   text: 'Phased implementation with user training.' },
      ],
    },

    flowsales: {
      title:      'Pumpolino FlowSales',
      sub:        'Software · Sales · Intelligence',
      lead:       'Structuring decisions before they are made. FlowSales turns experience into reproducible outcomes. It transforms project knowledge into structured sales intelligence that supports every stage of the sales process.',
      stepsLabel: 'Implementation',
      features: [
        { label: 'Digital Twin',       text: 'Every project is captured in full: documents, certifications, configurations, and sensor data are centralised into a structured record. This makes institutional knowledge searchable, comparable, and available at the moment it is needed.' },
        { label: 'Sales Enablement',   text: 'Relevant references and comparable projects are surfaced at the right moment in the sales process. Conversion improves because proposals are grounded in demonstrated experience rather than general capability.' },
        { label: 'Quotation Support',  text: 'Semi-automated offers are generated from existing configurations and project data. Teams spend less time rebuilding proposals from scratch and more time on the decisions that require genuine expertise.' },
      ],
      steps: [
        { title: 'Data Structuring',     text: 'Organisation of relevant project and reference data.' },
        { title: 'System Configuration', text: 'Mapping sales processes and integrating data sources.' },
        { title: 'Deployment',           text: 'Gradual rollout with optimisation and user enablement.' },
      ],
    },
  },

  /* ── Art & Provenance ── */
  art: {
    title: 'Art &<br>Provenance',
    sub:   'Museums · Collections · Exhibition',
    intro: 'We work where <strong>meaning asks for discretion.</strong>',
    body:  'Objects of significance, handled with patience.<br><br>Pumpolino accompanies works of art through the careful architecture of acquisition, placement, and exhibition, in dialogue with museums, foundations, and private collections.',
  },

  /* ── Industrial Pumps & Art ── */
  pumps: {
    title:   'Industrial Pumps & Art',
    sub:     'form finds function',
    intro:   'At first glance, industrial systems and cultural assets seem unrelated. One is driven by engineering, the other by meaning and context. Yet both rely on the same discipline: precision in how information, responsibility, and time are managed.',
    sections: [
      {
        title:  'A Shared Language of Precision',
        lead:   'Long-term value is never accidental. It is built through structured documentation, clear histories, and consistent standards of handling. Whether managing technical systems or cultural objects, the underlying logic remains the same.',
        accent: 'blue',
        features: [
          { label: 'Central Data Management',      text: 'All relevant information is brought into one place. Service histories, modifications, and origin records are unified into a single, reliable source of truth. This creates clarity across teams and preserves knowledge over time.' },
          { label: 'Automation and Proactive Care', text: 'Well-designed systems do not react, they anticipate. Scheduled intervals, condition checks, and required actions are managed automatically, ensuring that attention is given at the right moment without disruption.' },
        ],
      },
      {
        title:  'Resource Planning and Coordination',
        lead:   'Complex environments require precise allocation of time, expertise, and responsibility. Planning follows clear structures that ensure continuity and reduce operational friction.',
        accent: 'red',
        features: [
          { label: 'Expert Deployment',              text: 'Specialists, logistics, and external partners are coordinated with accuracy. The right expertise is available exactly when needed, allowing operations to remain efficient and controlled.' },
          { label: 'Handling of Significant Assets', text: 'Every asset is treated according to its importance and condition. Defined processes ensure careful handling, continuity of knowledge, and a consistent standard of care throughout its lifecycle.' },
        ],
      },
      {
        title:  'Applied Intelligence in Daily Operations',
        lead:   'Data becomes valuable when it actively supports decisions. Information and processes are connected, enabling better timing, clearer priorities, and more informed actions.',
        accent: 'yellow',
        features: [
          { label: 'A Unified Platform Approach', text: 'A single platform creates transparency across all levels of the organisation. With a structured implementation, stakeholders gain clarity while complex operations become aligned and easier to manage.' },
        ],
      },
    ],
    closing: 'These two fields define the foundation not because they are similar on the surface, but because they reveal the same operational truth beneath it. Systems that preserve value, coordinate expertise, and create continuity over time.',
  },

  /* ── Contact ── */
  contact: {
    eyebrow:     'Contact',
    title:       'Write<br>to us.',
    note:        'We reply <strong>personally.</strong><br>no templates,<br>no automation.<br><br>pumpolino.com',
    web3formsKey: 'efb3d627-a22e-4735-a9a7-ff6069559d69',
    form: {
      firstname:        'First name',
      lastname:         'Last name',
      email:            'E-mail',
      phone:            'Phone',
      phoneNote:        'optional · for callback',
      subject:          'Subject',
      message:          'Message',
      submitBtn:        'Send message →',
      submitBtnSending: 'Sending …',
      hints:            ['General Enquiry', 'Support', 'Feedback', 'Other'],
      success:          '<strong>Thank you.</strong><br>Your message has been received. We will be in touch shortly.',
      error:            'Something went wrong. Please try again or write to us directly.',
    },
  },

  /* ── Legal ── */
  legal: {
    eyebrow: 'Legal Notice',
    title:   'Legal<br>Notice.',
    note:    'As of 2026',
    sections: [
      {
        title: 'Company Details',
        html:  '<address class="imp-address"><strong>Pumpolino is an early-stage project currently in development</strong></address>',
      },
      {
        title: 'Disclaimer',
        html:  '<div class="imp-body">The contents of this website have been compiled with the greatest possible care. However, Pumpolino accepts no responsibility for the accuracy, completeness or timeliness of the information provided. As a service provider, we are responsible for our own content on these pages in accordance with applicable law.<br><br>We are not obliged to monitor transmitted or stored third-party information or to investigate circumstances that indicate illegal activity. Obligations to remove or block the use of information in accordance with general law remain unaffected.<br><br>Our website contains links to external third-party websites over whose content we have no influence. The respective provider or operator of those pages is always responsible for their content. We accept no liability for any such linked content.</div>',
      },
      {
        title: 'Privacy',
        html:  '<div class="imp-body">It is generally possible to use our website without providing personal data. Where personal data (such as name, address or email address) is collected on our pages, this is always on a voluntary basis.<br><br>We point out that data transmission over the internet (e.g. communication by email) may be subject to security vulnerabilities. Complete protection of data from access by third parties is not possible.<br><br>We hereby expressly object to the use of contact data published as part of our legal notice obligation by third parties for the purpose of sending unsolicited advertising and informational materials.</div>',
      },
    ],
  },

};
