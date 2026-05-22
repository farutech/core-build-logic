export type Locale = "en" | "es";

export const translations = {
  en: {
    // Navigation
    nav: {
      capabilities: "Capabilities",
      methodology: "Methodology",
      stack: "Stack",
      work: "Work",
      studio: "Studio",
      careers: "Careers",
      startProject: "Start a project",
    },
    // Hero
    hero: {
      badge: "Now building: a multi-tenant analytics platform for a Series B fintech.",
      title1: "Engineering",
      title2: "the digital",
      title3: "frontier.",
      description:
        "We build scalable platforms, multi-tenant SaaS, and critical systems for teams that can't afford to rewrite. No shortcuts. No tech debt. Just engineering.",
      cta: "Start a project",
      ctaSecondary: "See how we build",
    },
    // Capabilities
    capabilities: {
      eyebrow: "01 — Capabilities",
      title: "Five disciplines.",
      titleHighlight: "One engineering org.",
      description:
        "Not a menu of services — a coherent system for shipping platforms that survive growth.",
      allCapabilities: "All capabilities",
      items: {
        productEngineering: {
          title: "Product Engineering",
          desc: "Idea to platform in production. No shortcuts, no tech debt.",
          bullets: ["Web & mobile platforms", "Internal tools", "Real-time systems", "Critical operations"],
        },
        saasPlatforms: {
          title: "SaaS Platforms",
          desc: "Multi-tenant, billing-ready, observable from day one.",
          bullets: ["Multi-tenant arch", "Billing & subscriptions", "Analytics & roles"],
        },
        architectureConsulting: {
          title: "Architecture & Consulting",
          desc: "Honest technical diagnostics. Actionable roadmaps.",
          bullets: ["Cloud modernization", "Performance audits", "Cost optimization"],
        },
        uxEngineering: {
          title: "UX Engineering",
          desc: "Interfaces that scale with your product, not against it.",
          bullets: ["Design systems", "Complex UI", "Motion & a11y"],
        },
        automationIntegrations: {
          title: "Automation & Integrations",
          desc: "Connect what you have with what you need.",
          bullets: ["APIs & webhooks", "Workflow engines", "Data sync"],
        },
      },
    },
    // Capabilities Index Page
    capabilitiesIndex: {
      eyebrow: "Capabilities",
      title: "Five disciplines.",
      titleHighlight: "One engineering org.",
      description:
        "Each capability stands alone. Together, they're how we build platforms that don't need to be rewritten in two years.",
    },
    // Capability Page Common
    capabilityPage: {
      backLink: "All capabilities",
      problemsEyebrow: "Why teams call us",
      problemsTitle: "The problems behind the request.",
      solutionsEyebrow: "What we deliver",
      solutionsTitle: "Outcomes,",
      solutionsTitleHighlight: "not features.",
      stackEyebrow: "Stack of choice",
      stackTitle: "Tools we reach for first.",
      useCasesEyebrow: "In production",
      useCasesTitle: "Scenarios we've shipped.",
      ctaButton: "Start the conversation",
    },
    // Product Engineering
    productEngineering: {
      eyebrow: "Product Engineering",
      title: "From idea to",
      highlight: "production platform.",
      intro:
        "We take products from napkin sketch to scalable production systems. Full-stack engineering with the rigor your roadmap deserves.",
      problems: [
        { title: "Prototype purgatory", desc: "Your MVP works but can't scale past the first real users." },
        { title: "Feature factory", desc: "Shipping fast but accruing debt that slows everything down." },
        { title: "Integration mess", desc: "Systems that don't talk to each other, manual work everywhere." },
        { title: "No observability", desc: "Something broke but nobody knows what, where, or why." },
      ],
      solutions: [
        { title: "Production-grade architecture", desc: "Systems designed to scale from day one, not rewritten in year two." },
        { title: "Continuous delivery", desc: "Ship multiple times a day with confidence. Automated testing, staging, rollback." },
        { title: "Event-driven design", desc: "Decoupled services that communicate reliably at any scale." },
        { title: "Full observability", desc: "Logs, metrics, traces. Know what's happening before users complain." },
      ],
      stack: ["TypeScript", "React", "Next.js", "Node.js", "PostgreSQL", "Redis", "AWS", "Vercel", "Docker", "GitHub Actions"],
      useCases: [
        { title: "Operations platform", desc: "Real-time dispatch and tracking for a logistics company handling 50k+ daily deliveries." },
        { title: "Internal tooling", desc: "Custom CRM that replaced 4 spreadsheets and 2 legacy systems for a sales team of 80." },
        { title: "Customer portal", desc: "Self-service platform that reduced support tickets by 60% for a B2B SaaS." },
      ],
      cta: "Let's build your platform.",
    },
    // SaaS Platforms
    saasPlatforms: {
      eyebrow: "SaaS Platforms",
      title: "Multi-tenant from",
      highlight: "the ground up.",
      intro:
        "We build SaaS platforms that handle multi-tenancy, billing, and scale from the start — not as an afterthought.",
      problems: [
        { title: "Tenant isolation", desc: "Data leaking between customers. Compliance nightmares." },
        { title: "Billing complexity", desc: "Usage-based pricing that doesn't match reality." },
        { title: "Onboarding friction", desc: "Days to get a new customer running instead of minutes." },
        { title: "Scale anxiety", desc: "Traffic spike? Hope the infrastructure holds." },
      ],
      solutions: [
        { title: "True multi-tenancy", desc: "Database-level isolation with shared infrastructure efficiency." },
        { title: "Billing that works", desc: "Stripe integration with usage tracking, trials, upgrades, and dunning." },
        { title: "Self-serve onboarding", desc: "Customers go from signup to value in under 5 minutes." },
        { title: "Auto-scaling infrastructure", desc: "Handle 10x traffic without waking anyone up." },
      ],
      stack: ["TypeScript", "Next.js", "PostgreSQL", "Stripe", "AWS", "Vercel", "Redis", "Clerk", "Resend"],
      useCases: [
        { title: "B2B Analytics SaaS", desc: "Multi-tenant analytics platform serving 200+ companies with isolated data." },
        { title: "Marketplace platform", desc: "Two-sided marketplace with seller dashboards, buyer flows, and payment splits." },
        { title: "White-label solution", desc: "Platform that 15 resellers customize and sell under their own brand." },
      ],
      cta: "Let's architect your SaaS.",
    },
    // Architecture Consulting
    architectureConsulting: {
      eyebrow: "Architecture & Consulting",
      title: "Diagnose. Plan.",
      highlight: "Execute.",
      intro:
        "Technical due diligence, architecture reviews, and modernization roadmaps. We tell you what's actually wrong and how to fix it.",
      problems: [
        { title: "Technical debt", desc: "Every feature takes longer than it should. The codebase fights back." },
        { title: "Cloud bills", desc: "Costs keep rising but nobody knows which service is the culprit." },
        { title: "Performance issues", desc: "Slow pages, timeouts, angry users. Quick fixes aren't fixing it." },
        { title: "Scaling uncertainty", desc: "Will this architecture handle 10x growth? Nobody's sure." },
      ],
      solutions: [
        { title: "Architecture audit", desc: "Comprehensive review of your stack with prioritized recommendations." },
        { title: "Cost optimization", desc: "Cut cloud spend 30-50% without sacrificing performance." },
        { title: "Performance engineering", desc: "Find and fix the bottlenecks. Measure before and after." },
        { title: "Modernization roadmap", desc: "Incremental path from legacy to modern without rewriting everything." },
      ],
      stack: ["AWS", "GCP", "Terraform", "Kubernetes", "PostgreSQL", "Redis", "Datadog", "Grafana"],
      useCases: [
        { title: "Due diligence", desc: "Technical assessment for a Series B investment. Identified $400k/year in avoidable cloud spend." },
        { title: "Modernization", desc: "Migrated monolith to microservices over 6 months without downtime." },
        { title: "Performance rescue", desc: "Reduced API latency from 2s to 200ms for a high-traffic e-commerce." },
      ],
      cta: "Let's review your architecture.",
    },
    // UX Engineering
    uxEngineering: {
      eyebrow: "UX Engineering",
      title: "Interfaces that",
      highlight: "scale.",
      intro:
        "We build design systems, complex UIs, and accessible interfaces that perform under pressure and delight users.",
      problems: [
        { title: "Inconsistent UI", desc: "Every screen looks different. Brand feels fragmented." },
        { title: "Slow interfaces", desc: "Janky animations, slow loads, frustrated users." },
        { title: "Accessibility gaps", desc: "Failing audits, compliance risk, users excluded." },
        { title: "Design-dev gap", desc: "Figma looks great. Production looks... different." },
      ],
      solutions: [
        { title: "Design system", desc: "Component library with tokens, variants, and documentation that actually gets used." },
        { title: "Performance-first UI", desc: "60fps animations, optimistic updates, perceived speed." },
        { title: "Accessibility by default", desc: "WCAG 2.1 AA compliance built in, not bolted on." },
        { title: "Figma-to-code fidelity", desc: "What designers envision is what users experience." },
      ],
      stack: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Radix UI", "Storybook", "Figma"],
      useCases: [
        { title: "Design system", desc: "60+ components used across 4 products by a team of 12 engineers." },
        { title: "Dashboard rebuild", desc: "Complex analytics dashboard that renders 10k data points smoothly." },
        { title: "Mobile web app", desc: "PWA with offline support and native-like interactions for field teams." },
      ],
      cta: "Let's design your system.",
    },
    // Automation & Integrations
    automationIntegrations: {
      eyebrow: "Automation & Integrations",
      title: "Connect",
      highlight: "everything.",
      intro:
        "We automate workflows, integrate systems, and eliminate the manual work that's slowing your team down.",
      problems: [
        { title: "Manual processes", desc: "Copy-paste between systems. Human error. Wasted hours." },
        { title: "Data silos", desc: "Information trapped in tools that don't talk to each other." },
        { title: "Brittle integrations", desc: "Sync breaks. Nobody notices until customers complain." },
        { title: "No visibility", desc: "Which automations ran? Did they succeed? Who knows." },
      ],
      solutions: [
        { title: "Custom integrations", desc: "APIs, webhooks, and ETL that actually work reliably." },
        { title: "Workflow automation", desc: "Replace manual steps with automated, auditable processes." },
        { title: "Data synchronization", desc: "Keep systems in sync in real-time or on schedule." },
        { title: "Monitoring & alerts", desc: "Know when integrations fail before business is impacted." },
      ],
      stack: ["Node.js", "Python", "Temporal", "n8n", "PostgreSQL", "Redis", "AWS Lambda", "Zapier"],
      useCases: [
        { title: "CRM sync", desc: "Bi-directional sync between Salesforce and internal systems for a sales team of 200." },
        { title: "Order automation", desc: "End-to-end order processing that eliminated 20 hours/week of manual work." },
        { title: "Data pipeline", desc: "ETL system processing 1M+ records daily from 5 different sources." },
      ],
      cta: "Let's automate your workflows.",
    },
    // Methodology
    methodology: {
      eyebrow: "Methodology",
      title: "How we build",
      titleHighlight: "what we build.",
      description:
        "A process refined over dozens of products. Not waterfall, not pure agile — pragmatic engineering that ships.",
      steps: [
        {
          number: "01",
          title: "Discovery",
          desc: "We dig into your business, users, and constraints. No assumptions, just questions until we understand.",
        },
        {
          number: "02",
          title: "Architecture",
          desc: "Design the system before writing code. Data models, APIs, infrastructure. Decisions documented.",
        },
        {
          number: "03",
          title: "Foundation",
          desc: "CI/CD, testing, monitoring. The boring stuff that makes everything else possible.",
        },
        {
          number: "04",
          title: "Build",
          desc: "Incremental delivery. Working software every week. Course-correct based on reality.",
        },
        {
          number: "05",
          title: "Ship & Scale",
          desc: "Launch with confidence. Then optimize, monitor, and iterate based on real usage.",
        },
      ],
    },
    // Architecture section
    architecture: {
      eyebrow: "03 — Architecture",
      title: "Systems designed to",
      titleHighlight: "outlast trends.",
      description: "We make technology decisions that age well. No hype-driven development.",
      principles: [
        { title: "Boring technology", desc: "Proven tools over shiny ones. PostgreSQL > flavor-of-the-month database." },
        { title: "Incremental complexity", desc: "Start simple. Add complexity only when the problem demands it." },
        { title: "Observable by default", desc: "Every system ships with logs, metrics, and traces. No black boxes." },
        { title: "Failure-ready", desc: "Systems that degrade gracefully. Retry logic, circuit breakers, fallbacks." },
      ],
    },
    // Work section
    work: {
      eyebrow: "04 — Work",
      title: "Projects we've",
      titleHighlight: "shipped.",
      description: "A selection of platforms and systems we've built for teams that needed it done right.",
      viewAll: "View all projects",
      projects: [
        {
          title: "Logistics Platform",
          category: "Operations",
          desc: "Real-time dispatch, route optimization, and driver management for 50k+ daily deliveries.",
        },
        {
          title: "Analytics SaaS",
          category: "SaaS Platform",
          desc: "Multi-tenant analytics with custom dashboards, white-labeling, and enterprise SSO.",
        },
        {
          title: "Fintech Dashboard",
          category: "Product Engineering",
          desc: "Portfolio management and reporting for a wealth management firm with $2B AUM.",
        },
      ],
    },
    // Studio section
    studioPage: {
      eyebrow: "Studio",
      title: "Engineering without",
      titleHighlight: "the overhead.",
      description:
        "A lean team of senior engineers, architects, and product thinkers. No account managers, no juniors learning on your dime.",
      values: [
        {
          title: "Senior-only team",
          desc: "Every engineer has 5+ years of production experience. No training wheels.",
        },
        {
          title: "Direct communication",
          desc: "Talk to the people building your product. No telephone game.",
        },
        {
          title: "Async-first",
          desc: "Deep work over meetings. Daily standups are optional, weekly syncs are mandatory.",
        },
        {
          title: "Ownership mentality",
          desc: "We care about outcomes, not hours. Your success is our reputation.",
        },
      ],
    },
    // Stack page
    stackPage: {
      eyebrow: "Stack",
      title: "Tools we trust in",
      titleHighlight: "production.",
      description:
        "Boring technology that works. We pick tools based on reliability, performance, and developer experience — not hype.",
      categories: {
        frontend: "Frontend",
        backend: "Backend",
        data: "Data",
        infrastructure: "Infrastructure",
        tools: "Tools",
      },
    },
    // Work page
    workPage: {
      eyebrow: "Work",
      title: "Projects that",
      titleHighlight: "shipped.",
      description:
        "A selection of platforms, systems, and products we've built for teams that needed engineering done right.",
    },
    // Careers page
    careersPage: {
      eyebrow: "Careers",
      title: "Build with",
      titleHighlight: "purpose.",
      description:
        "Join a team that ships real products for real businesses. Remote-first, async-friendly, senior-focused.",
      noOpenings: "No open positions right now.",
      noOpeningsDesc:
        "We're always interested in exceptional engineers. Drop us a line and tell us what you're building.",
      spontaneous: "Send spontaneous application",
      benefits: {
        title: "Why FaruTech",
        items: [
          { title: "Remote-first", desc: "Work from anywhere. We've been distributed since day one." },
          { title: "Async culture", desc: "Deep work over meetings. Your calendar is yours." },
          { title: "Senior team", desc: "Work with engineers who've shipped at scale before." },
          { title: "Real projects", desc: "No maintenance mode. New products, real challenges." },
        ],
      },
    },
    // Final CTA
    finalCTA: {
      title: "Let's build something",
      titleHighlight: "that matters.",
      description: "No sales pitch. Just a conversation about what you're trying to build and whether we can help.",
      cta: "Start the conversation",
    },
    // Footer
    footer: {
      description: "Engineering the digital frontier. We build platforms that have to scale — for real.",
      capabilities: "Capabilities",
      company: "Company",
      contact: "Contact",
      location: "Remote · LATAM · Global",
      copyright: "FaruTech. Engineering the digital frontier.",
      privacy: "Privacy",
      terms: "Terms",
      security: "Security",
    },
    // 404
    notFound: {
      title: "404",
      subtitle: "Page not found",
      description: "This route doesn't exist. Yet.",
      backHome: "Back home",
    },
    // Error
    error: {
      title: "Something broke on our end.",
      description: "We logged it. Try again or head home.",
      tryAgain: "Try again",
      goHome: "Go home",
    },
    // Proof bar
    proofBar: {
      experience: "years of production experience",
      platforms: "platforms shipped",
      uptime: "average uptime across systems",
      growth: "traffic growth handled",
    },
    // Legal pages
    privacy: {
      title: "Privacy Policy",
      lastUpdated: "Last updated",
      intro:
        "At FaruTech, we respect your privacy and are committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information.",
      sections: [
        {
          title: "Information We Collect",
          content:
            "We collect information you provide directly to us, such as when you fill out a contact form, request a consultation, or communicate with us via email. This may include your name, email address, company name, and details about your project.",
        },
        {
          title: "How We Use Your Information",
          content:
            "We use the information we collect to respond to your inquiries, provide our services, send you relevant communications, improve our website and services, and comply with legal obligations.",
        },
        {
          title: "Data Sharing",
          content:
            "We do not sell, trade, or rent your personal information to third parties. We may share your information with trusted service providers who assist us in operating our website and conducting our business, subject to confidentiality agreements.",
        },
        {
          title: "Data Security",
          content:
            "We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.",
        },
        {
          title: "Your Rights",
          content:
            "You have the right to access, correct, or delete your personal data. You may also object to or restrict certain processing of your data. To exercise these rights, please contact us at hello@farutech.com.",
        },
        {
          title: "Cookies",
          content:
            "Our website may use cookies to enhance your browsing experience. You can control cookie settings through your browser preferences.",
        },
        {
          title: "Contact Us",
          content:
            "If you have any questions about this Privacy Policy, please contact us at hello@farutech.com.",
        },
      ],
    },
    terms: {
      title: "Terms of Service",
      lastUpdated: "Last updated",
      intro:
        "These Terms of Service govern your use of FaruTech's website and services. By accessing our website or engaging our services, you agree to these terms.",
      sections: [
        {
          title: "Services",
          content:
            "FaruTech provides software engineering, product development, and technical consulting services. The specific scope, deliverables, and terms of any engagement will be defined in a separate agreement.",
        },
        {
          title: "Intellectual Property",
          content:
            "Unless otherwise specified in a project agreement, all intellectual property created during an engagement belongs to the client upon full payment. FaruTech retains the right to use general knowledge and skills acquired during the project.",
        },
        {
          title: "Confidentiality",
          content:
            "We treat all client information as confidential. We will not disclose your business information, technical details, or project specifics to third parties without your consent.",
        },
        {
          title: "Payment Terms",
          content:
            "Payment terms are specified in individual project agreements. Late payments may incur additional fees and may result in suspension of services.",
        },
        {
          title: "Limitation of Liability",
          content:
            "FaruTech's liability is limited to the fees paid for the specific service in question. We are not liable for indirect, incidental, or consequential damages.",
        },
        {
          title: "Termination",
          content:
            "Either party may terminate an engagement with written notice as specified in the project agreement. Upon termination, client will pay for all work completed up to the termination date.",
        },
        {
          title: "Governing Law",
          content:
            "These terms are governed by applicable law. Any disputes will be resolved through negotiation or, if necessary, binding arbitration.",
        },
      ],
    },
    security: {
      title: "Security",
      lastUpdated: "Last updated",
      intro:
        "At FaruTech, security is not an afterthought — it's foundational to everything we build. Here's how we protect your data and systems.",
      sections: [
        {
          title: "Infrastructure Security",
          content:
            "We use industry-leading cloud providers with SOC 2 Type II compliance. All data is encrypted at rest and in transit using AES-256 and TLS 1.3.",
        },
        {
          title: "Access Control",
          content:
            "We implement the principle of least privilege. Access to client systems and data is restricted to team members who need it, with multi-factor authentication required.",
        },
        {
          title: "Secure Development",
          content:
            "Our development practices include code review, automated security scanning, dependency vulnerability monitoring, and regular security training for all team members.",
        },
        {
          title: "Data Protection",
          content:
            "Client data is isolated and never shared between projects. We maintain regular backups and have tested disaster recovery procedures.",
        },
        {
          title: "Incident Response",
          content:
            "We have documented incident response procedures. In the event of a security incident, we will notify affected clients within 24 hours and provide regular updates.",
        },
        {
          title: "Compliance",
          content:
            "We can work within GDPR, HIPAA, SOC 2, and other compliance frameworks as required by your project. Specific compliance needs should be discussed during project scoping.",
        },
        {
          title: "Responsible Disclosure",
          content:
            "If you discover a security vulnerability, please report it to security@farutech.com. We appreciate responsible disclosure and will work with you to address any issues.",
        },
      ],
    },
  },
  es: {
    // Navigation
    nav: {
      capabilities: "Capacidades",
      methodology: "Metodologia",
      stack: "Stack",
      work: "Proyectos",
      studio: "Estudio",
      careers: "Carreras",
      startProject: "Iniciar proyecto",
    },
    // Hero
    hero: {
      badge: "Construyendo: plataforma de analytics multi-tenant para una fintech Serie B.",
      title1: "Ingenieria",
      title2: "en la frontera",
      title3: "digital.",
      description:
        "Construimos plataformas escalables, SaaS multi-tenant y sistemas criticos para equipos que no pueden permitirse reescribir. Sin atajos. Sin deuda tecnica. Solo ingenieria.",
      cta: "Iniciar proyecto",
      ctaSecondary: "Ver como construimos",
    },
    // Capabilities
    capabilities: {
      eyebrow: "01 — Capacidades",
      title: "Cinco disciplinas.",
      titleHighlight: "Una organizacion de ingenieria.",
      description:
        "No es un menu de servicios — es un sistema coherente para entregar plataformas que sobreviven al crecimiento.",
      allCapabilities: "Todas las capacidades",
      items: {
        productEngineering: {
          title: "Ingenieria de Producto",
          desc: "De idea a plataforma en produccion. Sin atajos, sin deuda tecnica.",
          bullets: ["Plataformas web y movil", "Herramientas internas", "Sistemas en tiempo real", "Operaciones criticas"],
        },
        saasPlatforms: {
          title: "Plataformas SaaS",
          desc: "Multi-tenant, listo para facturacion, observable desde el dia uno.",
          bullets: ["Arquitectura multi-tenant", "Facturacion y suscripciones", "Analytics y roles"],
        },
        architectureConsulting: {
          title: "Arquitectura y Consultoria",
          desc: "Diagnosticos tecnicos honestos. Roadmaps accionables.",
          bullets: ["Modernizacion cloud", "Auditorias de rendimiento", "Optimizacion de costos"],
        },
        uxEngineering: {
          title: "Ingenieria UX",
          desc: "Interfaces que escalan con tu producto, no en su contra.",
          bullets: ["Sistemas de diseno", "UI compleja", "Motion y a11y"],
        },
        automationIntegrations: {
          title: "Automatizacion e Integraciones",
          desc: "Conecta lo que tienes con lo que necesitas.",
          bullets: ["APIs y webhooks", "Motores de workflow", "Sincronizacion de datos"],
        },
      },
    },
    // Capabilities Index Page
    capabilitiesIndex: {
      eyebrow: "Capacidades",
      title: "Cinco disciplinas.",
      titleHighlight: "Una organizacion de ingenieria.",
      description:
        "Cada capacidad funciona por si sola. Juntas, son como construimos plataformas que no necesitan reescribirse en dos anos.",
    },
    // Capability Page Common
    capabilityPage: {
      backLink: "Todas las capacidades",
      problemsEyebrow: "Por que nos llaman",
      problemsTitle: "Los problemas detras de la solicitud.",
      solutionsEyebrow: "Lo que entregamos",
      solutionsTitle: "Resultados,",
      solutionsTitleHighlight: "no features.",
      stackEyebrow: "Stack de eleccion",
      stackTitle: "Herramientas que elegimos primero.",
      useCasesEyebrow: "En produccion",
      useCasesTitle: "Escenarios que hemos entregado.",
      ctaButton: "Iniciar la conversacion",
    },
    // Product Engineering
    productEngineering: {
      eyebrow: "Ingenieria de Producto",
      title: "De idea a",
      highlight: "plataforma en produccion.",
      intro:
        "Llevamos productos desde un boceto a sistemas de produccion escalables. Ingenieria full-stack con el rigor que tu roadmap merece.",
      problems: [
        { title: "Purgatorio del prototipo", desc: "Tu MVP funciona pero no escala mas alla de los primeros usuarios reales." },
        { title: "Fabrica de features", desc: "Entregando rapido pero acumulando deuda que ralentiza todo." },
        { title: "Caos de integraciones", desc: "Sistemas que no se comunican, trabajo manual en todas partes." },
        { title: "Sin observabilidad", desc: "Algo se rompio pero nadie sabe que, donde, o por que." },
      ],
      solutions: [
        { title: "Arquitectura production-grade", desc: "Sistemas disenados para escalar desde el dia uno, no reescritos en el ano dos." },
        { title: "Entrega continua", desc: "Despliega multiples veces al dia con confianza. Testing automatizado, staging, rollback." },
        { title: "Diseno event-driven", desc: "Servicios desacoplados que se comunican confiablemente a cualquier escala." },
        { title: "Observabilidad completa", desc: "Logs, metricas, traces. Sabe que esta pasando antes de que los usuarios se quejen." },
      ],
      stack: ["TypeScript", "React", "Next.js", "Node.js", "PostgreSQL", "Redis", "AWS", "Vercel", "Docker", "GitHub Actions"],
      useCases: [
        { title: "Plataforma de operaciones", desc: "Despacho y tracking en tiempo real para una empresa de logistica con 50k+ entregas diarias." },
        { title: "Herramientas internas", desc: "CRM personalizado que reemplazo 4 hojas de calculo y 2 sistemas legacy para un equipo de ventas de 80." },
        { title: "Portal de clientes", desc: "Plataforma de autoservicio que redujo tickets de soporte en 60% para un SaaS B2B." },
      ],
      cta: "Construyamos tu plataforma.",
    },
    // SaaS Platforms
    saasPlatforms: {
      eyebrow: "Plataformas SaaS",
      title: "Multi-tenant desde",
      highlight: "los cimientos.",
      intro:
        "Construimos plataformas SaaS que manejan multi-tenancy, facturacion y escala desde el inicio — no como una ocurrencia tardia.",
      problems: [
        { title: "Aislamiento de tenants", desc: "Datos filtrando entre clientes. Pesadillas de compliance." },
        { title: "Complejidad de facturacion", desc: "Precios basados en uso que no coinciden con la realidad." },
        { title: "Friccion en onboarding", desc: "Dias para tener un nuevo cliente funcionando en vez de minutos." },
        { title: "Ansiedad de escala", desc: "Pico de trafico? Esperemos que la infraestructura aguante." },
      ],
      solutions: [
        { title: "Multi-tenancy real", desc: "Aislamiento a nivel de base de datos con eficiencia de infraestructura compartida." },
        { title: "Facturacion que funciona", desc: "Integracion con Stripe con tracking de uso, trials, upgrades y dunning." },
        { title: "Onboarding self-service", desc: "Clientes van de registro a valor en menos de 5 minutos." },
        { title: "Infraestructura auto-escalable", desc: "Maneja 10x de trafico sin despertar a nadie." },
      ],
      stack: ["TypeScript", "Next.js", "PostgreSQL", "Stripe", "AWS", "Vercel", "Redis", "Clerk", "Resend"],
      useCases: [
        { title: "SaaS de Analytics B2B", desc: "Plataforma de analytics multi-tenant sirviendo a 200+ empresas con datos aislados." },
        { title: "Plataforma marketplace", desc: "Marketplace de dos lados con dashboards de vendedores, flujos de compradores y splits de pago." },
        { title: "Solucion white-label", desc: "Plataforma que 15 revendedores personalizan y venden bajo su propia marca." },
      ],
      cta: "Arquitecturemos tu SaaS.",
    },
    // Architecture Consulting
    architectureConsulting: {
      eyebrow: "Arquitectura y Consultoria",
      title: "Diagnosticar. Planear.",
      highlight: "Ejecutar.",
      intro:
        "Due diligence tecnico, revisiones de arquitectura y roadmaps de modernizacion. Te decimos que esta realmente mal y como arreglarlo.",
      problems: [
        { title: "Deuda tecnica", desc: "Cada feature toma mas de lo que deberia. El codigo pelea de vuelta." },
        { title: "Facturas de cloud", desc: "Los costos siguen subiendo pero nadie sabe cual servicio es el culpable." },
        { title: "Problemas de rendimiento", desc: "Paginas lentas, timeouts, usuarios enojados. Los parches rapidos no lo arreglan." },
        { title: "Incertidumbre de escala", desc: "Esta arquitectura aguantara 10x de crecimiento? Nadie esta seguro." },
      ],
      solutions: [
        { title: "Auditoria de arquitectura", desc: "Revision comprensiva de tu stack con recomendaciones priorizadas." },
        { title: "Optimizacion de costos", desc: "Reduce gastos de cloud 30-50% sin sacrificar rendimiento." },
        { title: "Ingenieria de rendimiento", desc: "Encuentra y arregla los cuellos de botella. Mide antes y despues." },
        { title: "Roadmap de modernizacion", desc: "Camino incremental de legacy a moderno sin reescribir todo." },
      ],
      stack: ["AWS", "GCP", "Terraform", "Kubernetes", "PostgreSQL", "Redis", "Datadog", "Grafana"],
      useCases: [
        { title: "Due diligence", desc: "Evaluacion tecnica para una inversion Serie B. Identificamos $400k/ano en gastos evitables de cloud." },
        { title: "Modernizacion", desc: "Migramos monolito a microservicios en 6 meses sin downtime." },
        { title: "Rescate de rendimiento", desc: "Redujimos latencia de API de 2s a 200ms para un e-commerce de alto trafico." },
      ],
      cta: "Revisemos tu arquitectura.",
    },
    // UX Engineering
    uxEngineering: {
      eyebrow: "Ingenieria UX",
      title: "Interfaces que",
      highlight: "escalan.",
      intro:
        "Construimos sistemas de diseno, UIs complejas e interfaces accesibles que funcionan bajo presion y deleitan usuarios.",
      problems: [
        { title: "UI inconsistente", desc: "Cada pantalla se ve diferente. La marca se siente fragmentada." },
        { title: "Interfaces lentas", desc: "Animaciones entrecortadas, cargas lentas, usuarios frustrados." },
        { title: "Brechas de accesibilidad", desc: "Fallando auditorias, riesgo de compliance, usuarios excluidos." },
        { title: "Brecha diseno-desarrollo", desc: "Figma se ve genial. Produccion se ve... diferente." },
      ],
      solutions: [
        { title: "Sistema de diseno", desc: "Libreria de componentes con tokens, variantes y documentacion que realmente se usa." },
        { title: "UI performance-first", desc: "Animaciones a 60fps, updates optimistas, velocidad percibida." },
        { title: "Accesibilidad por defecto", desc: "Cumplimiento WCAG 2.1 AA integrado, no agregado despues." },
        { title: "Fidelidad Figma-a-codigo", desc: "Lo que los disenadores imaginan es lo que los usuarios experimentan." },
      ],
      stack: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Radix UI", "Storybook", "Figma"],
      useCases: [
        { title: "Sistema de diseno", desc: "60+ componentes usados en 4 productos por un equipo de 12 ingenieros." },
        { title: "Reconstruccion de dashboard", desc: "Dashboard de analytics complejo que renderiza 10k puntos de datos suavemente." },
        { title: "App web movil", desc: "PWA con soporte offline e interacciones nativas para equipos de campo." },
      ],
      cta: "Disenemos tu sistema.",
    },
    // Automation & Integrations
    automationIntegrations: {
      eyebrow: "Automatizacion e Integraciones",
      title: "Conecta",
      highlight: "todo.",
      intro:
        "Automatizamos workflows, integramos sistemas y eliminamos el trabajo manual que esta ralentizando a tu equipo.",
      problems: [
        { title: "Procesos manuales", desc: "Copiar y pegar entre sistemas. Error humano. Horas desperdiciadas." },
        { title: "Silos de datos", desc: "Informacion atrapada en herramientas que no se comunican." },
        { title: "Integraciones fragiles", desc: "La sincronizacion se rompe. Nadie se da cuenta hasta que los clientes se quejan." },
        { title: "Sin visibilidad", desc: "Que automatizaciones corrieron? Fueron exitosas? Quien sabe." },
      ],
      solutions: [
        { title: "Integraciones personalizadas", desc: "APIs, webhooks y ETL que realmente funcionan de forma confiable." },
        { title: "Automatizacion de workflows", desc: "Reemplaza pasos manuales con procesos automatizados y auditables." },
        { title: "Sincronizacion de datos", desc: "Mantiene sistemas sincronizados en tiempo real o programado." },
        { title: "Monitoreo y alertas", desc: "Sabe cuando las integraciones fallan antes de que impacte el negocio." },
      ],
      stack: ["Node.js", "Python", "Temporal", "n8n", "PostgreSQL", "Redis", "AWS Lambda", "Zapier"],
      useCases: [
        { title: "Sincronizacion CRM", desc: "Sincronizacion bidireccional entre Salesforce y sistemas internos para un equipo de ventas de 200." },
        { title: "Automatizacion de ordenes", desc: "Procesamiento de ordenes de punta a punta que elimino 20 horas/semana de trabajo manual." },
        { title: "Pipeline de datos", desc: "Sistema ETL procesando 1M+ registros diarios de 5 fuentes diferentes." },
      ],
      cta: "Automaticemos tus workflows.",
    },
    // Methodology
    methodology: {
      eyebrow: "Metodologia",
      title: "Como construimos",
      titleHighlight: "lo que construimos.",
      description:
        "Un proceso refinado en docenas de productos. No waterfall, no agile puro — ingenieria pragmatica que entrega.",
      steps: [
        {
          number: "01",
          title: "Descubrimiento",
          desc: "Investigamos tu negocio, usuarios y restricciones. Sin suposiciones, solo preguntas hasta entender.",
        },
        {
          number: "02",
          title: "Arquitectura",
          desc: "Disenamos el sistema antes de escribir codigo. Modelos de datos, APIs, infraestructura. Decisiones documentadas.",
        },
        {
          number: "03",
          title: "Fundacion",
          desc: "CI/CD, testing, monitoreo. Lo aburrido que hace posible todo lo demas.",
        },
        {
          number: "04",
          title: "Construccion",
          desc: "Entrega incremental. Software funcionando cada semana. Correccion de curso basada en realidad.",
        },
        {
          number: "05",
          title: "Lanzamiento y Escala",
          desc: "Lanza con confianza. Luego optimiza, monitorea e itera basado en uso real.",
        },
      ],
    },
    // Architecture section
    architecture: {
      eyebrow: "03 — Arquitectura",
      title: "Sistemas disenados para",
      titleHighlight: "sobrevivir tendencias.",
      description: "Tomamos decisiones tecnologicas que envejecen bien. Sin desarrollo guiado por hype.",
      principles: [
        { title: "Tecnologia aburrida", desc: "Herramientas probadas sobre brillantes. PostgreSQL > base de datos de moda." },
        { title: "Complejidad incremental", desc: "Empieza simple. Agrega complejidad solo cuando el problema lo demanda." },
        { title: "Observable por defecto", desc: "Cada sistema viene con logs, metricas y traces. Sin cajas negras." },
        { title: "Preparado para fallos", desc: "Sistemas que degradan graciosamente. Logica de retry, circuit breakers, fallbacks." },
      ],
    },
    // Work section
    work: {
      eyebrow: "04 — Proyectos",
      title: "Proyectos que",
      titleHighlight: "entregamos.",
      description: "Una seleccion de plataformas y sistemas que construimos para equipos que necesitaban hacerlo bien.",
      viewAll: "Ver todos los proyectos",
      projects: [
        {
          title: "Plataforma Logistica",
          category: "Operaciones",
          desc: "Despacho en tiempo real, optimizacion de rutas y gestion de conductores para 50k+ entregas diarias.",
        },
        {
          title: "SaaS de Analytics",
          category: "Plataforma SaaS",
          desc: "Analytics multi-tenant con dashboards personalizados, white-labeling y SSO empresarial.",
        },
        {
          title: "Dashboard Fintech",
          category: "Ingenieria de Producto",
          desc: "Gestion de portafolios y reportes para una firma de wealth management con $2B AUM.",
        },
      ],
    },
    // Studio section
    studioPage: {
      eyebrow: "Estudio",
      title: "Ingenieria sin",
      titleHighlight: "el overhead.",
      description:
        "Un equipo lean de ingenieros senior, arquitectos y pensadores de producto. Sin account managers, sin juniors aprendiendo con tu dinero.",
      values: [
        {
          title: "Equipo solo senior",
          desc: "Cada ingeniero tiene 5+ anos de experiencia en produccion. Sin rueditas de entrenamiento.",
        },
        {
          title: "Comunicacion directa",
          desc: "Habla con las personas construyendo tu producto. Sin telefono descompuesto.",
        },
        {
          title: "Async-first",
          desc: "Trabajo profundo sobre reuniones. Daily standups son opcionales, syncs semanales son obligatorios.",
        },
        {
          title: "Mentalidad de ownership",
          desc: "Nos importan los resultados, no las horas. Tu exito es nuestra reputacion.",
        },
      ],
    },
    // Stack page
    stackPage: {
      eyebrow: "Stack",
      title: "Herramientas que confiamos en",
      titleHighlight: "produccion.",
      description:
        "Tecnologia aburrida que funciona. Elegimos herramientas basadas en confiabilidad, rendimiento y experiencia de desarrollador — no hype.",
      categories: {
        frontend: "Frontend",
        backend: "Backend",
        data: "Datos",
        infrastructure: "Infraestructura",
        tools: "Herramientas",
      },
    },
    // Work page
    workPage: {
      eyebrow: "Proyectos",
      title: "Proyectos que",
      titleHighlight: "entregamos.",
      description:
        "Una seleccion de plataformas, sistemas y productos que construimos para equipos que necesitaban ingenieria hecha bien.",
    },
    // Careers page
    careersPage: {
      eyebrow: "Carreras",
      title: "Construye con",
      titleHighlight: "proposito.",
      description:
        "Unete a un equipo que entrega productos reales para negocios reales. Remote-first, async-friendly, enfocado en seniors.",
      noOpenings: "No hay posiciones abiertas ahora.",
      noOpeningsDesc:
        "Siempre estamos interesados en ingenieros excepcionales. Escribenos y cuentanos que estas construyendo.",
      spontaneous: "Enviar aplicacion espontanea",
      benefits: {
        title: "Por que FaruTech",
        items: [
          { title: "Remote-first", desc: "Trabaja desde cualquier lugar. Somos distribuidos desde el dia uno." },
          { title: "Cultura async", desc: "Trabajo profundo sobre reuniones. Tu calendario es tuyo." },
          { title: "Equipo senior", desc: "Trabaja con ingenieros que han entregado a escala antes." },
          { title: "Proyectos reales", desc: "Sin modo mantenimiento. Productos nuevos, desafios reales." },
        ],
      },
    },
    // Final CTA
    finalCTA: {
      title: "Construyamos algo",
      titleHighlight: "que importe.",
      description: "Sin pitch de ventas. Solo una conversacion sobre lo que intentas construir y si podemos ayudar.",
      cta: "Iniciar la conversacion",
    },
    // Footer
    footer: {
      description: "Ingenieria en la frontera digital. Construimos plataformas que tienen que escalar — de verdad.",
      capabilities: "Capacidades",
      company: "Compania",
      contact: "Contacto",
      location: "Remoto · LATAM · Global",
      copyright: "FaruTech. Ingenieria en la frontera digital.",
      privacy: "Privacidad",
      terms: "Terminos",
      security: "Seguridad",
    },
    // 404
    notFound: {
      title: "404",
      subtitle: "Pagina no encontrada",
      description: "Esta ruta no existe. Todavia.",
      backHome: "Volver al inicio",
    },
    // Error
    error: {
      title: "Algo se rompio de nuestro lado.",
      description: "Lo registramos. Intenta de nuevo o vuelve al inicio.",
      tryAgain: "Intentar de nuevo",
      goHome: "Ir al inicio",
    },
    // Proof bar
    proofBar: {
      experience: "anos de experiencia en produccion",
      platforms: "plataformas entregadas",
      uptime: "uptime promedio en sistemas",
      growth: "crecimiento de trafico manejado",
    },
    // Legal pages
    privacy: {
      title: "Politica de Privacidad",
      lastUpdated: "Ultima actualizacion",
      intro:
        "En FaruTech, respetamos tu privacidad y estamos comprometidos a proteger tus datos personales. Esta politica de privacidad explica como recopilamos, usamos y protegemos tu informacion.",
      sections: [
        {
          title: "Informacion que Recopilamos",
          content:
            "Recopilamos informacion que nos proporcionas directamente, como cuando llenas un formulario de contacto, solicitas una consulta o te comunicas con nosotros por email. Esto puede incluir tu nombre, direccion de email, nombre de empresa y detalles sobre tu proyecto.",
        },
        {
          title: "Como Usamos tu Informacion",
          content:
            "Usamos la informacion que recopilamos para responder a tus consultas, proporcionar nuestros servicios, enviarte comunicaciones relevantes, mejorar nuestro sitio web y servicios, y cumplir con obligaciones legales.",
        },
        {
          title: "Compartir Datos",
          content:
            "No vendemos, intercambiamos ni alquilamos tu informacion personal a terceros. Podemos compartir tu informacion con proveedores de servicios de confianza que nos ayudan a operar nuestro sitio web y conducir nuestro negocio, sujeto a acuerdos de confidencialidad.",
        },
        {
          title: "Seguridad de Datos",
          content:
            "Implementamos medidas tecnicas y organizativas apropiadas para proteger tus datos personales contra acceso no autorizado, alteracion, divulgacion o destruccion.",
        },
        {
          title: "Tus Derechos",
          content:
            "Tienes derecho a acceder, corregir o eliminar tus datos personales. Tambien puedes objetar o restringir cierto procesamiento de tus datos. Para ejercer estos derechos, contactanos en hello@farutech.com.",
        },
        {
          title: "Cookies",
          content:
            "Nuestro sitio web puede usar cookies para mejorar tu experiencia de navegacion. Puedes controlar la configuracion de cookies a traves de las preferencias de tu navegador.",
        },
        {
          title: "Contactanos",
          content:
            "Si tienes preguntas sobre esta Politica de Privacidad, contactanos en hello@farutech.com.",
        },
      ],
    },
    terms: {
      title: "Terminos de Servicio",
      lastUpdated: "Ultima actualizacion",
      intro:
        "Estos Terminos de Servicio rigen tu uso del sitio web y servicios de FaruTech. Al acceder a nuestro sitio web o contratar nuestros servicios, aceptas estos terminos.",
      sections: [
        {
          title: "Servicios",
          content:
            "FaruTech proporciona servicios de ingenieria de software, desarrollo de productos y consultoria tecnica. El alcance especifico, entregables y terminos de cualquier compromiso se definiran en un acuerdo separado.",
        },
        {
          title: "Propiedad Intelectual",
          content:
            "A menos que se especifique lo contrario en un acuerdo de proyecto, toda la propiedad intelectual creada durante un compromiso pertenece al cliente tras el pago completo. FaruTech retiene el derecho de usar conocimientos y habilidades generales adquiridos durante el proyecto.",
        },
        {
          title: "Confidencialidad",
          content:
            "Tratamos toda la informacion del cliente como confidencial. No divulgaremos tu informacion de negocio, detalles tecnicos o especificos del proyecto a terceros sin tu consentimiento.",
        },
        {
          title: "Terminos de Pago",
          content:
            "Los terminos de pago se especifican en acuerdos de proyecto individuales. Los pagos atrasados pueden incurrir en cargos adicionales y pueden resultar en suspension de servicios.",
        },
        {
          title: "Limitacion de Responsabilidad",
          content:
            "La responsabilidad de FaruTech esta limitada a los honorarios pagados por el servicio especifico en cuestion. No somos responsables por danos indirectos, incidentales o consecuentes.",
        },
        {
          title: "Terminacion",
          content:
            "Cualquiera de las partes puede terminar un compromiso con aviso escrito segun se especifica en el acuerdo del proyecto. Tras la terminacion, el cliente pagara por todo el trabajo completado hasta la fecha de terminacion.",
        },
        {
          title: "Ley Aplicable",
          content:
            "Estos terminos se rigen por la ley aplicable. Cualquier disputa se resolvera mediante negociacion o, si es necesario, arbitraje vinculante.",
        },
      ],
    },
    security: {
      title: "Seguridad",
      lastUpdated: "Ultima actualizacion",
      intro:
        "En FaruTech, la seguridad no es una ocurrencia tardia — es fundamental para todo lo que construimos. Asi es como protegemos tus datos y sistemas.",
      sections: [
        {
          title: "Seguridad de Infraestructura",
          content:
            "Usamos proveedores de cloud lideres en la industria con cumplimiento SOC 2 Type II. Todos los datos estan encriptados en reposo y en transito usando AES-256 y TLS 1.3.",
        },
        {
          title: "Control de Acceso",
          content:
            "Implementamos el principio de minimo privilegio. El acceso a sistemas y datos de clientes esta restringido a miembros del equipo que lo necesitan, con autenticacion multi-factor requerida.",
        },
        {
          title: "Desarrollo Seguro",
          content:
            "Nuestras practicas de desarrollo incluyen revision de codigo, escaneo de seguridad automatizado, monitoreo de vulnerabilidades de dependencias y entrenamiento regular de seguridad para todos los miembros del equipo.",
        },
        {
          title: "Proteccion de Datos",
          content:
            "Los datos de clientes estan aislados y nunca se comparten entre proyectos. Mantenemos backups regulares y tenemos procedimientos de recuperacion de desastres probados.",
        },
        {
          title: "Respuesta a Incidentes",
          content:
            "Tenemos procedimientos documentados de respuesta a incidentes. En caso de un incidente de seguridad, notificaremos a los clientes afectados dentro de 24 horas y proporcionaremos actualizaciones regulares.",
        },
        {
          title: "Cumplimiento",
          content:
            "Podemos trabajar dentro de frameworks de cumplimiento GDPR, HIPAA, SOC 2 y otros segun lo requiera tu proyecto. Las necesidades especificas de cumplimiento deben discutirse durante el alcance del proyecto.",
        },
        {
          title: "Divulgacion Responsable",
          content:
            "Si descubres una vulnerabilidad de seguridad, reportala a security@farutech.com. Apreciamos la divulgacion responsable y trabajaremos contigo para abordar cualquier problema.",
        },
      ],
    },
  },
} as const;

export type Translations = typeof translations.en;
