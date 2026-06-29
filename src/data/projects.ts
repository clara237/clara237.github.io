export type Category =
  | 'all'
  | 'fullstack'
  | 'ai'
  | 'security'
  | 'saas'
  | 'ecommerce'
  | 'cms'

export interface Screenshot {
  src: string
  caption: { fr: string; en: string; it: string }
}

export interface Project {
  slug: string
  name: string
  year: string
  category: Exclude<Category, 'all'>[]
  status: 'live' | 'wip' | 'done'
  tagline: { fr: string; en: string; it: string }
  description: { fr: string; en: string; it: string }
  /** À quoi sert concrètement l'application / en quoi elle aide */
  helps: { fr: string; en: string; it: string }
  highlights: { fr: string[]; en: string[]; it: string[] }
  /** Sous-ensemble court affiché sur la carte */
  stack: string[]
  /** Toutes les technologies, sans exception (modale) */
  tech: string[]
  /** Tous les outils / infra / services (modale) */
  tools: string[]
  /** Nom du dépôt GitHub (pour construire le lien Code source) */
  repo: string
  /** URL de démo en ligne, si déployée */
  demoUrl?: string
  /** Captures d'écran page par page */
  screenshots: Screenshot[]
  accent: string // tailwind gradient stops
}

export const GITHUB_USER = 'clara237'
export const sourceUrl = (repo: string) => `https://github.com/${GITHUB_USER}/${repo}`

