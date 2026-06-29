import { motion } from 'framer-motion'
import { Code2, ShieldCheck, Sparkles } from 'lucide-react'
import { useI18n } from '../i18n'

const pillars = [
  {
    icon: Code2,
    label: { fr: 'Full-Stack', en: 'Full-Stack', it: 'Full-Stack' },
    desc: {
      fr: 'Du backend Django / Node aux interfaces React soignées.',
      en: 'From Django / Node backends to polished React interfaces.',
      it: 'Dai backend Django / Node a interfacce React curate.',
    },
    grad: 'from-rose to-peach',
  },
  {
    icon: Sparkles,
    label: { fr: 'IA / LLM', en: 'AI / LLM', it: 'IA / LLM' },
    desc: {
      fr: 'Assistants, RAG et intégrations IA sur mesure.',
      en: 'Assistants, RAG and tailor-made AI integrations.',
      it: 'Assistenti, RAG e integrazioni IA su misura.',
    },
    grad: 'from-peach to-gold',
  },
  {
    icon: ShieldCheck,
    label: { fr: 'Cybersécurité', en: 'Security', it: 'Sicurezza' },
    desc: {
      fr: "Audit, pentest et détection d'anomalies réseau.",
      en: 'Audit, pentesting and network anomaly detection.',
      it: 'Audit, pentest e rilevamento di anomalie di rete.',
    },
    grad: 'from-teal to-lilac',
  },
]

const ease = [0.22, 1, 0.36, 1] as const

export function SectionTitle({
  index,
  eyebrow,
  children,
}: {
  index: string
  eyebrow?: string
  children: React.ReactNode
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease }}
    >
      <span className="mb-3 flex items-center gap-3">
        <span className="h-px w-10 bg-gradient-to-r from-rose to-gold" />
        <span className="font-mono text-xs font-medium uppercase tracking-[0.25em] text-rose/80">
          {index}
          {eyebrow ? ` · ${eyebrow}` : ''}
        </span>
      </span>
      <h2 className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
        {children}
      </h2>
    </motion.div>
  )
}

export default function About() {
  const { t, lang } = useI18n()
  return (
    <section id="about" className="px-6 py-12 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <SectionTitle index="01">{t('about.title')}</SectionTitle>

        <div className="mt-10 grid gap-12 md:grid-cols-[1.4fr_1fr]">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease }}
            className="space-y-5 text-lg leading-relaxed text-plum/80"
          >
            <p className="first-letter:float-left first-letter:mr-3 first-letter:font-display first-letter:text-6xl first-letter:font-semibold first-letter:leading-[0.8] first-letter:text-rose">
              {t('about.p1')}
            </p>
            <p>{t('about.p2')}</p>
            <p>{t('about.p3')}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease }}
            className="flex h-full flex-col justify-between gap-3.5"
          >
            {pillars.map((p) => (
              <div
                key={p.label.en}
                className="group card-atelier ring-conic flex flex-1 items-center gap-4 rounded-3xl p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-petal"
              >
                <div
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${p.grad} text-white shadow-soft transition-transform duration-300 group-hover:rotate-[-8deg]`}
                >
                  <p.icon className="h-5 w-5" />
                </div>
                <div>
                  <span className="font-display text-lg font-semibold text-ink">{p.label[lang]}</span>
                  <p className="mt-0.5 text-sm leading-snug text-plum/70">{p.desc[lang]}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
