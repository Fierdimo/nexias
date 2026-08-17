export const en = {
  // Nav
  nav: {
    services: "Services",
    howItWorks: "How it works",
    results: "Results",
    demos: "Demos",
    cta: "Book your diagnosis",
  },

  // Hero
  hero: {
    headline: "Automate the repetitive. Decide with data. Scale without limits.",
    sub: "We turn your company's manual processes into intelligent systems that work 24/7. AI consulting and automation for Colombian businesses.",
    ctaPrimary: "Book your free diagnosis",
    ctaSecondary: "See how it works ↓",
    proof1Value: "12+",
    proof1Label: "pilot companies",
    proof2Value: "2,400+",
    proof2Label: "hours freed",
    proof3Value: "6",
    proof3Label: "sectors served",
  },

  // WhyNow / The Problem
  whyNow: {
    label: "The problem",
    heading: "Your team works hard. But works manually.",
    pain1Title: "Scattered data, blind decisions",
    pain1Body:
      "Information lives in spreadsheets, emails and disconnected systems. Without a unified view, decisions come late and with incomplete data.",
    pain2Title: "Repetitive tasks draining talent",
    pain2Body:
      "Reconciliations, reports, data entry, approvals — processes that consume hours every day and can be automated this week.",
    pain3Title: "Your competition already uses AI. Does your company?",
    pain3Body:
      "In Colombia, companies that adopted automation report +40% productive capacity. Every month you wait is an advantage you concede.",
    stat1: "67%",
    stat1Label: "of Colombian SMBs without an internal data team",
    stat2: "+40%",
    stat2Label: "productive capacity gain with RPA automation",
    stat3: "3× faster",
    stat3Label: "decision-making with real-time dashboards",
  },

  // Services
  services: {
    label: "Services",
    heading: "Everything you need to compete with data and AI",
    sub: "Five service lines designed for the complete cycle: diagnosis, implementation and ongoing support.",
    badge: "Most requested",
    demoBadge: "See live demo →",
    list: [
      {
        name: "Data & process diagnosis",
        desc: "We map your operations and find the highest-return opportunities. Deliverable: prioritized automation list with estimated ROI.",
      },
      {
        name: "Analytics & predictive BI",
        desc: "Dashboards and insights that anticipate demand, risk and performance. Make decisions before the problem occurs.",
        demo: "/demos/dashboard",
      },
      {
        name: "RPA + API automation",
        desc: "We eliminate repetitive tasks: accounting reconciliations, automatic reports, approval workflows and data entry.",
        badge: true,
      },
      {
        name: "AI assistants & agents",
        desc: "Chatbots and agents that serve customers, generate leads and support your internal team — available 24/7.",
        demo: "/demos/asistente-ia",
      },
      {
        name: "Continuous support",
        desc: "Monthly monitoring, adjustments and improvements to your systems. Your investment doesn't depreciate, it evolves.",
      },
    ],
  },

  // HowItWorks
  howItWorks: {
    label: "Process",
    heading: "From your problem to results in weeks, not months",
    steps: [
      {
        number: "01",
        title: "Diagnosis",
        desc: "We analyze your processes, data sources and priorities. In 1–2 weeks you have an opportunity map with estimated ROI.",
        time: "1–2 weeks",
      },
      {
        number: "02",
        title: "Implementation",
        desc: "We build, test and deploy prioritized solutions. We iterate in short cycles with visible results from the first delivery.",
        time: "4–10 weeks",
      },
      {
        number: "03",
        title: "Support",
        desc: "We monitor, adjust and improve monthly. Your team gains autonomy; we ensure the system evolves.",
        time: "Monthly",
      },
    ],
  },

  // Results
  results: {
    label: "Results",
    heading: "Real impact, measured in time and money",
    metrics: [
      { value: 40, suffix: "%", label: "more productive capacity" },
      { value: 2400, suffix: "+", label: "hours freed in pilot projects" },
      { value: 12, suffix: "+", label: "companies transformed" },
      { value: 6, suffix: "", label: "sectors served" },
    ],
    cases: [
      {
        title: "Approvals: from days to hours",
        body: "A financial services company automated its credit approval workflow. Response time dropped from 3 days to 4 hours.",
        sector: "Financial services",
      },
      {
        title: "+40% capacity without hiring",
        body: "A tourism operator automated itinerary and quote generation. Their team now handles twice as many clients.",
        sector: "Tourism",
      },
      {
        title: "Zero errors in accounting reconciliation",
        body: "A restaurant chain with 6 locations eliminated 14 hours of weekly manual work in sales and vendor reconciliation.",
        sector: "Restaurants",
      },
    ],
  },

  // FAQ
  faq: {
    label: "FAQ",
    heading: "What people always ask before getting started",
    items: [
      {
        q: "How much does a Nexias project cost?",
        a: "Every project is different. Closed projects start from diagnosis with a defined scope. In the free diagnosis we establish the exact scope and budget. No surprises.",
      },
      {
        q: "How long does it take to see results?",
        a: "In most cases, the first automations go live between 4 and 6 weeks. The diagnosis takes an additional 1–2 weeks at the start.",
      },
      {
        q: "Does it integrate with the systems we already use?",
        a: "Yes. We work with Excel, ERPs, CRMs, SQL/NoSQL databases, third-party APIs and tools like Google Sheets, WhatsApp Business, SAP, Siigo and more.",
      },
      {
        q: "What's the minimum company size?",
        a: "There's no minimum. We've worked with 5-person startups and 200+ employee companies. What matters is having repetitive processes or decisions to improve with data.",
      },
      {
        q: "Is my data safe?",
        a: "Yes. We sign an NDA before starting, work in controlled environments and never store client data on our own servers without explicit authorization.",
      },
      {
        q: "What happens after the project ends?",
        a: "We offer a monthly support retainer, or you can operate everything autonomously. We deliver complete documentation and train your team.",
      },
    ],
  },

  // Final CTA / Contact Form
  contact: {
    label: "Start today",
    heading: "Book your free diagnosis",
    sub: "30 minutes. No commitment. You'll leave with a clear map of automation opportunities in your company.",
    namePlaceholder: "Your name",
    companyPlaceholder: "Company",
    whatsappPlaceholder: "WhatsApp (with country code)",
    sectorLabel: "Sector",
    sectors: ["Restaurants", "Tourism", "Commerce", "Manufacturing", "Financial services", "Other"],
    submit: "Request free diagnosis →",
    altCTA: "Or message us directly on WhatsApp",
    successTitle: "Done! We'll contact you within 24 hours.",
    successBody: "Check your WhatsApp. We'll schedule a 30-minute call to explore your case.",
  },

  // Footer
  footer: {
    tagline: "Automate the repetitive. Decide with data. Scale without limits.",
    services: "Services",
    company: "Company",
    legal: "Legal",
    privacy: "Privacy",
    terms: "Terms",
    rights: "All rights reserved.",
    whatsapp: "Message us on WhatsApp",
  },
} as const;
