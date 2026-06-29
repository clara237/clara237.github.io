import type { Lang } from '../i18n'

type L = Record<Lang, string>
type LA = Record<Lang, string[]>

export const profile = {
  name: 'Silatchom Kengni Isabelle Clara',
  short: 'Clara Isabelle',
  title: {
    fr: 'Développeuse Full-Stack & Sécurité Informatique',
    en: 'Full-Stack Developer & Security Engineer',
    it: 'Sviluppatrice Full-Stack & Sicurezza Informatica',
  } as L,
  location: { fr: 'Yaoundé, Cameroun', en: 'Yaoundé, Cameroon', it: 'Yaoundé, Camerun' } as L,
  email: 'clarasilatchom@gmail.com',
  phone: '+237 699 567 072',
  github: 'github.com/clara237',
  githubUrl: 'https://github.com/clara237',
  linkedin: 'in/clara-isabelle-140904209',
  linkedinUrl: 'https://www.linkedin.com/in/clara-isabelle-140904209',
  pitch: {
    fr: "Développeuse full-stack passionnée, je conçois et déploie des applications web complètes — du backend Django / Node aux interfaces React soignées — en y intégrant de l'IA et une vraie culture de la sécurité. Plus de 10 projets menés du prototype à la production, du SaaS multi-tenant aux outils de cybersécurité.",
    en: 'A passionate full-stack developer, I design and ship complete web applications — from Django / Node backends to polished React interfaces — woven with AI and a genuine security mindset. 10+ projects taken from prototype to production, from multi-tenant SaaS to cybersecurity tooling.',
    it: "Sviluppatrice full-stack appassionata, progetto e rilascio applicazioni web complete — dai backend Django / Node a interfacce React curate — integrando l'IA e una vera cultura della sicurezza. Oltre 10 progetti portati dal prototipo alla produzione, dal SaaS multi-tenant agli strumenti di cybersicurezza.",
  } as L,
}

export const skillGroups: { title: L; skills: string[] }[] = [
  {
    title: { fr: 'Langages', en: 'Languages', it: 'Linguaggi' },
    skills: ['Python', 'TypeScript', 'JavaScript', 'PHP', 'Java', 'SQL', 'HTML / CSS', 'Bash'],
  },
  {
    title: { fr: 'Frontend', en: 'Frontend', it: 'Frontend' },
    skills: [
      'React 18/19', 'Next.js 14', 'TanStack Start', 'Vite', 'Tailwind CSS', 'Bootstrap',
      'shadcn/ui', 'Radix UI', 'Framer Motion', 'React Hook Form', 'Zod', 'Recharts', 'TipTap',
    ],
  },
  {
    title: { fr: 'Backend', en: 'Backend', it: 'Backend' },
    skills: ['Django 5', 'Django REST Framework', 'Symfony', 'Node.js', 'Express', 'Celery', 'Prisma', 'API REST'],
  },
  {
    title: { fr: 'Bases de données', en: 'Databases', it: 'Database' },
    skills: ['PostgreSQL', 'MySQL', 'SQLite', 'Supabase', 'Firebase', 'Redis'],
  },
  {
    title: { fr: 'IA / LLM', en: 'AI / LLM', it: 'IA / LLM' },
    skills: ['OpenAI', 'Groq (Llama 3.x)', 'Together AI', 'Hugging Face', 'Vercel AI SDK', 'RAG / Assistants', 'Prompt engineering'],
  },
  {
    title: { fr: 'Cybersécurité', en: 'Security', it: 'Cybersicurezza' },
    skills: ['Nmap', 'SQLMap', 'Nikto', 'OWASP ZAP', 'Scapy', 'Anomaly detection', 'Network analysis'],
  },
  {
    title: { fr: 'DevOps & Outils', en: 'DevOps & Tools', it: 'DevOps & Strumenti' },
    skills: ['Docker', 'Docker Compose', 'nginx', 'Git', 'Jenkins', 'Vercel', 'CI/CD', 'npm workspaces'],
  },
]

