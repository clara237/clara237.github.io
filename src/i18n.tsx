import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from 'react'

export type Lang = 'fr' | 'en' | 'it'

export const LANGS: { code: Lang; label: string }[] = [
  { code: 'it', label: 'IT' },
  { code: 'fr', label: 'FR' },
  { code: 'en', label: 'EN' },
]

type Entry = { fr: string; en: string; it: string }
type Dict = Record<string, Entry>

const dict: Dict = {
  'nav.about': { fr: 'À propos', en: 'About', it: 'Chi sono' },
  'nav.projects': { fr: 'Projets', en: 'Projects', it: 'Progetti' },
  'nav.skills': { fr: 'Compétences', en: 'Skills', it: 'Competenze' },
  'nav.services': { fr: 'Services', en: 'Services', it: 'Servizi' },
  'nav.journey': { fr: 'Parcours', en: 'Journey', it: 'Percorso' },
  'nav.contact': { fr: 'Contact', en: 'Contact', it: 'Contatti' },
  'nav.booking': { fr: 'Réserver', en: 'Book', it: 'Prenota' },

  'services.title': { fr: 'Services', en: 'Services', it: 'Servizi' },
  'services.subtitle': {
    fr: 'Des solutions complètes pour transformer vos idées en réalité digitale — de la conception au déploiement.',
    en: 'Complete solutions to turn your ideas into digital reality — from design to deployment.',
    it: 'Soluzioni complete per trasformare le tue idee in realtà digitale — dalla progettazione al rilascio.',
  },
  'services.quote': { fr: 'Demander un devis', en: 'Request a quote', it: 'Richiedi un preventivo' },
  'services.tech': { fr: 'Technologies', en: 'Technologies', it: 'Tecnologie' },

  'journey.certifications': { fr: 'Certifications', en: 'Certifications', it: 'Certificazioni' },
  'journey.interests': { fr: "Centres d'intérêt", en: 'Interests', it: 'Interessi' },

  'journey.title': { fr: 'Parcours', en: 'Journey', it: 'Percorso' },
  'journey.subtitle': {
    fr: 'Mon expérience professionnelle, ma formation et mes langues.',
    en: 'My professional experience, education and languages.',
    it: 'La mia esperienza professionale, la formazione e le lingue.',
  },
  'journey.experience': { fr: 'Expérience', en: 'Experience', it: 'Esperienza' },
  'journey.trainings': { fr: 'Formations en ligne', en: 'Online training', it: 'Formazioni online' },
  'journey.education': { fr: 'Formation', en: 'Education', it: 'Formazione' },
  'journey.languages': { fr: 'Langues', en: 'Languages', it: 'Lingue' },
  'cv.download': { fr: 'Voir mon CV', en: 'View my résumé', it: 'Vedi il mio CV' },
  'cv.projects': { fr: 'Projets sélectionnés', en: 'Selected projects', it: 'Progetti selezionati' },
  'cv.print': { fr: 'Imprimer / PDF', en: 'Print / PDF', it: 'Stampa / PDF' },
  'cv.profile': { fr: 'Profil', en: 'Profile', it: 'Profilo' },

  'hero.role': {
    fr: 'Développeuse Full-Stack & Sécurité Informatique',
    en: 'Full-Stack Developer & Security Engineer',
    it: 'Sviluppatrice Full-Stack & Sicurezza Informatica',
  },
  'hero.intro': {
    fr: 'Je conçois des applications web complètes — du backend Django/Node à des interfaces React soignées — en y intégrant de l’IA et une vraie culture de la sécurité.',
    en: 'I build complete web applications — from Django/Node backends to polished React interfaces — woven with AI and a genuine security mindset.',
    it: 'Progetto applicazioni web complete — dai backend Django/Node a interfacce React curate — integrando l’IA e una vera cultura della sicurezza.',
  },
  'hero.cta.projects': { fr: 'Voir mes projets', en: 'View my projects', it: 'I miei progetti' },
  'hero.cta.contact': { fr: 'Me contacter', en: 'Get in touch', it: 'Contattami' },

  'stats.projects': { fr: 'Projets réalisés', en: 'Projects built', it: 'Progetti realizzati' },
  'stats.stacks': { fr: 'Technologies maîtrisées', en: 'Technologies used', it: 'Tecnologie padroneggiate' },
  'stats.domains': { fr: 'Domaines couverts', en: 'Domains covered', it: 'Ambiti coperti' },

  'about.title': { fr: 'À propos', en: 'About', it: 'Chi sono' },
  'about.p1': {
    fr: 'Développeuse full-stack passionnée, je transforme des idées en produits déployables. Mon terrain de jeu va des plateformes SaaS multi-tenant aux outils de cybersécurité, en passant par des assistants propulsés par les LLM.',
    en: 'A passionate full-stack developer, I turn ideas into deployable products. My playground spans multi-tenant SaaS platforms, cybersecurity tooling and LLM-powered assistants.',
    it: 'Sviluppatrice full-stack appassionata, trasformo le idee in prodotti pronti per la produzione. Il mio campo di gioco spazia dalle piattaforme SaaS multi-tenant agli strumenti di cybersicurezza, fino agli assistenti basati su LLM.',
  },
  'about.p2': {
    fr: 'J’aime les architectures propres (Docker, microservices, API REST typées), les interfaces qui respirent (React, Tailwind, Framer Motion) et les détails qui font la différence : permissions granulaires, files asynchrones, tests automatisés.',
    en: 'I love clean architectures (Docker, microservices, typed REST APIs), interfaces that breathe (React, Tailwind, Framer Motion) and the details that matter: granular permissions, async queues, automated tests.',
    it: 'Amo le architetture pulite (Docker, microservizi, API REST tipizzate), le interfacce che respirano (React, Tailwind, Framer Motion) e i dettagli che fanno la differenza: permessi granulari, code asincrone, test automatizzati.',
  },
  'about.p3': {
    fr: 'En veille permanente, je me forme en continu — cybersécurité, sécurité réseau et cloud Azure — pour livrer des produits robustes, sûrs et à jour.',
    en: 'Always curious, I keep learning — cybersecurity, network security and Azure cloud — to ship robust, secure and up-to-date products.',
    it: 'Sempre curiosa, mi formo di continuo — cybersicurezza, sicurezza di rete e cloud Azure — per rilasciare prodotti robusti, sicuri e aggiornati.',
  },

  'projects.title': { fr: 'Projets', en: 'Projects', it: 'Progetti' },
  'projects.subtitle': {
    fr: 'Une sélection de ce que j’ai conçu, du prototype à la production.',
    en: 'A selection of what I’ve built, from prototype to production.',
    it: 'Una selezione di ciò che ho realizzato, dal prototipo alla produzione.',
  },

  'skills.title': { fr: 'Compétences', en: 'Skills', it: 'Competenze' },
  'skills.subtitle': {
    fr: 'Les technologies et outils que j’ai utilisés à travers mes projets.',
    en: 'The technologies and tools I’ve used across my projects.',
    it: 'Le tecnologie e gli strumenti che ho utilizzato nei miei progetti.',
  },

  'contact.title': { fr: 'Travaillons ensemble', en: 'Let’s work together', it: 'Lavoriamo insieme' },
  'contact.subtitle': {
    fr: 'Un projet, une opportunité ou simplement envie d’échanger ? Écrivez-moi.',
    en: 'A project, an opportunity or just want to chat? Drop me a line.',
    it: 'Un progetto, un’opportunità o semplicemente voglia di scambiare due parole? Scrivimi.',
  },
  'contact.email': { fr: 'M’envoyer un email', en: 'Send me an email', it: 'Inviami un’email' },

  'footer.built': {
    fr: 'Conçu avec React, TypeScript & Tailwind.',
    en: 'Built with React, TypeScript & Tailwind.',
    it: 'Realizzato con React, TypeScript & Tailwind.',
  },

  'card.more': { fr: 'Voir le détail', en: 'View details', it: 'Vedi i dettagli' },
  'modal.source': { fr: 'Code source', en: 'Source code', it: 'Codice sorgente' },
  'modal.demo': { fr: 'Démo en ligne', en: 'Live demo', it: 'Demo online' },
  'modal.tab.preview': { fr: 'Aperçu', en: 'Preview', it: 'Anteprima' },
  'modal.tab.details': { fr: 'Détails', en: 'Details', it: 'Dettagli' },
  'modal.helps': { fr: 'À quoi ça sert', en: 'What it’s for', it: 'A cosa serve' },
  'modal.features': { fr: 'Fonctionnalités clés', en: 'Key features', it: 'Funzionalità chiave' },
  'modal.tech': { fr: 'Technologies', en: 'Technologies', it: 'Tecnologie' },
  'modal.tools': { fr: 'Outils & services', en: 'Tools & services', it: 'Strumenti & servizi' },
  'modal.noshots': {
    fr: 'Captures en cours d’ajout…',
    en: 'Screenshots being added…',
    it: 'Screenshot in arrivo…',
  },
  'modal.close': { fr: 'Fermer', en: 'Close', it: 'Chiudi' },
  'modal.zoom': { fr: 'Agrandir', en: 'Enlarge', it: 'Ingrandisci' },

  // ── Coordonnées (Parcours) ──
  'journey.info': { fr: 'Coordonnées', en: 'Details', it: 'Contatti' },
  'journey.nationality': { fr: 'Camerounaise', en: 'Cameroonian', it: 'Camerunese' },

  // ── Tarifs (marché européen : EUR par défaut, TVA) ──
  'price.from': { fr: 'À partir de', en: 'Starting from', it: 'A partire da' },
  'price.vat': { fr: 'HT', en: 'excl. VAT', it: 'IVA escl.' },
  'price.book': { fr: 'Réserver ce service', en: 'Book this service', it: 'Prenota questo servizio' },
  'price.currency': { fr: 'Devise', en: 'Currency', it: 'Valuta' },

  // ── Disponibilité ──
  'avail.badge': { fr: 'Disponible · fuseau CET', en: 'Available · CET timezone', it: 'Disponibile · fuso CET' },
  'avail.reply': { fr: 'Réponse sous 24 h', en: 'Reply within 24h', it: 'Risposta entro 24h' },

  // ── Réservation ──
  'booking.eyebrow': { fr: 'Réservation', en: 'Booking', it: 'Prenotazione' },
  'booking.title': { fr: 'Réservez en deux minutes', en: 'Book in two minutes', it: 'Prenota in due minuti' },
  'booking.subtitle': {
    fr: 'Choisissez un appel découverte gratuit, la réservation d’un service ou un simple rendez-vous. Je vous réponds sous 24 h.',
    en: 'Pick a free discovery call, book a service, or just a meeting. I reply within 24h.',
    it: 'Scegli una call conoscitiva gratuita, la prenotazione di un servizio o un semplice appuntamento. Rispondo entro 24h.',
  },
  'booking.cta': { fr: 'Réserver un créneau', en: 'Book a slot', it: 'Prenota uno slot' },
  'booking.open': { fr: 'Réserver', en: 'Book', it: 'Prenota' },
  'booking.object': { fr: 'Objet', en: 'Purpose', it: 'Oggetto' },
  'booking.call': { fr: 'Appel découverte (gratuit)', en: 'Discovery call (free)', it: 'Call conoscitiva (gratis)' },
  'booking.service': { fr: 'Réserver un service', en: 'Book a service', it: 'Prenota un servizio' },
  'booking.meeting': { fr: 'Rendez-vous', en: 'Meeting', it: 'Appuntamento' },
  'booking.pickService': { fr: 'Choisir un service…', en: 'Choose a service…', it: 'Scegli un servizio…' },
  'booking.date': { fr: 'Date souhaitée', en: 'Preferred date', it: 'Data preferita' },
  'booking.slot': { fr: 'Créneau', en: 'Time slot', it: 'Fascia oraria' },
  'booking.morning': { fr: 'Matin', en: 'Morning', it: 'Mattina' },
  'booking.afternoon': { fr: 'Après-midi', en: 'Afternoon', it: 'Pomeriggio' },
  'booking.evening': { fr: 'Soir', en: 'Evening', it: 'Sera' },
  'booking.name': { fr: 'Nom', en: 'Name', it: 'Nome' },
  'booking.email': { fr: 'Email', en: 'Email', it: 'Email' },
  'booking.message': { fr: 'Message (optionnel)', en: 'Message (optional)', it: 'Messaggio (facoltativo)' },
  'booking.consent': {
    fr: 'J’accepte que mes données soient utilisées pour traiter ma demande (RGPD).',
    en: 'I agree my data may be used to process my request (GDPR).',
    it: 'Acconsento all’uso dei miei dati per gestire la richiesta (GDPR).',
  },
  'booking.send': { fr: 'Envoyer la demande', en: 'Send request', it: 'Invia la richiesta' },
  'booking.sent': {
    fr: 'Votre messagerie va s’ouvrir avec la demande pré-remplie ✦',
    en: 'Your mail app will open with the request pre-filled ✦',
    it: 'La tua app email si aprirà con la richiesta precompilata ✦',
  },
  'booking.required': { fr: 'Merci de remplir les champs requis.', en: 'Please fill the required fields.', it: 'Compila i campi richiesti.' },
  'booking.privacy': {
    fr: 'Vos données restent confidentielles — aucune revente, conforme RGPD.',
    en: 'Your data stays private — never resold, GDPR-compliant.',
    it: 'I tuoi dati restano riservati — mai rivenduti, conforme GDPR.',
  },
}

