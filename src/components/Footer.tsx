import { Heart } from 'lucide-react'
import { useI18n } from '../i18n'

export default function Footer() {
  const { t } = useI18n()
  const year = '2026'
  return (
    <footer className="above-grain border-t border-pink/15 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-sm text-plum/70 sm:flex-row">
        <span className="font-display text-base font-medium text-ink">
          © {year} Clara <span className="gradient-text">Isabelle</span>
        </span>
        <span className="inline-flex items-center gap-1.5">
          {t('footer.built')}
          <Heart className="h-3.5 w-3.5 fill-rose text-rose" />
        </span>
      </div>
    </footer>
  )
}
