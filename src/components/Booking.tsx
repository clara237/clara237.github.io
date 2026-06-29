import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  CalendarCheck,
  Check,
  Clock,
  Github,
  Linkedin,
  Mail,
  Phone,
  ShieldCheck,
  Sparkles,
  X,
} from 'lucide-react'
import { useI18n } from '../i18n'
import { services } from '../data/services'

// 👉 Coordonnées de contact
export const CONTACT = {
  email: 'clarasilatchom03@gmail.com',
  github: 'https://github.com/clara237',
  linkedin: 'https://www.linkedin.com/in/clara-isabelle-140904209',
}

type Objet = 'call' | 'service' | 'meeting'

interface BookingCtx {
  open: (prefillService?: string) => void
}
const Ctx = createContext<BookingCtx | null>(null)

export function useBooking() {
  const ctx = useContext(Ctx)
  if (!ctx) throw new Error('useBooking must be used within BookingProvider')
  return ctx
}

export function BookingProvider({ children }: { children: ReactNode }) {
  const [openState, setOpenState] = useState<{ on: boolean; service?: string }>({ on: false })
  const open = useCallback((prefillService?: string) => {
    setOpenState({ on: true, service: prefillService })
  }, [])
  const value = useMemo(() => ({ open }), [open])

  return (
    <Ctx.Provider value={value}>
      {children}
      <AnimatePresence>
        {openState.on && (
          <Modal prefillService={openState.service} onClose={() => setOpenState({ on: false })} />
        )}
      </AnimatePresence>
    </Ctx.Provider>
  )
}

const ease = [0.22, 1, 0.36, 1] as const

function Modal({ prefillService, onClose }: { prefillService?: string; onClose: () => void }) {
  return (
    <motion.div
      className="fixed inset-0 z-[80] grid place-items-center px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div
        aria-hidden
        onClick={onClose}
        className="absolute inset-0 bg-ink/40 backdrop-blur-sm"
      />
      <motion.div
        role="dialog"
        aria-modal
        initial={{ opacity: 0, y: 24, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 16, scale: 0.97 }}
        transition={{ duration: 0.4, ease }}
        className="card-atelier relative z-10 max-h-[92vh] w-full max-w-lg overflow-y-auto rounded-[2rem] p-7 shadow-petal sm:p-9"
      >
        <button
          onClick={onClose}
          aria-label="×"
          className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-rose/20 bg-white/60 text-plum transition-colors hover:border-rose/50 hover:text-rose"
        >
          <X className="h-4 w-4" />
        </button>
        <BookingForm prefillService={prefillService} />
      </motion.div>
    </motion.div>
  )
}

