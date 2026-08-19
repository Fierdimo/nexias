export const en = {
  // Nav
  nav: {
    services: "Services",
    howItWorks: "How it works",
    results: "Results",
    demos: "Demos",
    cta: "Let's talk",
  },

  // Hero
  hero: {
    headlineA: "So no customer",
    headlineB: "is left without an answer.",
    sub: "An assistant that answers the phone, confirms appointments and makes the calls your team never gets to. Every day, at any hour.",
    ctaPrimary: "Let's talk for 30 minutes, free",
    ctaSecondary: "Try it yourself",
    proof1Value: "24/7",
    proof1Label: "Sundays and small hours included",
    proof2Value: "< 1 sec",
    proof2Label: "replies with no awkward silence",
    proof3Value: "Ley 2300",
    proof3Label: "meets the collections law, and proves it",
  },

  // WhyNow / The Problem
  whyNow: {
    label: "What happens today",
    heading: "It is not that your team does it badly. They just cannot keep up.",
    pain1Title: "The phone rings when there is nobody to answer",
    pain1Body:
      "Seven in the evening, a Saturday, mid-appointment. The call comes in, nobody takes it, and that person rarely calls back.",
    pain2Title: "The same five questions, every single day",
    pain2Body:
      "How much, what time you open, whether you take that insurance. Your people answer the same thing twenty times a day instead of helping whoever is already waiting.",
    pain3Title: "What you cannot get to simply does not happen",
    pain3Body:
      "The appointment nobody confirmed. The account left uncalled. The renewal that lapsed on Tuesday. Nobody did anything wrong — there was no time, and that is it.",
    stat1: "How many?",
    stat1Label: "calls go unmade every day",
    stat2: "What is it worth?",
    stat2Label: "is one appointment lost for want of a confirmation",
    stat3: "And Sunday?",
    stat3Label: "when someone writes and nobody is there",
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
    label: "What already works",
    heading: "Don't take our word for it. Try it.",
    sub: "The demo agent is live and answering right now. These are sector use cases, not referenced clients.",
    metrics: [
      { value: 24, suffix: "/7", label: "answers with no shifts or absences" },
      { value: 100, suffix: "%", label: "of calls are transcribed and analysed" },
      { value: 2300, suffix: "", label: "Ley 2300: every attempt is audited" },
      { value: 30, suffix: " min", label: "is all the free assessment takes" },
    ],
    cases: [
      {
        title: "The accounts nobody had time to call",
        body: "The agent dials the whole portfolio, filters, and only escalates to a person the debtor who answered and showed intent to pay.",
        sector: "Collections",
      },
      {
        title: "The empty chair at 3pm",
        body: "Confirms tomorrow's appointments and reschedules on the same call. It also reactivates patients who haven't returned in a year.",
        sector: "Health & aesthetics",
      },
      {
        title: "The renewal that lapsed on Tuesday",
        body: "Calls before the policy expires, answers questions from the broker's real information, and leaves the renewal ready to confirm.",
        sector: "Insurance",
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