interface I18nContext {
  lang: Lang
  setLang: (l: Lang) => void
  toggle: () => void
  t: (key: keyof typeof dict) => string
}

const Ctx = createContext<I18nContext | null>(null)

function detectLang(): Lang {
  if (typeof navigator === 'undefined') return 'it'
  const stored = typeof localStorage !== 'undefined' ? localStorage.getItem('lang') : null
  if (stored === 'fr' || stored === 'en' || stored === 'it') return stored
  const nav = navigator.language.toLowerCase()
  if (nav.startsWith('it')) return 'it'
  if (nav.startsWith('fr')) return 'fr'
  if (nav.startsWith('en')) return 'en'
  return 'it' // marché italien par défaut
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(detectLang)

  const setLang = useCallback((l: Lang) => {
    setLangState(l)
    if (typeof localStorage !== 'undefined') localStorage.setItem('lang', l)
  }, [])

  const toggle = useCallback(() => {
    setLangState((l) => {
      const order: Lang[] = ['it', 'fr', 'en']
      const next = order[(order.indexOf(l) + 1) % order.length]
      if (typeof localStorage !== 'undefined') localStorage.setItem('lang', next)
      return next
    })
  }, [])

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const t = useCallback((key: keyof typeof dict) => dict[key]?.[lang] ?? String(key), [lang])
  return <Ctx.Provider value={{ lang, setLang, toggle, t }}>{children}</Ctx.Provider>
}

export function useI18n() {
  const ctx = useContext(Ctx)
  if (!ctx) throw new Error('useI18n must be used within I18nProvider')
  return ctx
}