export const experience: {
  role: L
  company: string
  place: L
  period: L
  points: LA
}[] = [
  {
    role: {
      fr: 'Développeuse Full-Stack — EthicalPulse',
      en: 'Full-Stack Developer — EthicalPulse',
      it: 'Sviluppatrice Full-Stack — EthicalPulse',
    },
    company: 'Y-Note Cameroon',
    place: { fr: 'Yaoundé', en: 'Yaoundé', it: 'Yaoundé' },
    period: { fr: 'Depuis avril 2025', en: 'Since April 2025', it: 'Da aprile 2025' },
    points: {
      fr: [
        "Conception d'une plateforme automatisée de tests de vulnérabilités (stage de licence).",
        'Orchestration de Nikto, sqlmap, OWASP ZAP et nmap via une file asynchrone Celery + Redis.',
        'Classification IA des vulnérabilités et génération de rapports PDF ; stack dockerisée (7 services).',
      ],
      en: [
        'Designed an automated vulnerability-testing platform (bachelor internship).',
        'Orchestrated Nikto, sqlmap, OWASP ZAP and nmap through an async Celery + Redis queue.',
        'AI classification of vulnerabilities and PDF report generation; dockerized stack (7 services).',
      ],
      it: [
        "Progettazione di una piattaforma automatizzata per i test di vulnerabilità (tirocinio di laurea).",
        'Orchestrazione di Nikto, sqlmap, OWASP ZAP e nmap tramite una coda asincrona Celery + Redis.',
        'Classificazione IA delle vulnerabilità e generazione di report PDF; stack dockerizzato (7 servizi).',
      ],
    },
  },
  {
    role: {
      fr: 'Développeuse (stage)',
      en: 'Developer (intern)',
      it: 'Sviluppatrice (tirocinio)',
    },
    company: 'Paynote — Y-Note Cameroon',
    place: { fr: 'Yaoundé', en: 'Yaoundé', it: 'Yaoundé' },
    period: { fr: '2025', en: '2025', it: '2025' },
    points: {
      fr: [
        'Développement et maintenance de Paynote.africa, plateforme de paiement mobile sécurisé.',
        'Nouvelles fonctionnalités (HTML5, CSS3, Bootstrap, Symfony) et améliorations UI/UX.',
        "Tests unitaires & d'intégration, intégration d'API.",
      ],
      en: [
        'Built and maintained Paynote.africa, a secure mobile-payment platform.',
        'New features (HTML5, CSS3, Bootstrap, Symfony) and UI/UX improvements.',
        'Unit & integration testing, API integration.',
      ],
      it: [
        'Sviluppo e manutenzione di Paynote.africa, piattaforma di pagamento mobile sicuro.',
        'Nuove funzionalità (HTML5, CSS3, Bootstrap, Symfony) e miglioramenti UI/UX.',
        "Test unitari e di integrazione, integrazione di API.",
      ],
    },
  },
  {
    role: {
      fr: 'Stage — Développement logiciel',
      en: 'Internship — Software development',
      it: 'Tirocinio — Sviluppo software',
    },
    company: 'Général du Bâtiment',
    place: { fr: 'Douala', en: 'Douala', it: 'Douala' },
    period: { fr: '2023 – 2024', en: '2023 – 2024', it: '2023 – 2024' },
    points: {
      fr: ["Développement d'un système de gestion des stocks et des ventes à usage interne."],
      en: ['Built an internal stock and sales management system.'],
      it: ['Sviluppo di un sistema di gestione del magazzino e delle vendite a uso interno.'],
    },
  },
  {
    role: {
      fr: 'Stage — Développement logiciel',
      en: 'Internship — Software development',
      it: 'Tirocinio — Sviluppo software',
    },
    company: 'Vulgarys',
    place: { fr: 'Île-de-France, France', en: 'Île-de-France, France', it: 'Île-de-France, Francia' },
    period: { fr: '2022 – 2023', en: '2022 – 2023', it: '2022 – 2023' },
    points: {
      fr: ["Projet Minerys : application d'évaluation de la durabilité de l'industrie minière."],
      en: ['Minerys project: an app to assess the sustainability of the mining industry.'],
      it: ["Progetto Minerys: applicazione per valutare la sostenibilità dell'industria mineraria."],
    },
  },
]

