export interface SkillGroup {
  title: { fr: string; en: string; it: string }
  skills: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    title: { fr: 'Langages', en: 'Languages', it: 'Linguaggi' },
    skills: ['Python', 'TypeScript', 'JavaScript', 'PHP', 'Java', 'SQL', 'HTML/CSS', 'Bash'],
  },
  {
    title: { fr: 'Frontend', en: 'Frontend', it: 'Frontend' },
    skills: [
      'React 18/19',
      'Next.js 14',
      'TanStack Start',
      'Vite',
      'Tailwind CSS',
      'Bootstrap',
      'shadcn/ui',
      'Radix UI',
      'TanStack Query',
      'React Hook Form',
      'Zod',
      'Framer Motion',
      'TipTap',
      'Recharts',
      'Mermaid.js',
      'Leaflet',
    ],
  },
  {
    title: { fr: 'Backend', en: 'Backend', it: 'Backend' },
    skills: [
      'Django 5',
      'Django REST Framework',
      'Symfony',
      'Node.js',
      'Express',
      'Celery',
      'Prisma ORM',
      'Gunicorn',
      'API REST',
    ],
  },
  {
    title: { fr: 'Bases de données', en: 'Databases', it: 'Database' },
    skills: ['PostgreSQL', 'MySQL', 'SQLite', 'Supabase', 'Firebase', 'Redis'],
  },
  {
    title: { fr: 'IA / LLM', en: 'AI / LLM', it: 'IA / LLM' },
    skills: [
      'OpenAI',
      'Groq (Llama 3.x)',
      'Together AI',
      'Hugging Face',
      'AI SDK',
      'RAG / Assistants',
      'Prompt engineering',
    ],
  },
  {
    title: { fr: 'Cybersécurité', en: 'Security', it: 'Cybersicurezza' },
    skills: [
      'Scapy',
      'nmap',
      'Nikto',
      'sqlmap',
      'OWASP ZAP',
      'Anomaly detection',
      'Network analysis',
    ],
  },
  {
    title: { fr: 'DevOps & Outils', en: 'DevOps & Tools', it: 'DevOps & Strumenti' },
    skills: [
      'Docker',
      'Docker Compose',
      'nginx',
      'Git',
      'Jenkins',
      'Vercel',
      'npm workspaces',
      'CI/CD',
    ],
  },
]