export const projects: Project[] = [
  {
    slug: 'pretoire',
    name: 'Prétoire',
    year: '2026',
    category: ['saas', 'fullstack', 'ai'],
    status: 'live',
    accent: 'from-indigo-500 to-violet-600',
    repo: 'pretoire',
    tagline: {
      fr: "Logiciel white-label de gestion de cabinet d'avocats (droit OHADA)",
      en: 'White-label law-firm management software (OHADA law)',
      it: 'Software white-label per la gestione di studi legali (diritto OHADA)',
    },
    description: {
      fr: "Application professionnelle complète pour cabinets d'avocats, reconfigurable sans toucher au code (branding dynamique). Gestion de dossiers, clients, agenda, facturation et finances, avec assistance IA à la rédaction.",
      en: "Complete professional app for law firms, reconfigurable without touching code (dynamic branding). Case, client, calendar, billing and finance management, with AI-assisted drafting.",
      it: "Applicazione professionale completa per studi legali, riconfigurabile senza toccare il codice (branding dinamico). Gestione di pratiche, clienti, agenda, fatturazione e finanze, con assistenza IA alla redazione.",
    },
    helps: {
      fr: "Permet à un cabinet d'avocats (pensé pour le Cameroun et le droit OHADA) de tout piloter depuis une seule plateforme : suivi des dossiers et échéances d'audience, facturation du temps passé, gestion de l'équipe et des clients. Le mode white-label permet de revendre le même logiciel à plusieurs cabinets avec leur propre identité, sans réécrire de code. Gain de temps administratif et zéro échéance ratée.",
      en: "Lets a law firm (designed for Cameroon and OHADA law) run everything from one platform: case and hearing-deadline tracking, time billing, team and client management. White-label mode means the same software can be resold to multiple firms under their own brand without rewriting code. Saves admin time and prevents missed deadlines.",
      it: "Consente a uno studio legale (pensato per il Camerun e il diritto OHADA) di gestire tutto da un'unica piattaforma: monitoraggio delle pratiche e delle scadenze d'udienza, fatturazione del tempo dedicato, gestione del team e dei clienti. La modalità white-label permette di rivendere lo stesso software a più studi con la loro identità, senza riscrivere codice. Risparmio di tempo amministrativo e nessuna scadenza mancata.",
    },
    highlights: {
      fr: [
        'Gestion de 7 types de dossiers + permissions granulaires par rôle',
        'Time-tracking, facturation 3 modes & reporting financier',
        'Alertes automatiques d’audience J-7/J-3/J-1, génération PDF',
        'Assistant IA (Llama 3.3 70B) et white-label complet',
      ],
      en: [
        '7 case types + granular role-based permissions',
        'Time-tracking, 3-mode billing & financial reporting',
        'Automatic hearing alerts D-7/D-3/D-1, PDF generation',
        'AI assistant (Llama 3.3 70B) and full white-label',
      ],
      it: [
        'Gestione di 7 tipi di pratiche + permessi granulari per ruolo',
        'Time-tracking, fatturazione a 3 modalità e reporting finanziario',
        'Avvisi automatici d’udienza G-7/G-3/G-1, generazione PDF',
        'Assistente IA (Llama 3.3 70B) e white-label completo',
      ],
    },
    stack: ['Next.js 14', 'TypeScript', 'Supabase', 'PostgreSQL', 'Tailwind', 'Together AI'],
    tech: [
      'Next.js 14 (App Router)', 'React 18', 'TypeScript 5', 'Tailwind CSS 3', 'PostCSS',
      'Recharts', 'Lucide React', 'Sonner', 'jsPDF', 'jsPDF-AutoTable',
      'date-fns', 'clsx', 'tailwind-merge', 'Server Actions', 'Server Components',
    ],
    tools: [
      'Node.js', 'npm', 'Supabase (Auth + Storage + PostgreSQL)', 'Row Level Security',
      'Together AI (Llama 3.3 70B)', 'Nodemailer', 'Mailpit', 'ESLint', 'Prettier', 'Vercel',
    ],
    screenshots: [
      { src: '/screenshots/pretoire/tableau-de-bord.png', caption: { fr: 'Tableau de bord du cabinet', en: 'Firm dashboard', it: 'Dashboard dello studio' } },
      { src: '/screenshots/pretoire/dossiers.png', caption: { fr: 'Liste des dossiers', en: 'Cases list', it: 'Elenco delle pratiche' } },
      { src: '/screenshots/pretoire/fiche-dossier.png', caption: { fr: 'Fiche dossier — chronologie & parties', en: 'Case file — timeline & parties', it: 'Scheda pratica — cronologia e parti' } },
      { src: '/screenshots/pretoire/clients.png', caption: { fr: 'Clients du cabinet', en: 'Firm clients', it: 'Clienti dello studio' } },
      { src: '/screenshots/pretoire/fiche-client.png', caption: { fr: 'Fiche client', en: 'Client file', it: 'Scheda cliente' } },
      { src: '/screenshots/pretoire/agenda.png', caption: { fr: 'Agenda — audiences & échéances', en: 'Calendar — hearings & deadlines', it: 'Agenda — udienze e scadenze' } },
      { src: '/screenshots/pretoire/devis.png', caption: { fr: 'Devis (proforma)', en: 'Quotes (proforma)', it: 'Preventivi (proforma)' } },
      { src: '/screenshots/pretoire/fiche-devis.png', caption: { fr: 'Détail d’un devis', en: 'Quote detail', it: 'Dettaglio di un preventivo' } },
      { src: '/screenshots/pretoire/facturation.png', caption: { fr: 'Facturation', en: 'Billing', it: 'Fatturazione' } },
      { src: '/screenshots/pretoire/fiche-facture.png', caption: { fr: 'Facture — détail & paiements', en: 'Invoice — detail & payments', it: 'Fattura — dettaglio e pagamenti' } },
      { src: '/screenshots/pretoire/finance.png', caption: { fr: 'Finance & reporting', en: 'Finance & reporting', it: 'Finanza e reporting' } },
      { src: '/screenshots/pretoire/time-tracking.png', caption: { fr: 'Suivi du temps (timesheet)', en: 'Time tracking (timesheet)', it: 'Monitoraggio del tempo (timesheet)' } },
      { src: '/screenshots/pretoire/documents.png', caption: { fr: 'Documents du cabinet', en: 'Firm documents', it: 'Documenti dello studio' } },
      { src: '/screenshots/pretoire/courriers.png', caption: { fr: 'Correspondance entrante / sortante', en: 'Incoming / outgoing mail', it: 'Corrispondenza in entrata / in uscita' } },
      { src: '/screenshots/pretoire/modeles.png', caption: { fr: 'Modèles de documents', en: 'Document templates', it: 'Modelli di documenti' } },
      { src: '/screenshots/pretoire/equipe.png', caption: { fr: 'Équipe & charge de travail', en: 'Team & workload', it: 'Team e carico di lavoro' } },
      { src: '/screenshots/pretoire/stagiaires.png', caption: { fr: 'Suivi des stagiaires', en: 'Interns tracking', it: 'Monitoraggio dei tirocinanti' } },
      { src: '/screenshots/pretoire/notifications.png', caption: { fr: 'Notifications & alertes', en: 'Notifications & alerts', it: 'Notifiche e avvisi' } },
      { src: '/screenshots/pretoire/parametres-cabinet.png', caption: { fr: 'Paramètres white-label du cabinet', en: 'White-label firm settings', it: 'Impostazioni white-label dello studio' } },
      { src: '/screenshots/pretoire/parametres-tarifs.png', caption: { fr: 'Tarifs horaires par avocat', en: 'Hourly rates per lawyer', it: 'Tariffe orarie per avvocato' } },
      { src: '/screenshots/pretoire/parametres-utilisateurs.png', caption: { fr: 'Utilisateurs & rôles', en: 'Users & roles', it: 'Utenti e ruoli' } },
      { src: '/screenshots/pretoire/connexion.png', caption: { fr: 'Connexion', en: 'Login', it: 'Accesso' } },
    ],
  },
  {
    slug: 'ethicalpulse',
    name: 'EthicalPulse',
    year: '2026',
    category: ['security', 'fullstack', 'ai'],
    status: 'done',
    accent: 'from-emerald-500 to-teal-600',
    repo: 'ethicalpulse',
    tagline: {
      fr: 'Plateforme automatisée de scans de vulnérabilités',
      en: 'Automated vulnerability scanning platform',
      it: 'Piattaforma automatizzata di scansione delle vulnerabilità',
    },
    description: {
      fr: "Plateforme backend qui centralise et automatise les analyses de sécurité en orchestrant des outils de scanning professionnels via une file d'attente asynchrone.",
      en: 'Backend platform that centralizes and automates security analysis by orchestrating professional scanning tools through an async task queue.',
      it: "Piattaforma backend che centralizza e automatizza le analisi di sicurezza orchestrando strumenti di scanning professionali tramite una coda asincrona.",
    },
    helps: {
      fr: "Aide les équipes de sécurité et pentesters à industrialiser leurs audits : au lieu de lancer Nikto, sqlmap, ZAP et nmap manuellement projet par projet, tout est orchestré, mis en file d'attente et consolidé dans des rapports PDF. L'IA aide à classer et prioriser les vulnérabilités. Résultat : des audits plus rapides, reproductibles et traçables.",
      en: "Helps security teams and pentesters industrialize their audits: instead of running Nikto, sqlmap, ZAP and nmap by hand project by project, everything is orchestrated, queued and consolidated into PDF reports. AI helps classify and prioritize vulnerabilities. The result: faster, reproducible and traceable audits.",
      it: "Aiuta i team di sicurezza e i pentester a industrializzare i loro audit: invece di lanciare Nikto, sqlmap, ZAP e nmap manualmente progetto per progetto, tutto viene orchestrato, messo in coda e consolidato in report PDF. L'IA aiuta a classificare e dare priorità alle vulnerabilità. Il risultato: audit più rapidi, riproducibili e tracciabili.",
    },
    highlights: {
      fr: [
        'Orchestration de Nikto, sqlmap, OWASP ZAP et nmap',
        'File asynchrone Celery + Redis, monitoring Flower',
        'Génération de rapports de vulnérabilités PDF',
        'Stack dockerisée (7 services) avec classification IA',
      ],
      en: [
        'Orchestration of Nikto, sqlmap, OWASP ZAP and nmap',
        'Async queue Celery + Redis, Flower monitoring',
        'PDF vulnerability report generation',
        'Dockerized stack (7 services) with AI classification',
      ],
      it: [
        'Orchestrazione di Nikto, sqlmap, OWASP ZAP e nmap',
        'Coda asincrona Celery + Redis, monitoraggio Flower',
        'Generazione di report PDF sulle vulnerabilità',
        'Stack dockerizzato (7 servizi) con classificazione IA',
      ],
    },
    stack: ['Django', 'Python', 'Celery', 'Redis', 'Docker', 'OWASP ZAP', 'OpenAI'],
    tech: [
      'Python 3.10', 'Django 4.2', 'Django Channels', 'Celery 5.3', 'django-widget-tweaks',
      'python-nmap', 'python-owasp-zap', 'zaproxy', 'ReportLab', 'WeasyPrint', 'QRCode',
      'Requests', 'sqlparse', 'PyOTP', 'OpenAI SDK', 'Hugging Face Hub', 'WhiteNoise',
    ],
    tools: [
      'Docker', 'Docker Compose', 'MySQL 8.0', 'phpMyAdmin', 'Redis 7', 'OWASP ZAP',
      'Flower (monitoring Celery)', 'nmap', 'Nikto', 'sqlmap', 'OpenJDK 17', 'Gunicorn',
      'Celery worker', 'Black', 'Flake8', 'pre-commit', 'Prettier',
    ],
    screenshots: [
      { src: '/screenshots/ethicalpulse/dashboard.png', caption: { fr: 'Tableau de bord sécurité', en: 'Security dashboard', it: 'Dashboard di sicurezza' } },
      { src: '/screenshots/ethicalpulse/tableau-de-bord.png', caption: { fr: 'Analytique — scans & découvertes', en: 'Analytics — scans & findings', it: 'Analisi — scansioni e risultati' } },
      { src: '/screenshots/ethicalpulse/scans.png', caption: { fr: 'Scans de sécurité — suivi & planification', en: 'Security scans — tracking & scheduling', it: 'Scansioni di sicurezza — monitoraggio e pianificazione' } },
      { src: '/screenshots/ethicalpulse/vulnerabilites.png', caption: { fr: 'Analyse globale des vulnérabilités', en: 'Global vulnerability analysis', it: 'Analisi globale delle vulnerabilità' } },
      { src: '/screenshots/ethicalpulse/projets.png', caption: { fr: 'Projets analysés', en: 'Analyzed projects', it: 'Progetti analizzati' } },
      { src: '/screenshots/ethicalpulse/outils.png', caption: { fr: 'Outils de sécurité orchestrés', en: 'Orchestrated security tools', it: 'Strumenti di sicurezza orchestrati' } },
      { src: '/screenshots/ethicalpulse/remediation.png', caption: { fr: 'Remédiation des vulnérabilités', en: 'Vulnerability remediation', it: 'Rimedio delle vulnerabilità' } },
      { src: '/screenshots/ethicalpulse/historique.png', caption: { fr: 'Historique des audits', en: 'Audit history', it: 'Cronologia degli audit' } },
      { src: '/screenshots/ethicalpulse/utilisateurs.png', caption: { fr: 'Gestion des utilisateurs & rôles', en: 'Users & roles management', it: 'Gestione di utenti e ruoli' } },
      { src: '/screenshots/ethicalpulse/parametres.png', caption: { fr: 'Paramètres de la plateforme', en: 'Platform settings', it: 'Impostazioni della piattaforma' } },
      { src: '/screenshots/ethicalpulse/formation.png', caption: { fr: 'Centre de formation cybersécurité', en: 'Cybersecurity training center', it: 'Centro di formazione sulla cybersicurezza' } },
      { src: '/screenshots/ethicalpulse/connexion.png', caption: { fr: 'Connexion', en: 'Login', it: 'Accesso' } },
    ],
  },
  {
    slug: 'netanalyzer',
    name: 'NetAnalyzer',
    year: '2026',
    category: ['security'],
    status: 'done',
    accent: 'from-cyan-500 to-blue-600',
    repo: 'netanalyzer',
    tagline: {
      fr: 'Analyseur de trafic réseau temps réel avec détection d’anomalies',
      en: 'Real-time network traffic analyzer with anomaly detection',
      it: 'Analizzatore di traffico di rete in tempo reale con rilevamento di anomalie',
    },
    description: {
      fr: "Outil CLI Python qui capture et analyse le trafic réseau en direct (ou depuis un pcap), détecte des anomalies et expose un dashboard web temps réel.",
      en: 'Python CLI tool that captures and analyzes live network traffic (or from a pcap), detects anomalies and exposes a real-time web dashboard.',
      it: "Strumento CLI Python che cattura e analizza il traffico di rete dal vivo (o da un pcap), rileva anomalie ed espone una dashboard web in tempo reale.",
    },
    helps: {
      fr: "Aide les administrateurs réseau et analystes sécurité à voir ce qui circule réellement sur un réseau et à repérer les comportements suspects (scan de ports, ARP spoofing, SYN flood) en temps réel. Utile en laboratoire, en formation cybersécurité ou pour un diagnostic rapide d'incident, sans déployer une lourde solution commerciale.",
      en: "Helps network admins and security analysts see what is actually flowing on a network and spot suspicious behavior (port scans, ARP spoofing, SYN floods) in real time. Useful in a lab, in cybersecurity training, or for quick incident triage, without deploying a heavy commercial solution.",
      it: "Aiuta gli amministratori di rete e gli analisti di sicurezza a vedere cosa circola realmente su una rete e a individuare comportamenti sospetti (scansione di porte, ARP spoofing, SYN flood) in tempo reale. Utile in laboratorio, nella formazione sulla cybersicurezza o per una diagnosi rapida di un incidente, senza dover implementare una pesante soluzione commerciale.",
    },
    highlights: {
      fr: [
        'Capture live multi-interfaces avec Scapy + filtres BPF',
        'Détection scan de ports, ARP spoofing, SYN flood',
        'Moteur de stats thread-safe (multi-threading)',
        'Dashboard Flask + Chart.js (WebSocket 2s)',
      ],
      en: [
        'Multi-interface live capture with Scapy + BPF filters',
        'Detection of port scans, ARP spoofing, SYN flood',
        'Thread-safe stats engine (multi-threading)',
        'Flask + Chart.js dashboard (WebSocket 2s)',
      ],
      it: [
        'Cattura live multi-interfaccia con Scapy + filtri BPF',
        'Rilevamento di scansione di porte, ARP spoofing, SYN flood',
        'Motore di statistiche thread-safe (multi-threading)',
        'Dashboard Flask + Chart.js (WebSocket 2s)',
      ],
    },
    stack: ['Python', 'Scapy', 'Flask', 'Chart.js'],
    tech: [
      'Python 3.12', 'Flask 3.1', 'Scapy 2.7', 'Werkzeug', 'Jinja2', 'Click',
      'Chart.js', 'WebSocket polling', 'argparse', 'multi-threading',
    ],
    tools: ['Python venv', 'Flask dev server', 'pcap (PcapReader)', 'BPF filters (tcpdump syntax)'],
    screenshots: [
      { src: '/screenshots/netanalyzer/dashboard.png', caption: { fr: 'Dashboard temps réel — protocoles & top talkers', en: 'Real-time dashboard — protocols & top talkers', it: 'Dashboard in tempo reale — protocolli e top talker' } },
      { src: '/screenshots/netanalyzer/dashboard-complet.png', caption: { fr: 'Vue complète — flux de paquets & alertes de sécurité', en: 'Full view — packet feed & security alerts', it: 'Vista completa — flusso di pacchetti e avvisi di sicurezza' } },
    ],
  },
  {
    slug: 'whatsapp-saas',
    name: 'WhatsApp SaaS',
    year: '2026',
    category: ['saas', 'fullstack', 'ai'],
    status: 'wip',
    accent: 'from-green-500 to-emerald-600',
    repo: 'whatsapp-saas',
    tagline: {
      fr: 'Plateforme SaaS multi-tenant d’automation WhatsApp',
      en: 'Multi-tenant WhatsApp automation SaaS platform',
      it: 'Piattaforma SaaS multi-tenant di automazione WhatsApp',
    },
    description: {
      fr: "Plateforme SaaS modulaire (monorepo de 7 services) pour automatiser et gérer des conversations WhatsApp, avec moteur IA, panel admin, app desktop et facturation.",
      en: 'Modular SaaS platform (7-service monorepo) to automate and manage WhatsApp conversations, with AI engine, admin panel, desktop app and billing.',
      it: "Piattaforma SaaS modulare (monorepo di 7 servizi) per automatizzare e gestire conversazioni WhatsApp, con motore IA, pannello admin, app desktop e fatturazione.",
    },
    helps: {
      fr: "Aide les entreprises et commerçants à automatiser leur relation client sur WhatsApp : réponses automatiques par IA, gestion de plusieurs comptes, suivi des conversations en temps réel et facturation des abonnements. Plusieurs clients (tenants) cohabitent sur la même plateforme. Idéal pour vendre un service de chatbot/CRM WhatsApp clé en main.",
      en: "Helps businesses and merchants automate their customer relationship on WhatsApp: AI auto-replies, multi-account management, real-time conversation tracking and subscription billing. Multiple clients (tenants) coexist on the same platform. Ideal for selling a turnkey WhatsApp chatbot/CRM service.",
      it: "Aiuta le aziende e i commercianti ad automatizzare la relazione con i clienti su WhatsApp: risposte automatiche tramite IA, gestione di più account, monitoraggio delle conversazioni in tempo reale e fatturazione degli abbonamenti. Più clienti (tenant) coesistono sulla stessa piattaforma. Ideale per vendere un servizio di chatbot/CRM WhatsApp chiavi in mano.",
    },
    highlights: {
      fr: [
        'Architecture microservices, monorepo npm workspaces',
        'Chatbot IA + client WhatsApp Baileys, app desktop Tauri',
        'Temps réel Socket.io, files Bull/BullMQ',
        'Paiements (Stripe, Orange/MTN Money), stockage S3/Cloudinary',
      ],
      en: [
        'Microservices architecture, npm workspaces monorepo',
        'AI chatbot + Baileys WhatsApp client, Tauri desktop app',
        'Real-time Socket.io, Bull/BullMQ queues',
        'Payments (Stripe, Orange/MTN Money), S3/Cloudinary storage',
      ],
      it: [
        'Architettura a microservizi, monorepo npm workspaces',
        'Chatbot IA + client WhatsApp Baileys, app desktop Tauri',
        'Tempo reale Socket.io, code Bull/BullMQ',
        'Pagamenti (Stripe, Orange/MTN Money), storage S3/Cloudinary',
      ],
    },
    stack: ['Node.js', 'Express', 'Next.js', 'Prisma', 'PostgreSQL', 'Socket.io', 'Tauri'],
    tech: [
      'Node.js 18', 'TypeScript 5.6', 'Express 4', 'Prisma 5 (ORM)', 'Next.js 14', 'React 18',
      'Tailwind CSS 3', 'Radix UI', 'TanStack React Query', 'React Hook Form', 'Zod', 'Zustand',
      'Recharts', 'Socket.io', 'Baileys (WhatsApp)', 'OpenAI', 'Bull', 'BullMQ', 'ioredis',
      'JSON Web Token', 'bcryptjs', 'Helmet', 'Winston', 'Pino', 'Multer', 'PDF-lib', 'PDFKit',
      'QRCode', 'Axios', 'Sonner', 'next-themes', 'Tauri (desktop)',
    ],
    tools: [
      'Docker', 'Docker Compose', 'PostgreSQL 16', 'Redis 7', 'npm workspaces', 'Prisma CLI',
      'TSX', 'Stripe', 'AWS S3', 'Cloudinary', 'Together AI (Llama 3.3 70B)',
      'WhatsApp Business API', 'Orange Money', 'MTN Mobile Money', 'Gmail SMTP',
      'Express Rate Limit', 'Morgan', 'ESLint', 'Concurrently',
    ],
    screenshots: [
      { src: '/screenshots/whatsapp-saas/dashboard.png', caption: { fr: 'Tableau de bord marchand', en: 'Merchant dashboard', it: 'Dashboard del commerciante' } },
      { src: '/screenshots/whatsapp-saas/conversations.png', caption: { fr: 'Messagerie WhatsApp temps réel', en: 'Real-time WhatsApp inbox', it: 'Messaggistica WhatsApp in tempo reale' } },
      { src: '/screenshots/whatsapp-saas/connecterwhatsapp.png', caption: { fr: 'Connexion d’un compte WhatsApp', en: 'Connect a WhatsApp account', it: 'Collegamento di un account WhatsApp' } },
      { src: '/screenshots/whatsapp-saas/config-ia.png', caption: { fr: 'Configuration de l’assistant IA', en: 'AI assistant configuration', it: 'Configurazione dell’assistente IA' } },
      { src: '/screenshots/whatsapp-saas/produits.png', caption: { fr: 'Catalogue produits', en: 'Product catalog', it: 'Catalogo prodotti' } },
      { src: '/screenshots/whatsapp-saas/categories.png', caption: { fr: 'Catégories de produits', en: 'Product categories', it: 'Categorie di prodotti' } },
      { src: '/screenshots/whatsapp-saas/commande.png', caption: { fr: 'Détail d’une commande', en: 'Order detail', it: 'Dettaglio di un ordine' } },
      { src: '/screenshots/whatsapp-saas/clients.png', caption: { fr: 'Clients', en: 'Customers', it: 'Clienti' } },
      { src: '/screenshots/whatsapp-saas/contacts.png', caption: { fr: 'Contacts WhatsApp', en: 'WhatsApp contacts', it: 'Contatti WhatsApp' } },
      { src: '/screenshots/whatsapp-saas/analytics.png', caption: { fr: 'Analytiques', en: 'Analytics', it: 'Analisi' } },
      { src: '/screenshots/whatsapp-saas/campagnes.png', caption: { fr: 'Campagnes marketing', en: 'Marketing campaigns', it: 'Campagne di marketing' } },
      { src: '/screenshots/whatsapp-saas/diffusion.png', caption: { fr: 'Diffusions de masse', en: 'Broadcasts', it: 'Invii di massa' } },
      { src: '/screenshots/whatsapp-saas/coupons.png', caption: { fr: 'Coupons de réduction', en: 'Discount coupons', it: 'Coupon sconto' } },
      { src: '/screenshots/whatsapp-saas/parrainage.png', caption: { fr: 'Programme de parrainage', en: 'Referral program', it: 'Programma di referral' } },
      { src: '/screenshots/whatsapp-saas/livraisons.png', caption: { fr: 'Suivi des livraisons', en: 'Delivery tracking', it: 'Monitoraggio delle consegne' } },
      { src: '/screenshots/whatsapp-saas/fournisseurs.png', caption: { fr: 'Fournisseurs', en: 'Suppliers', it: 'Fornitori' } },
      { src: '/screenshots/whatsapp-saas/reappro.png', caption: { fr: 'Réapprovisionnement des stocks', en: 'Stock restocking', it: 'Riassortimento delle scorte' } },
      { src: '/screenshots/whatsapp-saas/factures.png', caption: { fr: 'Factures', en: 'Invoices', it: 'Fatture' } },
      { src: '/screenshots/whatsapp-saas/forfait.png', caption: { fr: 'Abonnement & forfait', en: 'Subscription & plan', it: 'Abbonamento e piano' } },
      { src: '/screenshots/whatsapp-saas/configboutique.png', caption: { fr: 'Configuration de la boutique', en: 'Storefront settings', it: 'Configurazione del negozio' } },
      { src: '/screenshots/whatsapp-saas/designerboutique.png', caption: { fr: 'Éditeur visuel de la boutique', en: 'Visual storefront designer', it: 'Editor visuale del negozio' } },
      { src: '/screenshots/whatsapp-saas/boutique.png', caption: { fr: 'Boutique en ligne publique', en: 'Public online storefront', it: 'Negozio online pubblico' } },
      { src: '/screenshots/whatsapp-saas/profil.png', caption: { fr: 'Profil & compte', en: 'Profile & account', it: 'Profilo e account' } },
      { src: '/screenshots/whatsapp-saas/connexion.png', caption: { fr: 'Connexion', en: 'Login', it: 'Accesso' } },
      { src: '/screenshots/whatsapp-saas/inscription.png', caption: { fr: 'Inscription', en: 'Sign up', it: 'Registrazione' } },
      { src: '/screenshots/whatsapp-saas/mot-de-passe-oublie.png', caption: { fr: 'Mot de passe oublié', en: 'Forgot password', it: 'Password dimenticata' } },
    ],
  },
  {
    slug: 'specforge-ai',
    name: 'SpecForge AI',
    year: '2026',
    category: ['ai', 'fullstack'],
    status: 'wip',
    accent: 'from-fuchsia-500 to-purple-600',
    repo: 'vision-specs-ai',
    tagline: {
      fr: 'Assistant IA conversationnel de génération de cahiers des charges',
      en: 'Conversational AI assistant for generating specifications',
      it: 'Assistente IA conversazionale per la generazione di capitolati',
    },
    description: {
      fr: "Assistant qui dialogue avec l'utilisateur puis génère des cahiers des charges fonctionnels et techniques complets en Markdown, avec diagrammes UML Mermaid. Bilingue.",
      en: 'Assistant that converses with the user then generates complete functional and technical specs in Markdown, with Mermaid UML diagrams. Bilingual.',
      it: "Assistente che dialoga con l'utente e poi genera capitolati funzionali e tecnici completi in Markdown, con diagrammi UML Mermaid. Bilingue.",
    },
    helps: {
      fr: "Aide les freelances, chefs de projet et entrepreneurs à transformer une idée floue en cahier des charges professionnel en quelques minutes. L'IA pose les bonnes questions, structure le besoin, puis rédige les spécifications fonctionnelles et techniques avec des diagrammes UML. Fait gagner des heures de rédaction et professionnalise les propositions client.",
      en: "Helps freelancers, project managers and entrepreneurs turn a fuzzy idea into a professional specification in minutes. The AI asks the right questions, structures the need, then writes functional and technical specs with UML diagrams. Saves hours of writing and makes client proposals look professional.",
      it: "Aiuta freelance, project manager e imprenditori a trasformare un'idea vaga in un capitolato professionale in pochi minuti. L'IA pone le domande giuste, struttura l'esigenza e poi redige le specifiche funzionali e tecniche con diagrammi UML. Fa risparmiare ore di redazione e rende professionali le proposte ai clienti.",
    },
    highlights: {
      fr: [
        'Chat interactif guidé par IA (LLM-agnostique)',
        'Génération Markdown structurée + diagrammes Mermaid',
        'Stack moderne TanStack Start (React 19)',
        'Persistance Supabase, support FR/EN',
      ],
      en: [
        'AI-guided interactive chat (LLM-agnostic)',
        'Structured Markdown generation + Mermaid diagrams',
        'Modern TanStack Start stack (React 19)',
        'Supabase persistence, FR/EN support',
      ],
      it: [
        'Chat interattiva guidata dall’IA (LLM-agnostica)',
        'Generazione Markdown strutturata + diagrammi Mermaid',
        'Stack moderno TanStack Start (React 19)',
        'Persistenza Supabase, supporto FR/EN',
      ],
    },
    stack: ['TanStack Start', 'React 19', 'TypeScript', 'Supabase', 'Vite', 'AI SDK'],
    tech: [
      'TanStack Start 1.16', 'React 19', 'TypeScript 5.8', 'TanStack Router', 'TanStack React Query',
      'Vite 7', 'Tailwind CSS 4', 'Radix UI (suite complète)', 'React Hook Form', 'Zod',
      'react-markdown', 'remark-gfm', 'Mermaid 11', 'Recharts', 'Embla Carousel', 'Vaul',
      'Lucide React', 'Sonner', 'Vercel AI SDK', '@ai-sdk/openai-compatible',
    ],
    tools: [
      'Node.js', 'Bun', 'Vite', 'Nitro (server runtime)', 'Supabase', 'ESLint 9',
      'typescript-eslint', 'Prettier', 'PostCSS', 'Autoprefixer', 'LLM (OpenAI-compatible API)',
    ],
    screenshots: [
      { src: '/screenshots/specforge-ai/accueil.png', caption: { fr: 'Page d’accueil', en: 'Landing page', it: 'Pagina iniziale' } },
      { src: '/screenshots/specforge-ai/accueil-complet.png', caption: { fr: 'Présentation complète du produit', en: 'Full product overview', it: 'Presentazione completa del prodotto' } },
      { src: '/screenshots/specforge-ai/auth.png', caption: { fr: 'Connexion / inscription', en: 'Sign in / sign up', it: 'Accesso / registrazione' } },
    ],
  },
  {
    slug: 'cahier-charges',
    name: 'Cahier des Charges Platform',
    year: '2026',
    category: ['ai', 'fullstack', 'saas'],
    status: 'done',
    accent: 'from-violet-500 to-indigo-600',
    repo: 'cahier-charges-platform',
    tagline: {
      fr: "Générateur IA de cahiers des charges professionnels (mémoire de fin d'études)",
      en: 'AI generator of professional specifications (final-year thesis project)',
      it: 'Generatore IA di capitolati professionali (tesi di fine studi)',
    },
    description: {
      fr: "L'utilisateur répond à un questionnaire de cadrage et l'IA rédige toutes les sections d'un cahier des charges structuré, éditable et exportable en PDF/DOCX/Markdown.",
      en: 'The user answers a scoping questionnaire and the AI writes every section of a structured specification, editable and exportable to PDF/DOCX/Markdown.',
      it: "L'utente risponde a un questionario di inquadramento e l'IA redige tutte le sezioni di un capitolato strutturato, modificabile ed esportabile in PDF/DOCX/Markdown.",
    },
    helps: {
      fr: "Aide toute personne devant rédiger un cahier des charges (étudiant, PME, agence) à passer d'un simple cadrage à un document complet et exportable. Le score de complétude et la priorisation MoSCoW guident l'utilisateur, et un mode hors-ligne garantit la génération même si l'IA est indisponible. Projet réalisé comme mémoire de fin d'études.",
      en: "Helps anyone who must write a specification (student, SME, agency) go from a simple scoping to a complete, exportable document. The completeness score and MoSCoW prioritization guide the user, and an offline mode guarantees generation even if the AI is unavailable. Built as a final-year thesis project.",
      it: "Aiuta chiunque debba redigere un capitolato (studente, PMI, agenzia) a passare da un semplice inquadramento a un documento completo ed esportabile. Il punteggio di completezza e la prioritizzazione MoSCoW guidano l'utente, e una modalità offline garantisce la generazione anche se l'IA non è disponibile. Progetto realizzato come tesi di fine studi.",
    },
    highlights: {
      fr: [
        'Cadrage guidé avec score de complétude & MoSCoW',
        'Génération IA multi-sections (Groq Llama 3.3 70B) + repli offline',
        'Historique de versions, templates sectoriels',
        'Export PDF (ReportLab) / DOCX / Markdown',
      ],
      en: [
        'Guided scoping with completeness score & MoSCoW',
        'Multi-section AI generation (Groq Llama 3.3 70B) + offline fallback',
        'Version history, sector templates',
        'Export to PDF (ReportLab) / DOCX / Markdown',
      ],
      it: [
        'Inquadramento guidato con punteggio di completezza e MoSCoW',
        'Generazione IA multi-sezione (Groq Llama 3.3 70B) + ripiego offline',
        'Cronologia delle versioni, template settoriali',
        'Esportazione PDF (ReportLab) / DOCX / Markdown',
      ],
    },
    stack: ['Django 5', 'DRF', 'React', 'TypeScript', 'PostgreSQL', 'Groq', 'Docker'],
    tech: [
      'Python 3.12', 'Django 5.0', 'Django REST Framework', 'DRF SimpleJWT', 'React 18',
      'TypeScript 5.5', 'Vite', 'Tailwind CSS 3', 'Radix UI (shadcn/ui)', 'TanStack React Query',
      'React Hook Form', 'Zod', 'Recharts', 'Lucide React', 'Sonner', 'ReportLab', 'python-docx',
      'Pillow', 'psycopg2',
    ],
    tools: [
      'Docker', 'Docker Compose', 'PostgreSQL 16', 'nginx', 'Gunicorn', 'Groq API (Llama 3.3 70B)',
      'npm', 'pip', 'ESLint', 'PostCSS', 'Autoprefixer', 'python-decouple',
    ],
    screenshots: [
      { src: '/screenshots/cahier-charges/accueil.png', caption: { fr: 'Landing — génération de cahiers des charges', en: 'Landing — specification generation', it: 'Landing — generazione di capitolati' } },
      { src: '/screenshots/cahier-charges/connexion.png', caption: { fr: 'Connexion', en: 'Login', it: 'Accesso' } },
      { src: '/screenshots/cahier-charges/inscription.png', caption: { fr: 'Inscription', en: 'Sign up', it: 'Registrazione' } },
    ],
  },
  {
    slug: 'opporadar',
    name: 'OppoRadar',
    year: '2026',
    category: ['fullstack', 'ai'],
    status: 'done',
    accent: 'from-amber-500 to-orange-600',
    repo: 'opporadar',
    tagline: {
      fr: 'Veille intelligente des financements pour l’Afrique francophone',
      en: 'Smart funding-opportunity radar for francophone Africa',
      it: 'Monitoraggio intelligente dei finanziamenti per l’Africa francofona',
    },
    description: {
      fr: "Plateforme qui agrège, résume en français et matche automatiquement les opportunités de financement (appels à projets, subventions, bourses) avec le profil des utilisateurs.",
      en: 'Platform that aggregates, summarizes in French and automatically matches funding opportunities (grants, scholarships, calls) with user profiles.',
      it: "Piattaforma che aggrega, riassume in francese e abbina automaticamente le opportunità di finanziamento (bandi, sovvenzioni, borse di studio) al profilo degli utenti.",
    },
    helps: {
      fr: "Aide les ONG, startups, chercheurs et étudiants d'Afrique francophone à ne plus rater d'opportunités de financement éparpillées sur des dizaines de sites. La plateforme collecte tout automatiquement, résume en français, puis ne montre à chacun que ce qui correspond à son profil, avec des alertes email/WhatsApp. Gain de temps de veille énorme.",
      en: "Helps NGOs, startups, researchers and students in francophone Africa stop missing funding opportunities scattered across dozens of sites. The platform collects everything automatically, summarizes it in French, then shows each person only what matches their profile, with email/WhatsApp alerts. Huge time savings on monitoring.",
      it: "Aiuta le ONG, le startup, i ricercatori e gli studenti dell'Africa francofona a non perdere più opportunità di finanziamento disperse su decine di siti. La piattaforma raccoglie tutto automaticamente, riassume in francese e poi mostra a ciascuno solo ciò che corrisponde al suo profilo, con avvisi via email/WhatsApp. Enorme risparmio di tempo nel monitoraggio.",
    },
    highlights: {
      fr: [
        'Ingestion multi-sources : RSS, API, scrapers HTML',
        'Résumés IA en français avec cache de coûts',
        'Moteur de matching score profil ↔ opportunité',
        'Alertes personnalisées email/WhatsApp + favoris',
      ],
      en: [
        'Multi-source ingestion: RSS, API, HTML scrapers',
        'French AI summaries with cost caching',
        'Profile-to-opportunity scoring & matching engine',
        'Custom email/WhatsApp alerts + favorites',
      ],
      it: [
        'Ingestione multi-sorgente: RSS, API, scraper HTML',
        'Riassunti IA in francese con cache dei costi',
        'Motore di matching punteggio profilo ↔ opportunità',
        'Avvisi personalizzati email/WhatsApp + preferiti',
      ],
    },
    stack: ['Django', 'DRF', 'React', 'Vite', 'BeautifulSoup'],
    tech: [
      'Python 3.12', 'Django 6.0', 'Django REST Framework', 'React 18', 'Vite 5',
      'react-router-dom', 'Axios', 'BeautifulSoup4', 'feedparser', 'Requests', 'sqlparse',
      'python-dateutil',
    ],
    tools: [
      'SQLite (dev)', 'PostgreSQL (prod)', 'django-cors-headers', 'django-filter',
      'python-dotenv', 'npm', 'pip', 'Vite dev server (proxy /api, /media)', 'LLM (résumés FR)',
    ],
    screenshots: [
      { src: '/screenshots/opporadar/accueil.png', caption: { fr: 'Page d’accueil', en: 'Home page', it: 'Pagina iniziale' } },
      { src: '/screenshots/opporadar/connexion.png', caption: { fr: 'Connexion', en: 'Login', it: 'Accesso' } },
      { src: '/screenshots/opporadar/inscription.png', caption: { fr: 'Inscription', en: 'Sign up', it: 'Registrazione' } },
    ],
  },
  {
    slug: 'globaltradehub',
    name: 'GlobalTradeHub',
    year: '2026',
    category: ['ecommerce', 'fullstack', 'ai'],
    status: 'wip',
    accent: 'from-rose-500 to-red-600',
    repo: 'global-trade-hub-nexus',
    tagline: {
      fr: 'Plateforme e-commerce B2B internationale (Cameroun / Afrique)',
      en: 'International B2B e-commerce platform (Cameroon / Africa)',
      it: 'Piattaforma e-commerce B2B internazionale (Camerun / Africa)',
    },
    description: {
      fr: "Marketplace e-commerce avec catalogue local, importation B2B depuis 20+ pays, commandes groupées, suivi de colis, programme de fidélité et panel admin temps réel.",
      en: 'E-commerce marketplace with local catalog, B2B import from 20+ countries, group orders, parcel tracking, loyalty program and real-time admin panel.',
      it: "Marketplace e-commerce con catalogo locale, importazione B2B da oltre 20 paesi, ordini di gruppo, tracciamento dei colli, programma fedeltà e pannello admin in tempo reale.",
    },
    helps: {
      fr: "Aide les commerçants et PME africaines à acheter en gros à l'international (Chine, Nigeria, Maroc…) et à revendre localement, avec commandes groupées pour réduire les coûts, suivi de colis et paiement via Mobile Money. Un assistant IA multilingue guide l'acheteur. Côté gérant, un dashboard temps réel pilote ventes, stocks et fidélité.",
      en: "Helps African merchants and SMEs buy wholesale internationally (China, Nigeria, Morocco…) and resell locally, with group orders to cut costs, parcel tracking and Mobile Money payment. A multilingual AI assistant guides the buyer. For the manager, a real-time dashboard drives sales, stock and loyalty.",
      it: "Aiuta i commercianti e le PMI africane ad acquistare all'ingrosso a livello internazionale (Cina, Nigeria, Marocco…) e a rivendere localmente, con ordini di gruppo per ridurre i costi, tracciamento dei colli e pagamento tramite Mobile Money. Un assistente IA multilingue guida l'acquirente. Per il gestore, una dashboard in tempo reale governa vendite, scorte e fidelizzazione.",
    },
    highlights: {
      fr: [
        'Catalogue local + importation B2B & commandes groupées',
        'Assistant IA multilingue (Groq) avec fallback règles',
        'Suivi tracking, programme de fidélité (points/niveaux)',
        'Dashboard admin temps réel, cartes Leaflet, Mobile Money',
      ],
      en: [
        'Local catalog + B2B import & group orders',
        'Multilingual AI assistant (Groq) with rule fallback',
        'Parcel tracking, loyalty program (points/levels)',
        'Real-time admin dashboard, Leaflet maps, Mobile Money',
      ],
      it: [
        'Catalogo locale + importazione B2B e ordini di gruppo',
        'Assistente IA multilingue (Groq) con fallback a regole',
        'Tracciamento dei colli, programma fedeltà (punti/livelli)',
        'Dashboard admin in tempo reale, mappe Leaflet, Mobile Money',
      ],
    },
    stack: ['React', 'TypeScript', 'Django 5', 'PostgreSQL', 'Docker', 'Leaflet', 'Groq'],
    tech: [
      'TypeScript 5.5', 'React 18', 'Vite (SWC)', 'Tailwind CSS 3', 'Radix UI (shadcn/ui)',
      'TanStack React Query', 'React Hook Form', 'Zod', 'Recharts', 'Leaflet', 'react-leaflet',
      'Firebase', 'Embla Carousel', 'cmdk', 'Lucide React', 'Sonner', 'Python 3.12', 'Django 5.0',
      'Django REST Framework', 'DRF SimpleJWT', 'Pillow', 'ReportLab', 'PyOTP', 'QRCode',
    ],
    tools: [
      'Docker', 'Docker Compose', 'nginx 1.27', 'PostgreSQL 16', 'Gunicorn', 'Groq API',
      'Firebase Auth', 'Google Auth', 'Playwright (E2E)', 'ESLint 9', 'PostCSS', 'Autoprefixer',
      'Node.js 20', 'pip', 'python-decouple', 'lovable-tagger',
    ],
    screenshots: [
      { src: '/screenshots/globaltradehub/accueil.png', caption: { fr: 'Page d’accueil', en: 'Home page', it: 'Pagina iniziale' } },
      { src: '/screenshots/globaltradehub/produits.png', caption: { fr: 'Catalogue produits', en: 'Product catalog', it: 'Catalogo prodotti' } },
      { src: '/screenshots/globaltradehub/import-b2b.png', caption: { fr: 'Importation B2B (grossiste)', en: 'B2B import (wholesale)', it: 'Importazione B2B (ingrosso)' } },
    ],
  },
  {
    slug: 'proxitalents',
    name: 'ProxiTalents',
    year: '2026',
    category: ['fullstack', 'saas'],
    status: 'wip',
    accent: 'from-sky-500 to-cyan-600',
    repo: 'proxitalents',
    tagline: {
      fr: 'Marketplace de services de proximité',
      en: 'Local-services marketplace',
      it: 'Marketplace di servizi di prossimità',
    },
    description: {
      fr: "Plateforme sociale où chacun publie ses profils de service (12 catégories), expose ses réalisations en photos/vidéos, et où tout le monde peut chercher, noter et contacter directement.",
      en: 'Social platform where anyone publishes service profiles (12 categories), showcases work in photos/videos, and everyone can search, rate and contact directly.',
      it: "Piattaforma sociale dove ognuno pubblica i propri profili di servizio (12 categorie), espone i propri lavori in foto/video, e dove tutti possono cercare, valutare e contattare direttamente.",
    },
    helps: {
      fr: "Aide les prestataires de proximité (coiffeurs, cuisiniers, plombiers, couturiers…) à se faire connaître en montrant leurs réalisations, et aide les particuliers à trouver et contacter rapidement un professionnel près de chez eux. Les avis créent la confiance, la messagerie facilite la prise de contact. Une vitrine simple pour l'économie informelle locale.",
      en: "Helps local providers (hairdressers, cooks, plumbers, tailors…) get discovered by showcasing their work, and helps individuals quickly find and contact a professional nearby. Reviews build trust, messaging makes contact easy. A simple showcase for the local informal economy.",
      it: "Aiuta i prestatori di prossimità (parrucchieri, cuochi, idraulici, sarti…) a farsi conoscere mostrando i loro lavori, e aiuta i privati a trovare e contattare rapidamente un professionista vicino a loro. Le recensioni creano fiducia, la messaggistica facilita il contatto. Una vetrina semplice per l'economia informale locale.",
    },
    highlights: {
      fr: [
        '12 catégories de services + galerie de réalisations',
        'Système d’avis (note 1-5) et messagerie directe',
        'Recherche multi-critères, profils complets',
        'Design mobile-first / PWA',
      ],
      en: [
        '12 service categories + work gallery',
        'Reviews (1-5 rating) and direct messaging',
        'Multi-criteria search, full profiles',
        'Mobile-first / PWA design',
      ],
      it: [
        '12 categorie di servizi + galleria dei lavori',
        'Sistema di recensioni (voto 1-5) e messaggistica diretta',
        'Ricerca multi-criterio, profili completi',
        'Design mobile-first / PWA',
      ],
    },
    stack: ['Django', 'DRF', 'React', 'Vite', 'SQLite'],
    tech: [
      'Python 3.12', 'Django', 'Django REST Framework', 'React 18', 'Vite 5', 'react-router-dom',
    ],
    tools: [
      'SQLite', 'django-cors-headers', 'npm', 'pip', 'Vite dev server (proxy /api, /media)',
      'Token auth (DRF)', 'PWA',
    ],
    screenshots: [
      { src: '/screenshots/proxitalents/accueil.png', caption: { fr: 'Page d’accueil', en: 'Home page', it: 'Pagina iniziale' } },
      { src: '/screenshots/proxitalents/explorer.png', caption: { fr: 'Explorer les services (données réelles)', en: 'Browse services (live data)', it: 'Esplora i servizi (dati reali)' } },
      { src: '/screenshots/proxitalents/fiche-profil.png', caption: { fr: 'Fiche prestataire', en: 'Provider profile', it: 'Scheda prestatore' } },
      { src: '/screenshots/proxitalents/mes-profils.png', caption: { fr: 'Mes profils de service', en: 'My service profiles', it: 'I miei profili di servizio' } },
      { src: '/screenshots/proxitalents/messages.png', caption: { fr: 'Messagerie directe', en: 'Direct messaging', it: 'Messaggistica diretta' } },
      { src: '/screenshots/proxitalents/mon-compte.png', caption: { fr: 'Mon compte', en: 'My account', it: 'Il mio account' } },
      { src: '/screenshots/proxitalents/connexion.png', caption: { fr: 'Connexion', en: 'Login', it: 'Accesso' } },
      { src: '/screenshots/proxitalents/inscription.png', caption: { fr: 'Inscription', en: 'Sign up', it: 'Registrazione' } },
    ],
  },
  {
    slug: 'plume-cms',
    name: 'Plume CMS',
    year: '2026',
    category: ['cms', 'fullstack'],
    status: 'wip',
    accent: 'from-pink-500 to-rose-600',
    repo: 'plume-cms',
    tagline: {
      fr: 'CMS éditorial complet pour magazine en ligne',
      en: 'Complete editorial CMS for online magazine',
      it: 'CMS editoriale completo per rivista online',
    },
    description: {
      fr: "CMS de bout en bout : éditeur riche, médiathèque, rôles & permissions, modération de commentaires et site public typographié avec dashboard analytique.",
      en: 'End-to-end CMS: rich editor, media library, roles & permissions, comment moderation and a typographic public site with an analytics dashboard.',
      it: "CMS end-to-end: editor avanzato, libreria multimediale, ruoli e permessi, moderazione dei commenti e sito pubblico curato tipograficamente con dashboard analitica.",
    },
    helps: {
      fr: "Aide une rédaction ou un magazine à produire et publier du contenu sans dépendre de WordPress : éditeur WYSIWYG, workflow brouillon → relecture → publié, gestion fine des rôles (admin, éditeur, auteur) et modération des commentaires. Le site public est optimisé pour la lecture (typographie, temps de lecture, articles liés) et le SEO.",
      en: "Helps an editorial team or magazine produce and publish content without relying on WordPress: WYSIWYG editor, draft → review → published workflow, fine-grained roles (admin, editor, author) and comment moderation. The public site is reading-optimized (typography, reading time, related articles) and SEO-ready.",
      it: "Aiuta una redazione o una rivista a produrre e pubblicare contenuti senza dipendere da WordPress: editor WYSIWYG, workflow bozza → revisione → pubblicato, gestione granulare dei ruoli (admin, editor, autore) e moderazione dei commenti. Il sito pubblico è ottimizzato per la lettura (tipografia, tempo di lettura, articoli correlati) e per la SEO.",
    },
    highlights: {
      fr: [
        'Éditeur WYSIWYG TipTap + workflow de publication',
        'Médiathèque drag-and-drop, SEO, catégories/tags',
        'Rôles (admin/éditeur/auteur) & modération',
        'API REST JWT + 39 tests, dashboard Recharts',
      ],
      en: [
        'TipTap WYSIWYG editor + publishing workflow',
        'Drag-and-drop media library, SEO, categories/tags',
        'Roles (admin/editor/author) & moderation',
        'JWT REST API + 39 tests, Recharts dashboard',
      ],
      it: [
        'Editor WYSIWYG TipTap + workflow di pubblicazione',
        'Libreria multimediale drag-and-drop, SEO, categorie/tag',
        'Ruoli (admin/editor/autore) e moderazione',
        'API REST JWT + 39 test, dashboard Recharts',
      ],
    },
    stack: ['Django 5.2', 'DRF', 'React', 'TipTap', 'PostgreSQL'],
    tech: [
      'Python 3.12', 'Django 5.1', 'Django REST Framework', 'DRF SimpleJWT', 'React 18', 'Vite 5',
      'TipTap (StarterKit, Image, Link, Placeholder)', 'react-router-dom', 'Recharts',
      'Lucide React', 'Axios', 'Pillow',
    ],
    tools: [
      'PostgreSQL', 'SQLite (dev)', 'django-cors-headers', 'django-filter', 'nginx', 'Docker',
      'npm', 'pip', 'Django dev server', '39 tests API',
    ],
    screenshots: [
      { src: '/screenshots/plume-cms/accueil.png', caption: { fr: 'Home magazine — articles en vedette', en: 'Magazine home — featured articles', it: 'Home rivista — articoli in evidenza' } },
      { src: '/screenshots/plume-cms/articles.png', caption: { fr: 'Index des articles', en: 'Articles index', it: 'Indice degli articoli' } },
      { src: '/screenshots/plume-cms/admin-login.png', caption: { fr: 'Connexion administration', en: 'Admin login', it: 'Accesso amministrazione' } },
      { src: '/screenshots/plume-cms/admin-dashboard.png', caption: { fr: 'Tableau de bord admin (Recharts)', en: 'Admin dashboard (Recharts)', it: 'Dashboard admin (Recharts)' } },
      { src: '/screenshots/plume-cms/admin-articles.png', caption: { fr: 'Gestion des articles', en: 'Articles management', it: 'Gestione degli articoli' } },
      { src: '/screenshots/plume-cms/admin-editeur.png', caption: { fr: 'Éditeur WYSIWYG (TipTap)', en: 'WYSIWYG editor (TipTap)', it: 'Editor WYSIWYG (TipTap)' } },
      { src: '/screenshots/plume-cms/admin-medias.png', caption: { fr: 'Médiathèque', en: 'Media library', it: 'Libreria multimediale' } },
      { src: '/screenshots/plume-cms/admin-commentaires.png', caption: { fr: 'Modération des commentaires', en: 'Comment moderation', it: 'Moderazione dei commenti' } },
      { src: '/screenshots/plume-cms/admin-utilisateurs.png', caption: { fr: 'Gestion des utilisateurs & rôles', en: 'Users & roles management', it: 'Gestione di utenti e ruoli' } },
    ],
  },
  {
    slug: 'sos-planete',
    name: 'SOS Planète',
    year: '2026',
    category: ['fullstack'],
    status: 'live',
    accent: 'from-green-500 to-teal-600',
    repo: 'sos-planete',
    tagline: {
      fr: "Site complet pour une ONG de protection de l'environnement",
      en: 'Complete website for an environmental NGO',
      it: "Sito completo per una ONG di protezione dell'ambiente",
    },
    description: {
      fr: "Plateforme « Virage Vert & Bleu » : site public animé, gestion d'adhésions et de dons, actualités, et dashboard administrateur complet.",
      en: '"Virage Vert & Bleu" platform: animated public site, membership and donation management, news, and a full admin dashboard.',
      it: "Piattaforma « Virage Vert & Bleu »: sito pubblico animato, gestione di iscrizioni e donazioni, notizie e dashboard amministratore completa.",
    },
    helps: {
      fr: "Aide une ONG environnementale à exister en ligne et à fonctionner : présenter ses actions, recruter et gérer ses membres, collecter des dons (en espèces ou en matériel), publier des actualités et recevoir des messages — le tout piloté depuis un tableau de bord admin. Donne à une petite association les outils d'une grande, sans budget logiciel.",
      en: "Helps an environmental NGO exist online and operate: present its actions, recruit and manage members, collect donations (cash or material), publish news and receive messages — all driven from an admin dashboard. Gives a small nonprofit the tools of a big one, with no software budget.",
      it: "Aiuta una ONG ambientale a esistere online e a funzionare: presentare le proprie azioni, reclutare e gestire i membri, raccogliere donazioni (in denaro o in materiale), pubblicare notizie e ricevere messaggi — il tutto gestito da una dashboard admin. Dà a una piccola associazione gli strumenti di una grande, senza budget software.",
    },
    highlights: {
      fr: [
        'Adhésions, dons (espèces/matériel), actualités',
        'Dashboard admin avec auth par token & uploads',
        'Effets visuels avancés (ParticleField, PlanetGlobe)',
        'Tests Vitest / Playwright, déploiement Docker',
      ],
      en: [
        'Memberships, donations (cash/material), news',
        'Admin dashboard with token auth & uploads',
        'Advanced visual effects (ParticleField, PlanetGlobe)',
        'Vitest / Playwright tests, Docker deployment',
      ],
      it: [
        'Iscrizioni, donazioni (denaro/materiale), notizie',
        'Dashboard admin con autenticazione tramite token e upload',
        'Effetti visivi avanzati (ParticleField, PlanetGlobe)',
        'Test Vitest / Playwright, deployment Docker',
      ],
    },
    stack: ['React', 'TypeScript', 'Django 5.1', 'MySQL', 'Framer Motion', 'Docker'],
    tech: [
      'TypeScript 5.8', 'React 18', 'Vite (SWC)', 'Tailwind CSS 3', 'Radix UI (shadcn/ui)',
      'Framer Motion 12', 'TanStack React Query', 'React Hook Form', 'Zod', 'Recharts',
      'react-router-dom', 'Embla Carousel', 'Lucide React', 'Sonner', 'Python 3.12', 'Django 5.1',
      'Gunicorn', 'WhiteNoise',
    ],
    tools: [
      'Docker', 'Docker Compose', 'MySQL 8.4', 'phpMyAdmin', 'mysqlclient', 'django-cors-headers',
      'Vitest', 'Playwright', 'Testing Library', 'jsdom', 'ESLint 9', 'PostCSS', 'Autoprefixer',
      'Node.js 20', 'npm', 'pip',
    ],
    screenshots: [
      { src: '/screenshots/sos-planete/accueil.png', caption: { fr: 'Page d’accueil — hero animé', en: 'Home page — animated hero', it: 'Pagina iniziale — hero animato' } },
      { src: '/screenshots/sos-planete/qui-sommes-nous.png', caption: { fr: 'Qui sommes-nous', en: 'About us', it: 'Chi siamo' } },
      { src: '/screenshots/sos-planete/nos-actions.png', caption: { fr: 'Nos actions', en: 'Our actions', it: 'Le nostre azioni' } },
      { src: '/screenshots/sos-planete/actualites.png', caption: { fr: 'Actualités', en: 'News', it: 'Notizie' } },
      { src: '/screenshots/sos-planete/adherer.png', caption: { fr: 'Adhésion membre', en: 'Membership', it: 'Iscrizione membro' } },
      { src: '/screenshots/sos-planete/nous-soutenir.png', caption: { fr: 'Faire un don', en: 'Make a donation', it: 'Fai una donazione' } },
      { src: '/screenshots/sos-planete/contact.png', caption: { fr: 'Contact', en: 'Contact', it: 'Contatti' } },
      { src: '/screenshots/sos-planete/admin-login.png', caption: { fr: 'Connexion administrateur', en: 'Admin login', it: 'Accesso amministratore' } },
    ],
  },
]

export const categoryLabels: Record<Category, { fr: string; en: string; it: string }> = {
  all: { fr: 'Tous', en: 'All', it: 'Tutti' },
  fullstack: { fr: 'Full-Stack', en: 'Full-Stack', it: 'Full-Stack' },
  ai: { fr: 'IA / LLM', en: 'AI / LLM', it: 'IA / LLM' },
  security: { fr: 'Cybersécurité', en: 'Security', it: 'Sicurezza' },
  saas: { fr: 'SaaS', en: 'SaaS', it: 'SaaS' },
  ecommerce: { fr: 'E-commerce', en: 'E-commerce', it: 'E-commerce' },
  cms: { fr: 'CMS', en: 'CMS', it: 'CMS' },
}

export const statusLabels: Record<Project['status'], { fr: string; en: string; it: string }> = {
  live: { fr: 'En ligne', en: 'Live', it: 'Online' },
  wip: { fr: 'En cours', en: 'In progress', it: 'In corso' },
  done: { fr: 'Terminé', en: 'Completed', it: 'Completato' },
}
