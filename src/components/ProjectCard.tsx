import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ArrowUpRight, ImageIcon } from 'lucide-react'
import { type Project, statusLabels } from '../data/projects'
import { useI18n } from '../i18n'

const statusStyle: Record<Project['status'], string> = {
  live: 'bg-emerald-100/80 text-emerald-700 border-emerald-300/60',
  wip: 'bg-amber-100/80 text-amber-700 border-amber-300/60',
  done: 'bg-sky-100/80 text-sky-700 border-sky-300/60',
}

export default function ProjectCard({
  project,
  onOpen,
}: {
  project: Project
  onOpen: (p: Project) => void
}) {
  const { t, lang } = useI18n()
  const cover = project.screenshots[0]

  // mouse-tracked 3D tilt
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [7, -7]), { stiffness: 200, damping: 18 })
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-7, 7]), { stiffness: 200, damping: 18 })

  const onMove = (e: React.MouseEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect()
    mx.set((e.clientX - r.left) / r.width - 0.5)
    my.set((e.clientY - r.top) / r.height - 0.5)
  }
  const reset = () => {
    mx.set(0)
    my.set(0)
  }

  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.95, y: 16 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={onMove}
      onMouseLeave={reset}
      onClick={() => onOpen(project)}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 1000 }}
      className="group glass sheen relative flex cursor-pointer flex-col overflow-hidden rounded-[1.75rem] transition-shadow duration-300 hover:shadow-petal"
    >
      {/* Cover */}
      <div className="relative h-44 w-full overflow-hidden">
        {cover ? (
          <img
            src={cover.src}
            alt={cover.caption[lang]}
            loading="lazy"
            className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
          />
        ) : (
          <div className={`flex h-full w-full items-center justify-center bg-gradient-to-br ${project.accent}`}>
            <span className="font-display text-2xl font-semibold tracking-tight text-white/95">
              {project.name}
            </span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-white/85 via-white/10 to-transparent" />
        <span
          className={`absolute right-3 top-3 rounded-full border px-2.5 py-1 text-[11px] font-semibold backdrop-blur ${statusStyle[project.status]}`}
        >
          {statusLabels[project.status][lang]}
        </span>
        {cover && (
          <span className="absolute bottom-3 left-3 inline-flex items-center gap-1 rounded-full bg-white/70 px-2 py-1 text-[11px] font-medium text-plum backdrop-blur">
            <ImageIcon className="h-3 w-3" />
            {project.screenshots.length}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-display text-xl font-semibold text-ink">{project.name}</h3>
          <span className="font-mono text-xs text-plum/50">{project.year}</span>
        </div>

        <p className="mt-1.5 text-sm font-semibold text-pink">{project.tagline[lang]}</p>
        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-plum/70">
          {project.description[lang]}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.stack.slice(0, 5).map((s) => (
            <span
              key={s}
              className="rounded-lg border border-pink/15 bg-pink/5 px-2 py-1 font-mono text-[11px] text-plum"
            >
              {s}
            </span>
          ))}
          {project.stack.length > 5 && (
            <span className="rounded-lg bg-lilac/10 px-2 py-1 font-mono text-[11px] text-plum/70">
              +{project.stack.length - 5}
            </span>
          )}
        </div>

        <div className="mt-5 flex items-center gap-1 pt-1 text-sm font-semibold text-pink transition-colors group-hover:text-rose">
          {t('card.more')}
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>
    </motion.article>
  )
}
