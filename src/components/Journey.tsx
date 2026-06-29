import { motion } from 'framer-motion'
import {
  Award,
  BookOpen,
  Briefcase,
  ExternalLink,
  FileText,
  GraduationCap,
  Languages as LangIcon,
} from 'lucide-react'
import { useI18n } from '../i18n'
import { SectionTitle } from './About'
import { experience, education, languages, certifications, trainings } from '../data/cv'
import type { Lang } from '../i18n'

const ease = [0.22, 1, 0.36, 1] as const

const container = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } }
const item = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease } },
}

function PanelHead({ icon: Icon, children }: { icon: typeof Briefcase; children: React.ReactNode }) {
  return (
    <h3 className="flex items-center gap-2 font-display text-[13px] font-semibold uppercase tracking-[0.12em] text-ink">
      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-rose/10 text-rose">
        <Icon className="h-3.5 w-3.5" />
      </span>
      {children}
    </h3>
  )
}

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.5, delay, ease },
})

function TimelineCol({ items, lang }: { items: typeof experience; lang: Lang }) {
  return (
    <motion.ol
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-80px' }}
      className="relative ml-1"
    >
      <span
        aria-hidden
        className="absolute left-[7px] top-1.5 bottom-3 w-[2px] rounded bg-gradient-to-b from-rose via-peach to-gold"
      />
      {items.map((e) => (
        <motion.li key={e.role.en + e.company} variants={item} className="group relative mb-6 pl-9 last:mb-0">
          <span className="absolute left-0 top-1.5 flex h-4 w-4 items-center justify-center">
            <span className="absolute h-4 w-4 rounded-full bg-rose/25 transition-transform duration-300 group-hover:scale-150" />
            <span className="relative h-2.5 w-2.5 rounded-full bg-gradient-to-br from-rose to-peach ring-4 ring-blush" />
          </span>
          <div className="rounded-2xl px-3.5 py-2.5 transition-colors duration-300 hover:bg-white/55">
            <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
              <h4 className="font-display text-[15px] font-semibold text-ink">{e.role[lang]}</h4>
              <span className="rounded-full border border-rose/15 bg-white/60 px-2.5 py-0.5 font-mono text-[11px] text-plum/70">
                {e.period[lang]}
              </span>
            </div>
            <p className="mt-0.5 text-sm font-semibold text-rose">
              {e.company} · {e.place[lang]}
            </p>
            <ul className="mt-2 space-y-1.5">
              {e.points[lang].map((p) => (
                <li key={p} className="flex gap-2.5 text-sm leading-relaxed text-plum/75">
                  <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br from-rose to-peach" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </motion.li>
      ))}
    </motion.ol>
  )
}

export default function Journey() {
  const { t, lang } = useI18n()
  const mid = Math.ceil(experience.length / 2)
  return (
    <section id="journey" className="px-6 py-12 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <SectionTitle index="05">{t('journey.title')}</SectionTitle>
        <p className="mt-4 max-w-2xl text-lg text-plum/75">{t('journey.subtitle')}</p>

        {/* ── Expérience sur 2 colonnes (compact) ── */}
        <h3 className="mb-6 mt-9 flex items-center gap-2.5 font-display text-xl font-semibold text-ink">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-rose to-peach text-white shadow-soft">
            <Briefcase style={{ height: '1.1rem', width: '1.1rem' }} />
          </span>
          {t('journey.experience')}
        </h3>
        <div className="grid gap-x-10 gap-y-2 md:grid-cols-2">
          <TimelineCol items={experience.slice(0, mid)} lang={lang} />
          <TimelineCol items={experience.slice(mid)} lang={lang} />
        </div>

        {/* ── Repères : bloc éditorial ouvert (sans carte) ── */}
        <motion.div
          {...fade(0.05)}
          className="mt-12 border-t border-rose/15 pt-10"
        >
          <div className="grid gap-x-10 gap-y-9 lg:grid-cols-12">
            {/* Formation — colonne large */}
            <div className="lg:col-span-5">
              <PanelHead icon={GraduationCap}>{t('journey.education')}</PanelHead>
              <ol className="relative mt-5 space-y-4">
                <span
                  aria-hidden
                  className="absolute left-[5px] top-2 bottom-2 w-px bg-gradient-to-b from-rose/40 via-peach/40 to-gold/30"
                />
                {education.map((ed) => (
                  <li key={ed.degree.en} className="group relative pl-6">
                    <span className="absolute left-0 top-[5px] h-2.5 w-2.5 rounded-full bg-gradient-to-br from-rose to-peach ring-2 ring-blush transition-transform duration-300 group-hover:scale-125" />
                    <h4 className="font-display text-sm font-semibold leading-snug text-ink">{ed.degree[lang]}</h4>
                    <p className="text-xs text-plum/75">{ed.school[lang]}</p>
                    <p className="font-mono text-[11px] text-plum/55">
                      {ed.period}
                      {ed.note ? ` · ${ed.note[lang]}` : ''}
                    </p>
                  </li>
                ))}
              </ol>
            </div>

            {/* Langues + Certifications */}
            <div className="space-y-7 lg:col-span-3 lg:border-l lg:border-rose/10 lg:pl-9">
              <div>
                <PanelHead icon={LangIcon}>{t('journey.languages')}</PanelHead>
                <ul className="mt-4 space-y-2.5">
                  {languages.map((l) => (
                    <li key={l.name.en} className="flex items-baseline justify-between gap-2">
                      <span className="font-display text-sm font-semibold text-ink">{l.name[lang]}</span>
                      <span className="text-right text-[11px] leading-tight text-plum/65">{l.level[lang]}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <PanelHead icon={Award}>{t('journey.certifications')}</PanelHead>
                <div className="mt-4 space-y-3">
                  {certifications.map((c) => (
                    <div key={c.name}>
                      <h4 className="font-display text-sm font-semibold leading-snug text-ink">{c.name}</h4>
                      <p className="text-xs text-plum/75">
                        {c.level[lang]} · {c.year}
                      </p>
                      {c.link && (
                        <a
                          href={c.link}
                          target="_blank"
                          rel="noreferrer"
                          className="text-[11px] font-medium text-rose transition-colors hover:text-peach"
                        >
                          ↗ {c.issuer[lang]}
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Formations en ligne */}
            <div className="lg:col-span-4 lg:border-l lg:border-rose/10 lg:pl-9">
              <PanelHead icon={BookOpen}>{t('journey.trainings')}</PanelHead>
              <div className="mt-4 space-y-3.5">
                {trainings.map((tr) => (
                  <div key={tr.name.en} className="border-l-2 border-rose/15 pl-3">
                    <h4 className="font-display text-sm font-semibold leading-snug text-ink">{tr.name[lang]}</h4>
                    {tr.link ? (
                      <a
                        href={tr.link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-[11px] font-medium text-rose transition-colors hover:text-peach"
                      >
                        <ExternalLink className="h-3 w-3" />
                        {tr.issuer}
                      </a>
                    ) : (
                      <p className="text-[11px] font-medium text-plum/70">{tr.issuer}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <div className="mt-8 flex justify-center">
          <a
            href="/cv.html"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-rose via-peach to-gold px-7 py-3.5 text-sm font-semibold text-white shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-petal"
          >
            <FileText className="h-4 w-4 transition-transform group-hover:-rotate-6" />
            {t('cv.download')}
          </a>
        </div>
      </div>
    </section>
  )
}
