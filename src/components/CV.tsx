import { motion } from 'framer-motion'
import {
  Mail, Phone, MapPin, Github, Linkedin, Printer, ArrowLeft,
  Sparkles, Briefcase, GraduationCap, FolderGit2, Languages as LangIcon, Heart, Star, Award,
} from 'lucide-react'
import { useI18n, LANGS } from '../i18n'
import {
  profile, skillGroups, experience, projects, education, languages, certifications, interests,
} from '../data/cv'

const ease = [0.22, 1, 0.36, 1] as const

function Heading({ icon: Icon, children }: { icon: typeof Mail; children: React.ReactNode }) {
  return (
    <h2 className="mb-3 flex items-center gap-2 font-display text-lg font-semibold text-ink">
      <span className="flex h-7 w-7 items-center justify-center rounded-xl bg-gradient-to-br from-rose to-pink text-white">
        <Icon className="h-4 w-4" />
      </span>
      {children}
    </h2>
  )
}

function SideHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mb-2.5 flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-wider text-pink">
      <span className="h-2 w-2 rounded-full bg-gradient-to-br from-rose to-lilac" />
      {children}
    </h3>
  )
}

export default function CV() {
  const { t, lang, setLang } = useI18n()

  return (
    <div className="relative min-h-screen overflow-x-hidden py-8 print:py-0">
      {/* dreamy blobs (screen only) */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden print:hidden">
        <div className="absolute -top-40 -left-32 h-[34rem] w-[34rem] rounded-full bg-petal/50 blur-[120px] animate-floaty" />
        <div className="absolute bottom-0 right-0 h-[30rem] w-[30rem] rounded-full bg-lilac/25 blur-[120px] animate-floaty" style={{ animationDelay: '-8s' }} />
      </div>

      {/* floating actions (hidden when printing) */}
      <div className="fixed right-5 top-5 z-50 flex flex-wrap items-center justify-end gap-2 print:hidden">
        <div className="flex items-center gap-0.5 rounded-full border border-pink/30 bg-white/70 p-0.5 backdrop-blur">
          {LANGS.map((l) => (
            <button
              key={l.code}
              onClick={() => setLang(l.code)}
              className={`rounded-full px-2.5 py-1 text-xs font-semibold transition-all ${
                lang === l.code ? 'bg-gradient-to-r from-rose to-pink text-white shadow-soft' : 'text-plum/70 hover:text-ink'
              }`}
              aria-pressed={lang === l.code}
            >
              {l.label}
            </button>
          ))}
        </div>
        <a
          href="/"
          className="flex items-center gap-1.5 rounded-full border border-pink/30 bg-white/70 px-4 py-2 text-sm font-medium text-plum backdrop-blur transition-all hover:border-pink/60 hover:text-ink hover:shadow-soft"
        >
          <ArrowLeft className="h-4 w-4" />
          Portfolio
        </a>
        <button
          onClick={() => window.print()}
          className="flex items-center gap-1.5 rounded-full bg-gradient-to-r from-rose via-pink to-lilac px-4 py-2 text-sm font-semibold text-white shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-petal"
        >
          <Printer className="h-4 w-4" />
          {t('cv.print')}
        </button>
      </div>

      {/* A4 sheet */}
      <motion.main
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease }}
        className="above-grain mx-auto w-full max-w-[860px] overflow-hidden rounded-[1.75rem] bg-white/80 shadow-petal backdrop-blur-xl print:max-w-none print:rounded-none print:bg-white print:shadow-none"
      >
        {/* ── Header band ── */}
        <header className="relative overflow-hidden bg-gradient-to-br from-rose via-pink to-lilac px-8 py-9 text-white print:[print-color-adjust:exact]">
          <div aria-hidden className="absolute -right-10 -top-12 h-44 w-44 rounded-full bg-white/20 blur-2xl" />
          <Sparkles aria-hidden className="absolute right-8 top-7 h-7 w-7 animate-sparkle text-white/80 print:hidden" />
          <div className="relative flex flex-wrap items-center gap-6">
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-3xl bg-white/20 font-display text-4xl font-semibold backdrop-blur">
              CI
            </div>
            <div>
              <h1 className="font-display text-3xl font-semibold leading-tight sm:text-4xl">{profile.name}</h1>
              <p className="mt-1.5 font-medium text-white/95">{profile.title[lang]}</p>
            </div>
          </div>
          <div className="relative mt-6 flex flex-wrap gap-x-6 gap-y-1.5 text-sm text-white/95">
            <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-1.5 hover:underline">
              <Mail className="h-4 w-4" /> {profile.email}
            </a>
            <span className="inline-flex items-center gap-1.5"><Phone className="h-4 w-4" /> {profile.phone}</span>
            <span className="inline-flex items-center gap-1.5"><MapPin className="h-4 w-4" /> {profile.location[lang]}</span>
            <a href={profile.githubUrl} className="inline-flex items-center gap-1.5 hover:underline"><Github className="h-4 w-4" /> {profile.github}</a>
            <a href={profile.linkedinUrl} className="inline-flex items-center gap-1.5 hover:underline"><Linkedin className="h-4 w-4" /> {profile.linkedin}</a>
          </div>
        </header>

        {/* ── Body: two columns ── */}
        <div className="grid gap-8 px-8 py-8 md:grid-cols-[1fr_1.7fr]">
          {/* Sidebar */}
          <aside className="space-y-7">
            <p className="text-[13.5px] leading-relaxed text-plum/80">{profile.pitch[lang]}</p>

            <section>
              {skillGroups.map((g) => (
                <div key={g.title.en} className="mb-4">
                  <SideHeading>{g.title[lang]}</SideHeading>
                  <div className="flex flex-wrap gap-1.5">
                    {g.skills.map((s) => (
                      <span
                        key={s}
                        className="rounded-lg border border-pink/15 bg-pink/5 px-2 py-0.5 text-[12px] text-plum print:[print-color-adjust:exact]"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </section>

            <section>
              <SideHeading>{t('journey.languages')}</SideHeading>
              <ul className="space-y-1.5">
                {languages.map((l) => (
                  <li key={l.name.en} className="text-[13px] text-plum/85">
                    <span className="font-semibold text-ink">{l.name[lang]}</span> — {l.level[lang]}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <SideHeading>{t('journey.interests')}</SideHeading>
              <div className="flex flex-wrap gap-1.5">
                {interests[lang].map((i) => (
                  <span key={i} className="inline-flex items-center gap-1 rounded-full bg-lilac/10 px-2.5 py-0.5 text-[12px] text-plum">
                    <Heart className="h-3 w-3 text-rose" /> {i}
                  </span>
                ))}
              </div>
            </section>
          </aside>

          {/* Main column */}
          <div className="space-y-8">
            <section>
              <Heading icon={Briefcase}>{t('journey.experience')}</Heading>
              <div className="space-y-5 border-l-2 border-pink/20 pl-5">
                {experience.map((e) => (
                  <div key={e.role.en + e.company} className="relative">
                    <span className="absolute -left-[27px] top-1.5 h-3 w-3 rounded-full bg-gradient-to-br from-rose to-pink ring-4 ring-white print:[print-color-adjust:exact]" />
                    <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                      <h3 className="font-display text-[15px] font-semibold text-ink">{e.role[lang]}</h3>
                      <span className="font-mono text-[11px] text-plum/60">{e.period[lang]}</span>
                    </div>
                    <p className="text-[13px] font-medium text-pink">{e.company} · {e.place[lang]}</p>
                    <ul className="mt-1.5 space-y-1">
                      {e.points[lang].map((p) => (
                        <li key={p} className="flex gap-2 text-[13px] leading-relaxed text-plum/80">
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-rose" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <Heading icon={FolderGit2}>{t('cv.projects')}</Heading>
              <div className="grid gap-3 sm:grid-cols-2">
                {projects.map((p) => (
                  <div key={p.name} className="rounded-2xl border border-pink/15 bg-pink/[0.04] p-3.5 print:[print-color-adjust:exact]">
                    <div className="flex items-center gap-2">
                      <h3 className="font-display text-[14px] font-semibold text-ink">{p.name}</h3>
                      {p.tag && (
                        <span className="inline-flex items-center gap-0.5 rounded-full bg-gradient-to-r from-rose to-pink px-2 py-0.5 text-[10px] font-semibold text-white print:[print-color-adjust:exact]">
                          <Star className="h-2.5 w-2.5" /> {p.tag[lang]}
                        </span>
                      )}
                    </div>
                    <p className="mt-1 text-[12.5px] leading-relaxed text-plum/80">{p.desc[lang]}</p>
                    <p className="mt-1.5 font-mono text-[10.5px] text-plum/55">{p.tech}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <Heading icon={Award}>{t('journey.certifications')}</Heading>
              <div className="space-y-2">
                {certifications.map((c) => (
                  <div key={c.name} className="flex flex-wrap items-baseline justify-between gap-x-3">
                    <div>
                      <h3 className="font-display text-[14px] font-semibold text-ink">{c.name}</h3>
                      <p className="text-[13px] text-plum/75">{c.issuer[lang]} · {c.level[lang]}</p>
                    </div>
                    <span className="font-mono text-[11px] text-plum/60">{c.year}</span>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <Heading icon={GraduationCap}>{t('journey.education')}</Heading>
              <div className="space-y-3">
                {education.map((ed) => (
                  <div key={ed.degree.en} className="flex flex-wrap items-baseline justify-between gap-x-3">
                    <div>
                      <h3 className="font-display text-[14px] font-semibold text-ink">{ed.degree[lang]}</h3>
                      <p className="text-[13px] text-plum/75">{ed.school[lang]}{ed.note ? ` · ${ed.note[lang]}` : ''}</p>
                    </div>
                    <span className="font-mono text-[11px] text-plum/60">{ed.period}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>

        <footer className="flex items-center justify-center gap-1.5 border-t border-pink/15 px-8 py-4 text-[11px] text-plum/60 print:hidden">
          <LangIcon className="h-3.5 w-3.5 text-rose" />
          {profile.short} — clarasilatchom@gmail.com
        </footer>
      </motion.main>
    </div>
  )
}
