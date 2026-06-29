import type { ComponentType, CSSProperties } from 'react'
import {
  SiPython,
  SiTypescript,
  SiJavascript,
  SiPhp,
  SiOpenjdk,
  SiHtml5,
  SiGnubash,
  SiReact,
  SiNextdotjs,
  SiReactquery,
  SiVite,
  SiTailwindcss,
  SiBootstrap,
  SiShadcnui,
  SiRadixui,
  SiReacthookform,
  SiZod,
  SiFramer,
  SiLeaflet,
  SiMermaid,
  SiDjango,
  SiSymfony,
  SiNodedotjs,
  SiExpress,
  SiCelery,
  SiPrisma,
  SiGunicorn,
  SiPostgresql,
  SiMysql,
  SiSqlite,
  SiSupabase,
  SiFirebase,
  SiRedis,
  SiOpenai,
  SiHuggingface,
  SiOwasp,
  SiDocker,
  SiNginx,
  SiGit,
  SiJenkins,
  SiVercel,
  SiNpm,
  SiFlutter,
  SiWordpress,
  SiShopify,
  SiWoocommerce,
  SiStripe,
  SiMeta,
  SiCanva,
  SiGoogleads,
  SiGoogleanalytics,
  SiZapier,
  SiMake,
  SiMetasploit,
} from 'react-icons/si'
import {
  BarChart3,
  Boxes,
  Brain,
  Code2,
  Cpu,
  Database,
  GitBranch,
  Network,
  Radar,
  Search,
  Shield,
  ShieldAlert,
  Sparkles,
  Terminal,
  Workflow,
} from 'lucide-react'

export type IconCmp = ComponentType<{ className?: string; style?: CSSProperties }>

/**
 * Renvoie un logo de marque (Simple Icons) pour un nom de techno, avec repli
 * sur une icône lucide générique. Match par mots-clés, du plus précis au plus large.
 */
export function getTechIcon(raw: string): IconCmp {
  const s = raw.toLowerCase()

  // — Frontend frameworks / libs (avant "react" générique)
  if (s.includes('react native')) return SiReact
  if (s.includes('react hook form')) return SiReacthookform
  if (s.includes('react query') || s.includes('tanstack')) return SiReactquery
  if (s.includes('next')) return SiNextdotjs
  if (s.includes('react')) return SiReact
  if (s.includes('vite')) return SiVite
  if (s.includes('tailwind')) return SiTailwindcss
  if (s.includes('bootstrap')) return SiBootstrap
  if (s.includes('shadcn')) return SiShadcnui
  if (s.includes('radix')) return SiRadixui
  if (s.includes('zod')) return SiZod
  if (s.includes('framer')) return SiFramer
  if (s.includes('leaflet')) return SiLeaflet
  if (s.includes('mermaid')) return SiMermaid
  if (s.includes('tiptap')) return Code2
  if (s.includes('recharts') || s.includes('chart')) return BarChart3

  // — Langages
  if (s.includes('typescript')) return SiTypescript
  if (s.includes('javascript')) return SiJavascript
  if (s.includes('python')) return SiPython
  if (s.includes('php')) return SiPhp
  if (s.includes('java')) return SiOpenjdk
  if (s.includes('html') || s.includes('css')) return SiHtml5
  if (s.includes('bash') || s.includes('shell')) return SiGnubash

  // — Backend
  if (s.includes('django')) return SiDjango
  if (s.includes('symfony')) return SiSymfony
  if (s.includes('node')) return SiNodedotjs
  if (s.includes('express')) return SiExpress
  if (s.includes('celery')) return SiCelery
  if (s.includes('prisma')) return SiPrisma
  if (s.includes('gunicorn')) return SiGunicorn
  if (s.includes('api') || s.includes('rest')) return Network

  // — Bases de données
  if (s.includes('postgres')) return SiPostgresql
  if (s.includes('mysql')) return SiMysql
  if (s.includes('sqlite')) return SiSqlite
  if (s.includes('supabase')) return SiSupabase
  if (s.includes('firebase')) return SiFirebase
  if (s.includes('redis')) return SiRedis
  if (s.includes('sql')) return Database

  // — IA / LLM
  if (s.includes('openai')) return SiOpenai
  if (s.includes('hugging')) return SiHuggingface
  if (s.includes('groq') || s.includes('llama')) return Cpu
  if (s.includes('together')) return Sparkles
  if (s.includes('ai sdk') || s.includes('rag') || s.includes('assistant')) return Brain
  if (s.includes('prompt')) return Sparkles

  // — Sécurité
  if (s.includes('nmap')) return Radar
  if (s.includes('owasp') || s.includes('zap')) return SiOwasp
  if (s.includes('metasploit')) return SiMetasploit
  if (s.includes('sqlmap')) return Database
  if (s.includes('nikto')) return Search
  if (s.includes('scapy') || s.includes('network')) return Network
  if (s.includes('anomaly') || s.includes('detection')) return ShieldAlert

  // — DevOps & outils
  if (s.includes('docker')) return SiDocker
  if (s.includes('nginx')) return SiNginx
  if (s.includes('jenkins')) return SiJenkins
  if (s.includes('vercel')) return SiVercel
  if (s.includes('npm')) return SiNpm
  if (s.includes('git')) return SiGit
  if (s.includes('ci/cd') || s.includes('ci / cd')) return Workflow

  // — Mobile / e-commerce / marketing
  if (s.includes('flutter')) return SiFlutter
  if (s.includes('wordpress')) return SiWordpress
  if (s.includes('shopify')) return SiShopify
  if (s.includes('woocommerce')) return SiWoocommerce
  if (s.includes('stripe')) return SiStripe
  if (s.includes('meta')) return SiMeta
  if (s.includes('canva')) return SiCanva
  if (s.includes('google ads')) return SiGoogleads
  if (s.includes('analytics')) return SiGoogleanalytics
  if (s.includes('zapier')) return SiZapier
  if (s.includes('make')) return SiMake
  if (s.includes('hootsuite')) return Workflow
  if (s.includes('seo')) return Search

  // — Repli
  if (s.includes('security') || s.includes('sécur')) return Shield
  if (s.includes('devops')) return Boxes
  if (s.includes('git')) return GitBranch
  return Terminal
}

