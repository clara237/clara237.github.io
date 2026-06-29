import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  BookOpen,
  Briefcase,
  CalendarCheck,
  FileText,
  Globe,
  Headphones,
  Megaphone,
  Palette,
  Shield,
  ShoppingCart,
  Smartphone,
  Target,
  Users,
  Video,
  Zap,
  type LucideIcon,
} from 'lucide-react'
import {
  services,
  serviceCategoryLabels,
  type Service,
  type ServiceCategory,
} from '../data/services'
import { getTechIcon } from '../data/techIcons'
import { useI18n } from '../i18n'
import { SectionTitle } from './About'
import { useBooking } from './Booking'

const ICONS = {
  Globe,
  Shield,
  Smartphone,
  ShoppingCart,
  Briefcase,
  Palette,
  Video,
  BookOpen,
  Users,
  Megaphone,
  FileText,
  Zap,
  Target,
  Headphones,
} as const satisfies Record<string, LucideIcon>

const filters: ServiceCategory[] = ['all', 'development', 'digital', 'consulting']

// Devises proposées — EUR par défaut (marché européen)
type Currency = 'eur' | 'usd' | 'cfa'
const currencies: { id: Currency; label: string }[] = [
  { id: 'eur', label: 'EUR' },
  { id: 'usd', label: 'USD' },
  { id: 'cfa', label: 'FCFA' },
]

export default function Services() {
  const { t, lang } = useI18n()
  const [active, setActive] = useState<ServiceCategory>('all')
  const [currency, setCurrency] = useState<Currency>('eur')

  const visible = useMemo(
    () => (active === 'all' ? services : services.filter((s) => s.category === active)),
    [active],
  )

  return (
    <section id="services" className="px-6 py-12 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <SectionTitle index="04">{t('services.title')}</SectionTitle>
        <p className="mt-4 max-w-2xl text-lg text-plum/75">{t('services.subtitle')}</p>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
          {/* filtres catégories */}
          <div className="flex flex-wrap gap-2.5">
            {filters.map((f) => {
              const count =
                f === 'all' ? services.length : services.filter((s) => s.category === f).length
              if (count === 0) return null
              const isActive = active === f
              return (
                <button
                  key={f}
                  onClick={() => setActive(f)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? 'bg-gradient-to-r from-rose to-peach text-white shadow-soft'
                      : 'border border-rose/20 bg-white/50 text-plum/80 backdrop-blur hover:border-rose/45 hover:text-ink'
                  }`}
                >
                  {serviceCategoryLabels[f][lang]}
                  <span className={`ml-1.5 text-xs ${isActive ? 'opacity-80' : 'opacity-50'}`}>
                    {count}
                  </span>
                </button>
              )
            })}
          </div>

          {/* sélecteur de devise */}
          <div
            className="flex items-center gap-0.5 rounded-full border border-rose/20 bg-white/60 p-0.5 backdrop-blur"
            role="group"
            aria-label={t('price.currency')}
          >
            {currencies.map((c) => (
              <button
                key={c.id}
                onClick={() => setCurrency(c.id)}
                aria-pressed={currency === c.id}
                className={`rounded-full px-3 py-1.5 text-xs font-semibold transition-all ${
                  currency === c.id
                    ? 'bg-gradient-to-r from-rose to-peach text-white shadow-soft'
                    : 'text-plum/70 hover:text-ink'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="mt-9 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visible.map((service) => (
              <ServiceCard key={service.id} service={service} lang={lang} currency={currency} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}

function ServiceCard({
  service,
  lang,
  currency,
}: {
  service: Service
  lang: ReturnType<typeof useI18n>['lang']
  currency: Currency
}) {
  const { t } = useI18n()
  const { open } = useBooking()
  const Icon = ICONS[service.icon as keyof typeof ICONS]

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="group card-atelier ring-conic relative flex flex-col rounded-[1.75rem] p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-petal"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-rose to-peach text-white shadow-soft transition-transform duration-300 group-hover:rotate-[-8deg]">
        {Icon && <Icon className="h-5 w-5" />}
      </div>

      <h3 className="mt-5 font-display text-lg font-semibold text-ink">{service.title[lang]}</h3>
      <p className="mt-2 text-sm leading-relaxed text-plum/70">{service.description[lang]}</p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {service.tech.map((tech) => {
          const TechIcon = getTechIcon(tech)
          return (
            <span
              key={tech}
              className="inline-flex items-center gap-1 rounded-lg border border-rose/12 bg-white/55 px-2 py-1 font-mono text-[11px] text-plum"
            >
              <TechIcon className="h-3 w-3 text-plum/55" />
              {tech}
            </span>
          )
        })}
      </div>

      {/* Tarif « à partir de » + TVA */}
      <div className="mt-5 flex items-end justify-between border-t border-rose/10 pt-4">
        <div>
          <span className="block text-[11px] font-medium uppercase tracking-wide text-plum/55">
            {t('price.from')}
          </span>
          <span className="font-display text-2xl font-semibold text-ink">
            {service.price[currency]}
          </span>
          <span className="ml-1 text-[11px] font-medium text-plum/55">{t('price.vat')}</span>
        </div>
      </div>

      <button
        onClick={() => open(service.title[lang])}
        className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-rose via-peach to-gold px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-petal"
      >
        <CalendarCheck className="h-4 w-4 transition-transform group-hover:-rotate-6" />
        {t('price.book')}
      </button>
    </motion.article>
  )
}
