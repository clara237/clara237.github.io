import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { projects, categoryLabels, type Category, type Project } from '../data/projects'
import { useI18n } from '../i18n'
import ProjectCard from './ProjectCard'
import ProjectModal from './ProjectModal'
import { SectionTitle } from './About'

const filters: Category[] = ['all', 'fullstack', 'ai', 'security', 'saas', 'ecommerce', 'cms']

export default function Projects() {
  const { t, lang } = useI18n()
  const [active, setActive] = useState<Category>('all')
  const [selected, setSelected] = useState<Project | null>(null)

  const visible = useMemo(
    () => (active === 'all' ? projects : projects.filter((p) => p.category.includes(active))),
    [active],
  )

  return (
    <section id="projects" className="px-6 py-12 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <SectionTitle index="02">{t('projects.title')}</SectionTitle>
        <p className="mt-4 max-w-2xl text-lg text-plum/75">{t('projects.subtitle')}</p>

        <div className="mt-9 flex flex-wrap gap-2.5">
          {filters.map((f) => {
            const count =
              f === 'all' ? projects.length : projects.filter((p) => p.category.includes(f)).length
            if (count === 0) return null
            const isActive = active === f
            return (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? 'bg-gradient-to-r from-rose to-pink text-white shadow-soft'
                    : 'border border-pink/25 bg-white/50 text-plum/80 backdrop-blur hover:border-pink/50 hover:text-ink'
                }`}
              >
                {categoryLabels[f][lang]}
                <span className={`ml-1.5 text-xs ${isActive ? 'opacity-80' : 'opacity-50'}`}>
                  {count}
                </span>
              </button>
            )
          })}
        </div>

        <motion.div layout className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visible.map((p) => (
              <ProjectCard key={p.slug} project={p} onOpen={setSelected} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  )
}