export function BookingForm({ prefillService }: { prefillService?: string }) {
  const { t, lang } = useI18n()
  const [objet, setObjet] = useState<Objet>(prefillService ? 'service' : 'call')
  const [service, setService] = useState(prefillService ?? '')
  const [date, setDate] = useState('')
  const [slot, setSlot] = useState('morning')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [consent, setConsent] = useState(false)
  const [error, setError] = useState(false)
  const [sent, setSent] = useState(false)

  const objets: { id: Objet; label: string; icon: typeof Phone }[] = [
    { id: 'call', label: t('booking.call'), icon: Phone },
    { id: 'service', label: t('booking.service'), icon: Sparkles },
    { id: 'meeting', label: t('booking.meeting'), icon: CalendarCheck },
  ]
  const slots: { id: string; label: string }[] = [
    { id: 'morning', label: t('booking.morning') },
    { id: 'afternoon', label: t('booking.afternoon') },
    { id: 'evening', label: t('booking.evening') },
  ]

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!name || !email || !consent || (objet === 'service' && !service)) {
      setError(true)
      return
    }
    setError(false)
    const objetLabel = objets.find((o) => o.id === objet)?.label ?? ''
    const slotLabel = slots.find((s) => s.id === slot)?.label ?? ''
    const lines = [
      `${t('booking.object')}: ${objetLabel}`,
      objet === 'service' ? `${t('price.book')}: ${service}` : '',
      date ? `${t('booking.date')}: ${date}` : '',
      `${t('booking.slot')}: ${slotLabel}`,
      `${t('booking.name')}: ${name}`,
      `${t('booking.email')}: ${email}`,
      '',
      message ? `${t('booking.message')}:\n${message}` : '',
    ].filter(Boolean)
    const subject = `[${objetLabel}] ${name}${service ? ` — ${service}` : ''}`
    window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(lines.join('\n'))}`
    setSent(true)
  }

  const field =
    'w-full rounded-2xl border border-rose/15 bg-white/70 px-4 py-2.5 text-sm text-ink outline-none transition-colors placeholder:text-plum/40 focus:border-rose/45 focus:bg-white'

  return (
    <form onSubmit={submit} className="space-y-5">
      <div>
        <span className="eyebrow text-rose/80">
          <CalendarCheck className="h-3.5 w-3.5" /> {t('booking.eyebrow')}
        </span>
        <h3 className="mt-2 font-display text-2xl font-semibold text-ink">{t('booking.title')}</h3>
      </div>

      {/* Objet — segmented */}
      <div>
        <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-plum/60">
          {t('booking.object')}
        </label>
        <div className="grid grid-cols-3 gap-2">
          {objets.map((o) => {
            const active = objet === o.id
            return (
              <button
                type="button"
                key={o.id}
                onClick={() => setObjet(o.id)}
                className={`flex flex-col items-center gap-1.5 rounded-2xl border px-2 py-3 text-center text-[11px] font-semibold leading-tight transition-all ${
                  active
                    ? 'border-transparent bg-gradient-to-br from-rose to-peach text-white shadow-soft'
                    : 'border-rose/15 bg-white/55 text-plum/80 hover:border-rose/40 hover:text-ink'
                }`}
              >
                <o.icon className="h-4 w-4" />
                {o.label}
              </button>
            )
          })}
        </div>
      </div>

      {objet === 'service' && (
        <div>
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-plum/60">
            {t('price.book')}
          </label>
          <select value={service} onChange={(e) => setService(e.target.value)} className={field}>
            <option value="">{t('booking.pickService')}</option>
            {services.map((s) => (
              <option key={s.id} value={s.title[lang]}>
                {s.title[lang]}
              </option>
            ))}
          </select>
        </div>
      )}

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-plum/60">
            {t('booking.date')}
          </label>
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className={field} />
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-plum/60">
            {t('booking.slot')}
          </label>
          <select value={slot} onChange={(e) => setSlot(e.target.value)} className={field}>
            {slots.map((s) => (
              <option key={s.id} value={s.id}>
                {s.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <input
          placeholder={t('booking.name')}
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={field}
        />
        <input
          type="email"
          placeholder={t('booking.email')}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={field}
        />
      </div>

      <textarea
        placeholder={t('booking.message')}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        rows={3}
        className={`${field} resize-none`}
      />

      <label className="flex cursor-pointer items-start gap-2.5 text-xs leading-relaxed text-plum/75">
        <span
          className={`mt-0.5 flex shrink-0 items-center justify-center rounded-md border transition-colors ${
            consent ? 'border-transparent bg-rose text-white' : 'border-rose/30 bg-white/70'
          }`}
          style={{ height: '1.1rem', width: '1.1rem' }}
        >
          {consent && <Check className="h-3 w-3" />}
        </span>
        <input
          type="checkbox"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          className="sr-only"
        />
        {t('booking.consent')}
      </label>

      {error && <p className="text-xs font-semibold text-rose">{t('booking.required')}</p>}
      {sent && (
        <p className="flex items-center gap-1.5 text-xs font-semibold text-teal">
          <Check className="h-3.5 w-3.5" /> {t('booking.sent')}
        </p>
      )}

      <button
        type="submit"
        className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-rose via-peach to-gold px-7 py-3.5 text-sm font-semibold text-white shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-petal"
      >
        <CalendarCheck className="h-4 w-4 transition-transform group-hover:-rotate-6" />
        {t('booking.send')}
      </button>

      <p className="flex items-center justify-center gap-1.5 text-center text-[11px] text-plum/55">
        <ShieldCheck className="h-3.5 w-3.5 text-teal" />
        {t('booking.privacy')}
      </p>
    </form>
  )
}

/** Section finale fusionnée : Contact + Réservation, en bas de page. */
export default function BookingSection() {
  const { t } = useI18n()
  return (
    <section id="contact" className="relative px-6 py-12 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-white/60 shadow-petal">
          {/* fond dégradé bijou */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-rose/90 via-peach/85 to-gold/80" />
          <div
            aria-hidden
            className="pointer-events-none absolute -right-16 -top-20 h-72 w-72 rounded-full bg-white/20 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-24 -left-10 h-72 w-72 rounded-full bg-lilac/30 blur-3xl"
          />

          <div className="grid gap-8 p-7 sm:p-10 lg:grid-cols-[1fr_1.05fr] lg:gap-12">
            {/* Gauche : contact */}
            <div className="flex flex-col justify-center text-white">
              <span className="mb-4 flex items-center gap-3">
                <span className="h-px w-10 bg-white/60" />
                <span className="font-mono text-xs font-medium uppercase tracking-[0.25em] text-white/80">
                  06 · {t('nav.contact')}
                </span>
              </span>

              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/40 bg-white/15 px-3 py-1 font-mono text-xs font-medium backdrop-blur">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-70" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
                </span>
                {t('avail.badge')}
              </span>

              <h2 className="mt-5 font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
                {t('contact.title')}
              </h2>
              <p className="mt-4 max-w-md text-white/85 text-balance">{t('contact.subtitle')}</p>

              {/* email + réseaux */}
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-rose shadow-soft transition-transform duration-300 hover:-translate-y-0.5"
                >
                  <Mail className="h-4 w-4 transition-transform group-hover:-rotate-12" />
                  {t('contact.email')}
                </a>
                {[
                  { href: CONTACT.github, icon: Github, label: 'GitHub' },
                  { href: CONTACT.linkedin, icon: Linkedin, label: 'LinkedIn' },
                ].map(({ href, icon: Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/40 bg-white/15 text-white backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/25"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                ))}
              </div>

              {/* chips dispo */}
              <div className="mt-6 flex flex-wrap gap-2.5">
                {[
                  { icon: Phone, label: t('booking.call') },
                  { icon: Sparkles, label: t('booking.service') },
                  { icon: Clock, label: t('avail.reply') },
                ].map((p) => (
                  <span
                    key={p.label}
                    className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1.5 text-xs font-medium text-white backdrop-blur"
                  >
                    <p.icon className="h-3.5 w-3.5" /> {p.label}
                  </span>
                ))}
              </div>
            </div>

            {/* Droite : formulaire de réservation */}
            <div className="card-atelier rounded-[1.75rem] p-6 sm:p-7">
              <BookingForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