export const projects: { name: string; tag?: L; desc: L; tech: string }[] = [
  {
    name: 'Prétoire',
    tag: { fr: 'En ligne', en: 'Live', it: 'Online' },
    desc: {
      fr: "SaaS white-label de gestion de cabinets d'avocats (droit OHADA) : dossiers, agenda, time-tracking, facturation et finance, avec assistant IA.",
      en: 'White-label SaaS for law-firm management (OHADA law): cases, calendar, time-tracking, billing and finance, with an AI assistant.',
      it: "SaaS white-label per la gestione di studi legali (diritto OHADA): pratiche, agenda, time-tracking, fatturazione e finanza, con assistente IA.",
    },
    tech: 'Next.js 14 · TypeScript · Supabase · PostgreSQL · Together AI',
  },
  {
    name: 'WhatsApp SaaS',
    desc: {
      fr: "Plateforme SaaS multi-tenant d'automation WhatsApp en microservices (monorepo 7 services), chatbot IA, app desktop et facturation.",
      en: 'Multi-tenant WhatsApp-automation SaaS in microservices (7-service monorepo), AI chatbot, desktop app and billing.',
      it: "Piattaforma SaaS multi-tenant per l'automazione di WhatsApp in microservizi (monorepo 7 servizi), chatbot IA, app desktop e fatturazione.",
    },
    tech: 'Node.js · Express · Next.js · Prisma · Socket.io · Tauri · Stripe',
  },
  {
    name: 'SpecForge AI / Cahier des Charges',
    tag: { fr: 'Mémoire', en: 'Thesis', it: 'Tesi' },
    desc: {
      fr: 'Assistant IA qui génère des cahiers des charges complets en Markdown avec diagrammes UML — projet de mémoire de fin de licence.',
      en: 'AI assistant that generates complete specifications in Markdown with UML diagrams — final-year thesis project.',
      it: 'Assistente IA che genera capitolati completi in Markdown con diagrammi UML — progetto di tesi di laurea.',
    },
    tech: 'TanStack Start · React 19 · Django · Groq · Mermaid',
  },
  {
    name: 'NetAnalyzer',
    desc: {
      fr: 'Analyseur de trafic réseau temps réel : détection de scans de ports, ARP spoofing et SYN flood, dashboard live.',
      en: 'Real-time network traffic analyzer: detects port scans, ARP spoofing and SYN floods, live dashboard.',
      it: 'Analizzatore di traffico di rete in tempo reale: rileva port scan, ARP spoofing e SYN flood, dashboard live.',
    },
    tech: 'Python · Scapy · Flask · Chart.js',
  },
  {
    name: 'GlobalTradeHub',
    desc: {
      fr: 'Marketplace e-commerce B2B internationale (import 20+ pays), commandes groupées, assistant IA et paiement Mobile Money.',
      en: 'International B2B e-commerce marketplace (import from 20+ countries), group orders, AI assistant and Mobile Money payment.',
      it: 'Marketplace e-commerce B2B internazionale (import da 20+ paesi), ordini di gruppo, assistente IA e pagamento Mobile Money.',
    },
    tech: 'React · Django 5 · PostgreSQL · Leaflet · Groq',
  },
  {
    name: 'SOS Planète',
    tag: { fr: 'En ligne', en: 'Live', it: 'Online' },
    desc: {
      fr: "Site complet pour une ONG environnementale : adhésions, dons, actualités et dashboard admin, avec tests automatisés.",
      en: 'Complete website for an environmental NGO: memberships, donations, news and admin dashboard, with automated tests.',
      it: "Sito completo per una ONG ambientale: iscrizioni, donazioni, notizie e dashboard admin, con test automatizzati.",
    },
    tech: 'React · Django 5 · MySQL · Framer Motion · Docker',
  },
]

