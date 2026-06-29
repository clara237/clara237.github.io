import { motion } from 'framer-motion'
import { Boxes, Brain, Code2, Database, Layers, Server, ShieldCheck } from 'lucide-react'
import { skillGroups } from '../data/skills'
import { getTechIcon, getTechColor } from '../data/techIcons'
import { useI18n } from '../i18n'
import { SectionTitle } from './About'

const ease = [0.22, 1, 0.36, 1] as const
const marquee = skillGroups.flatMap((g) => g.skills).filter((_, i) => i % 2 === 0)

// icône + dégradé + numéro par catégorie (ordre = data/skills.ts)
const groupMeta = [
  { icon: Code2, grad: 'from-rose to-peach' },
  { icon: Layers, grad: 'from-peach to-gold' },
  { icon: Server, grad: 'from-gold to-lilac' },
  { icon: Database, grad: 'from-lilac to-rose' },
  { icon: Brain, grad: 'from-rose to-gold' },
  { icon: ShieldCheck, grad: 'from-teal to-lilac' },
  { icon: Boxes, grad: 'from-peach to-rose' },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
}
const rowAnim = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
}

export default function Skills() {
  const { t, lang } = useI18n()
  return (
    <section id="skills" className="py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle index="03">{t('skills.title')}</SectionTitle>
        <p className="mt-4 max-w-2xl text-lg text-plum/75">{t('skills.subtitle')}</p>
      </div>

      {/* bandeau défilant avec logos */}
      <div className="group relative my-9 overflow-hidden py-2 [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
        <div className="flex w-max animate-marquee gap-3 group-hover:[animation-play-state:paused]">
          {[...marquee, ...marquee].map((s, i) => {
            const Icon = getTechIcon(s)
            return (
              <span
                key={i}
                className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-rose/15 bg-white/65 px-4 py-2 font-display text-base font-medium text-plum backdrop-blur"
              >
                <Icon className="h-4 w-4" style={{ color: getTechColor(s) }} />
                {s}
              </span>
            )
          })}
        </div>
      </div>

      {/* Disposition éditoriale : une rangée par catégorie, séparateurs fins */}
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="overflow-hidden rounded-[2rem] border border-white/60 bg-white/40 backdrop-blur-xl"
        >
          {skillGroups.map((group, i) => {
            const meta = groupMeta[i % groupMeta.length]
            const Icon = meta.icon
            return (
              <motion.div
                key={group.title.en}
                variants={rowAnim}
                className="group relative grid gap-x-6 gap-y-4 border-t border-rose/10 px-6 py-6 transition-colors duration-300 first:border-t-0 hover:bg-white/55 md:grid-cols-[230px_1fr] md:items-center md:px-8"
              >
                {/* barre d'accent qui grandit au survol */}
                <span
                  aria-hidden
                  className={`absolute left-0 top-0 h-full w-1 origin-top scale-y-0 bg-gradient-to-b ${meta.grad} transition-transform duration-300 group-hover:scale-y-100`}
                />

                {/* libellé de catégorie */}
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-rose/50">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span
                    className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${meta.grad} text-white shadow-soft transition-transform duration-300 group-hover:rotate-[-8deg] group-hover:scale-105`}
                  >
                    <Icon style={{ height: '1.1rem', width: '1.1rem' }} />
                  </span>
                  <h3 className="font-display text-lg font-semibold text-ink">{group.title[lang]}</h3>
                </div>

                {/* chips technos */}
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((s) => {
                    const TechIcon = getTechIcon(s)
                    return (
                      <span
                        key={s}
                        className="inline-flex items-center gap-1.5 rounded-full border border-rose/12 bg-white/70 px-3 py-1.5 text-sm text-plum transition-all duration-200 hover:-translate-y-0.5 hover:border-rose/40 hover:bg-white hover:text-ink hover:shadow-soft"
                      >
                        <TechIcon className="h-4 w-4" style={{ color: getTechColor(s) }} />
                        {s}
                      </span>
                    )
                  })}
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
