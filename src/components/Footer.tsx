import { Globe, Heart, Mail, MapPin, Phone } from 'lucide-react'
import { useI18n } from '../i18n'

const CONTACT = {
  fullName: 'Silatchom Kengni Isabelle Clara',
  phone: '+237 699 567 072',
  phoneHref: 'tel:+237699567072',
  email: 'clarasilatchom03@gmail.com',
  address: 'Mimboman, Yaoundé',
}

export default function Footer() {
  const { t } = useI18n()
  const year = '2026'
  return (
    <footer className="above-grain border-t border-pink/15 px-6 py-9">
      <div className="mx-auto max-w-6xl">
        {/* Coordonnées — discrètes */}
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[11px] text-plum/55">
          <span className="font-medium text-plum/70">{CONTACT.fullName}</span>
          <span aria-hidden className="hidden h-3 w-px bg-pink/20 sm:block" />
          <span className="inline-flex items-center gap-1.5">
            <Globe className="h-3 w-3 text-rose/70" />
            {t('journey.nationality')}
          </span>
          <a href={CONTACT.phoneHref} className="inline-flex items-center gap-1.5 transition-colors hover:text-rose">
            <Phone className="h-3 w-3 text-rose/70" />
            {CONTACT.phone}
          </a>
          <a
            href={`mailto:${CONTACT.email}`}
            className="inline-flex items-center gap-1.5 transition-colors hover:text-rose"
          >
            <Mail className="h-3 w-3 text-rose/70" />
            {CONTACT.email}
          </a>
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="h-3 w-3 text-rose/70" />
            {CONTACT.address}
          </span>
        </div>

        <div className="mx-auto mt-6 flex max-w-6xl flex-col items-center justify-between gap-3 border-t border-pink/10 pt-6 text-sm text-plum/70 sm:flex-row">
          <span className="font-display text-base font-medium text-ink">
            © {year} Clara <span className="gradient-text">Isabelle</span>
          </span>
          <span className="inline-flex items-center gap-1.5">
            {t('footer.built')}
            <Heart className="h-3.5 w-3.5 fill-rose text-rose" />
          </span>
        </div>
      </div>
    </footer>
  )
}