export const education: { degree: L; school: L; period: string; note?: L }[] = [
  {
    degree: {
      fr: 'Licence — Génie Informatique',
      en: 'Bachelor — Computer Engineering',
      it: 'Laurea triennale — Ingegneria Informatica',
    },
    school: {
      fr: "Université Protestante d'Afrique Centrale, Yaoundé",
      en: 'Protestant University of Central Africa, Yaoundé',
      it: "Università Protestante dell'Africa Centrale, Yaoundé",
    },
    period: '2025',
    note: { fr: 'Obtenue · Moyenne 2.95', en: 'Awarded · GPA 2.95', it: 'Conseguita · Media 2.95' },
  },
  {
    degree: { fr: 'HND', en: 'HND', it: 'HND (Diploma superiore)' },
    school: { fr: 'Kalata Institut, Yaoundé', en: 'Kalata Institute, Yaoundé', it: 'Kalata Institut, Yaoundé' },
    period: '2024',
    note: { fr: 'Moyenne 3.09', en: 'GPA 3.09', it: 'Media 3.09' },
  },
  {
    degree: {
      fr: 'Licence — Chimie des Matériaux',
      en: 'Bachelor — Materials Chemistry',
      it: 'Laurea — Chimica dei Materiali',
    },
    school: {
      fr: 'Université de Yaoundé 1',
      en: 'University of Yaoundé 1',
      it: 'Università di Yaoundé 1',
    },
    period: '2019 – 2022',
    note: { fr: 'Obtenue', en: 'Awarded', it: 'Conseguita' },
  },
  {
    degree: { fr: 'GCE Advanced Level', en: 'GCE Advanced Level', it: 'GCE Advanced Level' },
    school: {
      fr: 'Angel Michael Bilingual College, Yaoundé',
      en: 'Angel Michael Bilingual College, Yaoundé',
      it: 'Angel Michael Bilingual College, Yaoundé',
    },
    period: '2018',
    note: { fr: '5 papers / 5', en: '5 papers / 5', it: '5 papers / 5' },
  },
]

export const languages: { name: L; level: L }[] = [
  {
    name: { fr: 'Français', en: 'French', it: 'Francese' },
    level: { fr: 'Natif', en: 'Native', it: 'Madrelingua' },
  },
  {
    name: { fr: 'Anglais', en: 'English', it: 'Inglese' },
    level: {
      fr: 'Natif · certifié EFSET C2 (73/100)',
      en: 'Native · EFSET C2 certified (73/100)',
      it: 'Madrelingua · certificata EFSET C2 (73/100)',
    },
  },
  {
    name: { fr: 'Italien', en: 'Italian', it: 'Italiano' },
    level: { fr: 'B2 — CERT.IT', en: 'B2 — CERT.IT', it: 'B2 — CERT.IT' },
  },
]

export const certifications: { name: string; issuer: L; level: L; year: string; link?: string }[] = [
  {
    name: 'EFSET English Certificate',
    issuer: { fr: 'EF Education First', en: 'EF Education First', it: 'EF Education First' },
    level: { fr: 'C2 Proficient (73/100)', en: 'C2 Proficient (73/100)', it: 'C2 Proficient (73/100)' },
    year: '2024',
    link: 'https://cert.efset.org/ASUvbk',
  },
  {
    name: 'CERT.IT — Italien',
    issuer: { fr: 'Certification de langue italienne', en: 'Italian language certification', it: 'Certificazione di lingua italiana' },
    level: { fr: 'Niveau B2', en: 'Level B2', it: 'Livello B2' },
    year: '2026',
  },
]

export const trainings: { name: L; issuer: string; link?: string }[] = [
  {
    name: { fr: 'Cybersécurité', en: 'Cybersecurity', it: 'Cybersicurezza' },
    issuer: 'Udemy',
  },
  {
    name: {
      fr: 'Sécurité réseau — protection des données, journalisation & détection des menaces',
      en: 'Network security — data protection, logging & threat detection',
      it: 'Sicurezza di rete — protezione dei dati, logging e rilevamento delle minacce',
    },
    issuer: 'Microsoft Learn',
    link: 'https://learn.microsoft.com/en-us/training/modules/security-virtual-networks/2-data-protection-logging-threat-detection-network-security',
  },
  {
    name: {
      fr: 'Chiffrement des données au repos (Azure)',
      en: 'Azure data encryption at rest',
      it: 'Crittografia dei dati a riposo (Azure)',
    },
    issuer: 'Microsoft Learn',
    link: 'https://learn.microsoft.com/en-us/azure/security/fundamentals/encryption-atrest',
  },
]

export const interests: LA = {
  fr: ['Programmation', 'Cybersécurité', 'Intelligence Artificielle', 'Tourisme', 'Open Source', 'Technologies émergentes'],
  en: ['Programming', 'Cybersecurity', 'Artificial Intelligence', 'Travel', 'Open Source', 'Emerging tech'],
  it: ['Programmazione', 'Cybersicurezza', 'Intelligenza Artificiale', 'Viaggi', 'Open Source', 'Tecnologie emergenti'],
}