const ACCENT = '#9d3b5b' // repli pour les outils sans logo de marque

/** Couleur officielle de la marque (Simple Icons) pour un nom de techno. */
export function getTechColor(raw: string): string {
  const s = raw.toLowerCase()

  if (s.includes('react native')) return '#61DAFB'
  if (s.includes('react hook form')) return '#EC5990'
  if (s.includes('react query') || s.includes('tanstack')) return '#FF4154'
  if (s.includes('next')) return '#111111'
  if (s.includes('react')) return '#61DAFB'
  if (s.includes('vite')) return '#646CFF'
  if (s.includes('tailwind')) return '#06B6D4'
  if (s.includes('bootstrap')) return '#7952B3'
  if (s.includes('shadcn')) return '#111111'
  if (s.includes('radix')) return '#111111'
  if (s.includes('zod')) return '#3E67B1'
  if (s.includes('framer')) return '#0055FF'
  if (s.includes('leaflet')) return '#199900'
  if (s.includes('mermaid')) return '#FF3670'
  if (s.includes('recharts') || s.includes('chart')) return ACCENT
  if (s.includes('tiptap')) return ACCENT

  if (s.includes('typescript')) return '#3178C6'
  if (s.includes('javascript')) return '#E8B400'
  if (s.includes('python')) return '#3776AB'
  if (s.includes('php')) return '#777BB4'
  if (s.includes('java')) return '#ED8B00'
  if (s.includes('html') || s.includes('css')) return '#E34F26'
  if (s.includes('bash') || s.includes('shell')) return '#4EAA25'

  if (s.includes('django')) return '#0C4B33'
  if (s.includes('symfony')) return '#111111'
  if (s.includes('node')) return '#5FA04E'
  if (s.includes('express')) return '#111111'
  if (s.includes('celery')) return '#37814A'
  if (s.includes('prisma')) return '#2D3748'
  if (s.includes('gunicorn')) return '#499848'

  if (s.includes('postgres')) return '#4169E1'
  if (s.includes('mysql')) return '#4479A1'
  if (s.includes('sqlite')) return '#003B57'
  if (s.includes('supabase')) return '#3FCF8E'
  if (s.includes('firebase')) return '#E5910A'
  if (s.includes('redis')) return '#FF4438'

  if (s.includes('openai')) return '#412991'
  if (s.includes('hugging')) return '#E6BE00'

  if (s.includes('owasp') || s.includes('zap')) return '#111111'
  if (s.includes('metasploit')) return '#2596CD'

  if (s.includes('docker')) return '#2496ED'
  if (s.includes('nginx')) return '#009639'
  if (s.includes('jenkins')) return '#D24939'
  if (s.includes('vercel')) return '#111111'
  if (s.includes('npm')) return '#CB3837'
  if (s.includes('git')) return '#F05032'

  if (s.includes('flutter')) return '#02569B'
  if (s.includes('wordpress')) return '#21759B'
  if (s.includes('shopify')) return '#7AB55C'
  if (s.includes('woocommerce')) return '#96588A'
  if (s.includes('stripe')) return '#635BFF'
  if (s.includes('meta')) return '#0467DF'
  if (s.includes('canva')) return '#00C4CC'
  if (s.includes('google ads')) return '#4285F4'
  if (s.includes('analytics')) return '#E37400'
  if (s.includes('zapier')) return '#FF4F00'
  if (s.includes('make')) return '#6D00CC'

  return ACCENT
}
