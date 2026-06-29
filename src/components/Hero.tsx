import { motion } from 'framer-motion'
import { ArrowDown, CalendarCheck, Sparkles } from 'lucide-react'
import { useI18n } from '../i18n'
import { useBooking } from './Booking'

const ease = [0.22, 1, 0.36, 1] as const
const rise = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease },
})

export default function Hero() {
  const { t } = useI18n()
  const { open } = useBooking()
  return (
    <section id="hero" className="relative flex min-h-screen items-center px-6 pt-28">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.2fr_1fr]">
        {/* ── Left: text ── */}
        <div>
          <motion.p
            {...rise(0)}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-rose/25 bg-white/60 px-4 py-1.5 font-mono text-xs font-medium text-plum backdrop-blur"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-teal" />
            </span>
            {t('hero.role')}
          </motion.p>

          <motion.h1
            {...rise(0.1)}
            className="font-display text-6xl font-semibold leading-[1.02] tracking-tight text-ink sm:text-7xl"
          >
            Clara
            <br />
            <span className="relative inline-block">
              <span className="gradient-text">Isabelle</span>
              {/* hand-drawn underline */}
              <svg
                className="absolute -bottom-3 left-0 w-full"
                viewBox="0 0 300 18"
                fill="none"
                preserveAspectRatio="none"
                aria-hidden
              >
                <motion.path
                  d="M3 12C60 5 130 4 180 7c45 3 90 4 117 1"
                  stroke="url(#g)"
                  strokeWidth="4"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 0.7, ease }}
                />
                <defs>
                  <linearGradient id="g" x1="0" y1="0" x2="300" y2="0" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#9d3b5b" />
                    <stop offset="0.5" stopColor="#cf7a4e" />
                    <stop offset="1" stopColor="#c79a52" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </motion.h1>

          <motion.p
            {...rise(0.25)}
            className="mt-8 max-w-xl text-lg leading-relaxed text-plum/80 text-balance"
          >
            {t('hero.intro')}
          </motion.p>

          <motion.div {...rise(0.35)} className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-rose via-peach to-gold px-7 py-3.5 text-sm font-semibold text-white shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-petal"
            >
              {t('hero.cta.projects')}
              <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            </a>
            <button
              onClick={() => open()}
              className="inline-flex items-center gap-2 rounded-full border border-rose/35 bg-white/50 px-7 py-3.5 text-sm font-semibold text-plum backdrop-blur transition-all hover:border-rose/60 hover:text-ink hover:shadow-soft"
            >
              <CalendarCheck className="h-4 w-4" />
              {t('booking.cta')}
            </button>
          </motion.div>
        </div>

        {/* ── Right: photo portrait encadrée ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3, ease }}
          className="relative mx-auto hidden aspect-[4/5] w-full max-w-sm lg:block"
        >
          {/* halo dégradé derrière */}
          <div className="absolute -inset-6 -z-10 rounded-[3rem] bg-gradient-to-br from-rose/35 via-peach/30 to-gold/30 blur-2xl" />

          {/* anneaux qui tournent */}
          <div
            className="absolute -inset-3 rounded-[2.8rem] border-2 border-dashed border-rose/25"
            style={{ animation: 'spin-slow 40s linear infinite' }}
          />
          <div
            className="absolute -inset-1 rounded-[2.6rem] border border-gold/35"
            style={{ animation: 'spin-slow 28s linear infinite reverse' }}
          />

          {/* photo */}
          <div className="ring-conic group relative h-full w-full overflow-hidden rounded-[2.4rem] shadow-petal">
            <img
              src="/clara.jpeg"
              alt="Clara Isabelle"
              className="h-full w-full object-cover object-top"
            />
            {/* voile dégradé bas pour la lisibilité du badge */}
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink/55 to-transparent" />
            {/* badge dispo flottant */}
            <div className="absolute inset-x-4 bottom-4 flex items-center justify-between gap-2 rounded-2xl border border-white/30 bg-white/15 px-3.5 py-2.5 backdrop-blur-md">
              <span className="inline-flex items-center gap-2 text-xs font-semibold text-white">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300 opacity-80" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-300" />
                </span>
                {t('avail.badge')}
              </span>
            </div>
          </div>

          {/* sparkles dorées */}
          {[
            { top: '-4%', left: '10%', d: '0s', s: 'h-6 w-6' },
            { top: '8%', right: '-4%', d: '1s', s: 'h-7 w-7' },
            { bottom: '18%', left: '-5%', d: '0.6s', s: 'h-6 w-6' },
          ].map((p, i) => (
            <Sparkles
              key={i}
              className={`absolute ${p.s} animate-sparkle text-gold`}
              style={{ ...p, animationDelay: p.d } as React.CSSProperties}
              aria-hidden
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
