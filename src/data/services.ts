import type { Lang } from '../i18n'

type L = Record<Lang, string>

export type ServiceCategory = 'all' | 'development' | 'digital' | 'consulting'

export interface Service {
  id: number
  icon: string
  category: Exclude<ServiceCategory, 'all'>
  title: L
  description: L
  tech: string[]
  /** Tarif indicatif "à partir de" — modifiable */
  price: { eur: string; usd: string; cfa: string }
}

export const services: Service[] = [
  {
    id: 1,
    icon: 'Globe',
    category: 'development',
    title: {
      fr: 'Développement Web Full-Stack',
      en: 'Full-Stack Web Development',
      it: 'Sviluppo Web Full-Stack',
    },
    description: {
      fr: 'Applications web modernes et performantes (React, Symfony, Django) : UI soignée, API REST et base de données optimisée.',
      en: 'Modern, high-performance web applications (React, Symfony, Django): polished UI, REST APIs and an optimized database.',
      it: 'Applicazioni web moderne e performanti (React, Symfony, Django): UI curata, API REST e database ottimizzato.',
    },
    tech: ['React', 'Symfony', 'Django', 'MySQL', 'PostgreSQL'],
    price: { eur: '750 €', usd: '$850', cfa: '500 000 FCFA' },
  },
  {
    id: 2,
    icon: 'Shield',
    category: 'consulting',
    title: {
      fr: 'Audit de Sécurité & Cybersécurité',
      en: 'Security Audit & Cybersecurity',
      it: 'Audit di Sicurezza & Cybersecurity',
    },
    description: {
      fr: "Tests d'intrusion et évaluation des vulnérabilités avec des outils professionnels, rapport et recommandations.",
      en: 'Penetration testing and vulnerability assessment with professional tools, plus a report and recommendations.',
      it: 'Penetration test e valutazione delle vulnerabilità con strumenti professionali, report e raccomandazioni.',
    },
    tech: ['Nmap', 'SQLMap', 'Nikto', 'OWASP ZAP', 'Metasploit'],
    price: { eur: '450 €', usd: '$500', cfa: '300 000 FCFA' },
  },
  {
    id: 3,
    icon: 'Smartphone',
    category: 'development',
    title: {
      fr: 'Applications Mobile Cross-Platform',
      en: 'Cross-Platform Mobile Apps',
      it: 'App Mobile Cross-Platform',
    },
    description: {
      fr: 'Apps iOS & Android (React Native, Flutter) : interface intuitive, notifications push et publication sur les stores.',
      en: 'iOS & Android apps (React Native, Flutter): intuitive interface, push notifications and store publishing.',
      it: 'App iOS e Android (React Native, Flutter): interfaccia intuitiva, notifiche push e pubblicazione sugli store.',
    },
    tech: ['React Native', 'Flutter', 'Firebase'],
    price: { eur: '1 200 €', usd: '$1 300', cfa: '800 000 FCFA' },
  },
  {
    id: 4,
    icon: 'ShoppingCart',
    category: 'development',
    title: {
      fr: 'Sites Vitrine & E-commerce',
      en: 'Showcase & E-commerce Websites',
      it: 'Siti Vetrina & E-commerce',
    },
    description: {
      fr: 'Sites professionnels et boutiques en ligne optimisés pour la conversion : paiement sécurisé, gestion de stock, analytics.',
      en: 'Professional websites and online stores optimized for conversion: secure payments, inventory management and analytics.',
      it: 'Siti professionali e negozi online ottimizzati per la conversione: pagamenti sicuri, gestione del magazzino e analytics.',
    },
    tech: ['WordPress', 'Shopify', 'WooCommerce', 'Stripe'],
    price: { eur: '600 €', usd: '$650', cfa: '400 000 FCFA' },
  },
  {
    id: 5,
    icon: 'Briefcase',
    category: 'development',
    title: {
      fr: 'Portfolios Professionnels',
      en: 'Professional Portfolios',
      it: 'Portfolio Professionali',
    },
    description: {
      fr: 'Portfolio sur mesure, du design à la mise en ligne : responsive, optimisé SEO, hébergement inclus.',
      en: 'Tailor-made portfolios, from design to launch: responsive, SEO-optimized, hosting included.',
      it: 'Portfolio su misura, dal design alla pubblicazione: responsive, ottimizzato SEO, hosting incluso.',
    },
    tech: ['React', 'Next.js', 'SEO'],
    price: { eur: '220 €', usd: '$250', cfa: '150 000 FCFA' },
  },
  {
    id: 9,
    icon: 'Users',
    category: 'digital',
    title: {
      fr: 'Gestion des Réseaux Sociaux',
      en: 'Social Media Management',
      it: 'Gestione dei Social Media',
    },
    description: {
      fr: 'Community management et stratégie social media : création de contenu, engagement et reporting mensuel.',
      en: 'Community management and social media strategy: content creation, engagement and monthly reporting.',
      it: 'Community management e strategia social: creazione di contenuti, engagement e reportistica mensile.',
    },
    tech: ['Meta Business', 'Hootsuite', 'Canva'],
    price: { eur: '200 €', usd: '$220', cfa: '150 000 FCFA' },
  },
  {
    id: 10,
    icon: 'Megaphone',
    category: 'digital',
    title: {
      fr: 'Campagnes Publicitaires Digitales',
      en: 'Digital Advertising Campaigns',
      it: 'Campagne Pubblicitarie Digitali',
    },
    description: {
      fr: 'Campagnes Google & Meta Ads : ciblage précis, optimisation du ROI et reporting détaillé.',
      en: 'Google & Meta Ads campaigns: precise targeting, ROI optimization and detailed reporting.',
      it: 'Campagne Google e Meta Ads: targeting preciso, ottimizzazione del ROI e reportistica dettagliata.',
    },
    tech: ['Google Ads', 'Meta Ads', 'Analytics'],
    price: { eur: '150 €', usd: '$165', cfa: '100 000 FCFA' },
  },
  {
    id: 12,
    icon: 'Zap',
    category: 'consulting',
    title: {
      fr: 'Automatisation de Processus (IA)',
      en: 'Process Automation (AI)',
      it: 'Automazione dei Processi (IA)',
    },
    description: {
      fr: 'Workflows automatisés et intégration IA / no-code pour optimiser vos processus métier.',
      en: 'Automated workflows and AI / no-code integration to streamline your business processes.',
      it: 'Workflow automatizzati e integrazione IA / no-code per ottimizzare i tuoi processi aziendali.',
    },
    tech: ['Zapier', 'Make', 'Python', 'APIs'],
    price: { eur: '300 €', usd: '$330', cfa: '200 000 FCFA' },
  },
]

export const serviceCategoryLabels: Record<ServiceCategory, L> = {
  all: { fr: 'Tous', en: 'All', it: 'Tutti' },
  development: { fr: 'Développement', en: 'Development', it: 'Sviluppo' },
  digital: { fr: 'Digital', en: 'Digital', it: 'Digitale' },
  consulting: { fr: 'Conseil', en: 'Consulting', it: 'Consulenza' },
}
