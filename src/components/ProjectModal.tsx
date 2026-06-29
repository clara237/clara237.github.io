import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Github, ExternalLink, Check, ChevronLeft, ChevronRight, ImageOff, ZoomIn } from 'lucide-react'
import { type Project, statusLabels, sourceUrl } from '../data/projects'
import { useI18n } from '../i18n'

const statusStyle: Record<Project['status'], string> = {
  live: 'bg-emerald-100/80 text-emerald-700 border-emerald-300/60',
  wip: 'bg-amber-100/80 text-amber-700 border-amber-300/60',
  done: 'bg-sky-100/80 text-sky-700 border-sky-300/60',
}

type Tab = 'preview' | 'details'

export default function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null
  onClose: () => void
}) {
  const { t, lang } = useI18n()
  const [tab, setTab] = useState<Tab>('preview')
  const [shot, setShot] = useState(0)
  const [zoom, setZoom] = useState(false)

  useEffect(() => {
    if (project) {
      setTab(project.screenshots.length ? 'preview' : 'details')
      setShot(0)
      setZoom(false)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [project])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (zoom) setZoom(false)
        else onClose()
      }
      if (e.key === 'ArrowRight') setShot((s) => Math.min(s + 1, (project?.screenshots.length ?? 1) - 1))
      if (e.key === 'ArrowLeft') setShot((s) => Math.max(s - 1, 0))
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [project, onClose, zoom])

  const current = project?.screenshots[shot]

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          key={project.slug}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-plum/40 p-4 backdrop-blur-md sm:p-8"
        >
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.98 }}
            transition={{ type: 'spring', damping: 26, stiffness: 280 }}
            onClick={(e) => e.stopPropagation()}
            className="relative my-auto w-full max-w-4xl overflow-hidden rounded-[2rem] border border-white/70 bg-cream/95 shadow-petal backdrop-blur-xl"
          >
            <div className={`h-1.5 w-full bg-gradient-to-r ${project.accent}`} />

            {/* Header */}
            <div className="flex items-start justify-between gap-4 px-6 pt-6 sm:px-8">
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <h2 className="font-display text-2xl font-semibold text-ink">{project.name}</h2>
                  <span
                    className={`rounded-full border px-2.5 py-1 text-[11px] font-semibold ${statusStyle[project.status]}`}
                  >
                    {statusLabels[project.status][lang]}
                  </span>
                  <span className="font-mono text-xs text-plum/50">{project.year}</span>
                </div>
                <p className="mt-2 text-sm font-semibold text-pink">{project.tagline[lang]}</p>
              </div>
              <button
                onClick={onClose}
                aria-label={t('modal.close')}
                className="shrink-0 rounded-full border border-pink/30 bg-white/60 p-2 text-plum transition-colors hover:border-pink/60 hover:text-rose"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap gap-3 px-6 pt-5 sm:px-8">
              <a
                href={sourceUrl(project.repo)}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-pink/40 bg-white/60 px-4 py-2 text-sm font-medium text-plum transition-colors hover:border-pink/70 hover:text-ink"
              >
                <Github className="h-4 w-4" />
                {t('modal.source')}
              </a>
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-rose to-pink px-4 py-2 text-sm font-semibold text-white shadow-soft transition-transform hover:scale-[1.03]"
                >
                  <ExternalLink className="h-4 w-4" />
                  {t('modal.demo')}
                </a>
              )}
            </div>

            {/* Tabs */}
            <div className="mt-6 flex gap-1 border-b border-pink/15 px-6 sm:px-8">
              {(['preview', 'details'] as Tab[]).map((tb) => (
                <button
                  key={tb}
                  onClick={() => setTab(tb)}
                  className={`relative px-4 py-3 text-sm font-semibold transition-colors ${
                    tab === tb ? 'text-ink' : 'text-plum/60 hover:text-plum'
                  }`}
                >
                  {tb === 'preview' ? t('modal.tab.preview') : t('modal.tab.details')}
                  {tb === 'preview' && project.screenshots.length > 0 && (
                    <span className="ml-1.5 text-xs text-plum/50">{project.screenshots.length}</span>
                  )}
                  {tab === tb && (
                    <span className="absolute inset-x-0 -bottom-px h-0.5 rounded-full bg-gradient-to-r from-rose to-lilac" />
                  )}
                </button>
              ))}
            </div>

            {/* Content */}
            <div className="max-h-[60vh] overflow-y-auto px-6 py-6 sm:px-8">
              {tab === 'preview' ? (
                <Preview project={project} shot={shot} setShot={setShot} onZoom={() => setZoom(true)} />
              ) : (
                <Details project={project} />
              )}
            </div>
          </motion.div>

          {/* Lightbox plein écran */}
          <AnimatePresence>
            {zoom && current && (
              <motion.div
                key="zoom"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={(e) => {
                  e.stopPropagation()
                  setZoom(false)
                }}
                className="fixed inset-0 z-[120] flex cursor-zoom-out items-center justify-center bg-ink/85 p-4 backdrop-blur-sm sm:p-10"
              >
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    setZoom(false)
                  }}
                  aria-label={t('modal.close')}
                  className="absolute right-5 top-5 rounded-full border border-white/25 bg-white/10 p-2.5 text-white transition-colors hover:bg-white/20"
                >
                  <X className="h-5 w-5" />
                </button>

                {project.screenshots.length > 1 && (
                  <>
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        setShot(Math.max(shot - 1, 0))
                      }}
                      disabled={shot === 0}
                      className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full border border-white/25 bg-white/10 p-3 text-white transition-colors hover:bg-white/20 disabled:opacity-30"
                      aria-label="Précédent"
                    >
                      <ChevronLeft className="h-6 w-6" />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        setShot(Math.min(shot + 1, project.screenshots.length - 1))
                      }}
                      disabled={shot === project.screenshots.length - 1}
                      className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full border border-white/25 bg-white/10 p-3 text-white transition-colors hover:bg-white/20 disabled:opacity-30"
                      aria-label="Suivant"
                    >
                      <ChevronRight className="h-6 w-6" />
                    </button>
                  </>
                )}

                <motion.img
                  key={current.src}
                  initial={{ scale: 0.96, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                  src={current.src}
                  alt={current.caption[lang]}
                  onClick={(e) => e.stopPropagation()}
                  className="max-h-[90vh] max-w-[95vw] cursor-default rounded-xl object-contain shadow-petal"
                />
                <p className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full bg-ink/60 px-4 py-1.5 text-sm text-white/90 backdrop-blur">
                  {current.caption[lang]}
                  {project.screenshots.length > 1 && ` · ${shot + 1}/${project.screenshots.length}`}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function Preview({
  project,
  shot,
  setShot,
  onZoom,
}: {
  project: Project
  shot: number
  setShot: (n: number) => void
  onZoom: () => void
}) {
  const { t, lang } = useI18n()

  if (project.screenshots.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-pink/30 py-16 text-center text-plum/60">
        <ImageOff className="mb-3 h-8 w-8" />
        <p>{t('modal.noshots')}</p>
      </div>
    )
  }

  const current = project.screenshots[shot]
  return (
    <div>
      <div className="group relative overflow-hidden rounded-2xl border border-pink/15 bg-blush">
        <img
          src={current.src}
          alt={current.caption[lang]}
          onClick={onZoom}
          className="max-h-[44vh] w-full cursor-zoom-in object-contain transition-transform duration-300 group-hover:scale-[1.02]"
        />
        {/* indice « agrandir » */}
        <button
          onClick={onZoom}
          aria-label="Agrandir"
          className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-ink/55 px-3 py-1.5 text-xs font-medium text-white opacity-0 backdrop-blur transition-opacity group-hover:opacity-100"
        >
          <ZoomIn className="h-3.5 w-3.5" />
          {t('modal.zoom')}
        </button>
        {project.screenshots.length > 1 && (
          <>
            <button
              onClick={() => setShot(Math.max(shot - 1, 0))}
              disabled={shot === 0}
              className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 text-plum opacity-0 shadow-soft backdrop-blur transition-opacity hover:text-rose group-hover:opacity-100 disabled:opacity-0"
              aria-label="Précédent"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => setShot(Math.min(shot + 1, project.screenshots.length - 1))}
              disabled={shot === project.screenshots.length - 1}
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 text-plum opacity-0 shadow-soft backdrop-blur transition-opacity hover:text-rose group-hover:opacity-100 disabled:opacity-0"
              aria-label="Suivant"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </>
        )}
      </div>

      <p className="mt-3 text-center text-sm text-plum/70">{current.caption[lang]}</p>

      {project.screenshots.length > 1 && (
        <div className="mt-4 flex flex-wrap justify-center gap-2">
          {project.screenshots.map((s, i) => (
            <button
              key={s.src}
              onClick={() => setShot(i)}
              className={`h-16 w-24 overflow-hidden rounded-lg border-2 transition-colors ${
                i === shot ? 'border-pink' : 'border-transparent opacity-60 hover:opacity-100'
              }`}
            >
              <img src={s.src} alt={s.caption[lang]} className="h-full w-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

function Details({ project }: { project: Project }) {
  const { t, lang } = useI18n()
  return (
    <div className="space-y-7">
      <p className="text-[15px] leading-relaxed text-plum/85">{project.description[lang]}</p>

      <section>
        <h4 className="mb-2 font-display text-sm font-semibold uppercase tracking-wider text-pink">
          {t('modal.helps')}
        </h4>
        <p className="text-[15px] leading-relaxed text-plum/75">{project.helps[lang]}</p>
      </section>

      <section>
        <h4 className="mb-3 font-display text-sm font-semibold uppercase tracking-wider text-pink">
          {t('modal.features')}
        </h4>
        <ul className="space-y-2">
          {project.highlights[lang].map((h) => (
            <li key={h} className="flex gap-2 text-sm text-plum/85">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-rose" />
              <span>{h}</span>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h4 className="mb-3 font-display text-sm font-semibold uppercase tracking-wider text-pink">
          {t('modal.tech')}
        </h4>
        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((s) => (
            <span
              key={s}
              className="rounded-md border border-pink/15 bg-pink/5 px-2.5 py-1 font-mono text-[11px] text-plum"
            >
              {s}
            </span>
          ))}
        </div>
      </section>

      <section>
        <h4 className="mb-3 font-display text-sm font-semibold uppercase tracking-wider text-pink">
          {t('modal.tools')}
        </h4>
        <div className="flex flex-wrap gap-1.5">
          {project.tools.map((s) => (
            <span
              key={s}
              className="rounded-md border border-lilac/20 bg-lilac/5 px-2.5 py-1 font-mono text-[11px] text-plum"
            >
              {s}
            </span>
          ))}
        </div>
      </section>
    </div>
  )
}
