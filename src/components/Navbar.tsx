import { useEffect, useState } from 'react'
import { CalendarCheck } from 'lucide-react'
import { useI18n, LANGS } from '../i18n'
import { useBooking } from './Booking'

const links = [
  { id: 'about', key: 'nav.about' },
  { id: 'projects', key: 'nav.projects' },
  { id: 'skills', key: 'nav.skills' },
  { id: 'services', key: 'nav.services' },
  { id: 'journey', key: 'nav.journey' },
  { id: 'contact', key: 'nav.contact' },
] as const

export default function Navbar() {
  const { t, lang, setLang } = useI18n()
  const { open } = useBooking()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass py-3 shadow-soft' : 'bg-transparent py-5'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6">
        <a href="#hero" className="group flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-br from-rose via-pink to-lilac font-display text-base font-semibold text-white shadow-soft transition-transform duration-300 group-hover:rotate-[-8deg]">
            C
          </span>
          <span className="font-display text-lg font-semibold tracking-tight text-ink">
            Clara <span className="gradient-text">Isabelle</span>
          </span>
        </a>

        <div className="flex items-center gap-1 sm:gap-2">
          <ul className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  className="link-underline rounded-full px-4 py-2 text-sm font-medium text-plum/80 transition-colors hover:text-ink"
                >
                  {t(l.key)}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="/cv.html"
            className="hidden rounded-full border border-rose/30 bg-white/55 px-4 py-2 text-sm font-semibold text-plum backdrop-blur transition-all hover:border-rose/55 hover:text-ink sm:inline-block"
          >
            CV
          </a>
          <button
            onClick={() => open()}
            className="hidden items-center gap-1.5 rounded-full bg-gradient-to-r from-rose to-peach px-4 py-2 text-sm font-semibold text-white shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-petal sm:inline-flex"
          >
            <CalendarCheck className="h-4 w-4" />
            {t('nav.booking')}
          </button>
          <div
            className="ml-1 flex items-center gap-0.5 rounded-full border border-pink/30 bg-white/60 p-0.5 backdrop-blur"
            role="group"
            aria-label="Langue / Language / Lingua"
          >
            {LANGS.map((l) => (
              <button
                key={l.code}
                onClick={() => setLang(l.code)}
                className={`rounded-full px-2.5 py-1 text-xs font-semibold transition-all ${
                  lang === l.code
                    ? 'bg-gradient-to-r from-rose to-pink text-white shadow-soft'
                    : 'text-plum/70 hover:text-ink'
                }`}
                aria-pressed={lang === l.code}
              >
                {l.label}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </header>
  )
}
