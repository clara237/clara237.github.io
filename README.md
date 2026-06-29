# Portfolio — Clara Isabelle

Portfolio personnel bilingue (FR/EN) présentant mes projets full-stack, IA et cybersécurité.

**Stack :** React 18 · TypeScript · Vite · Tailwind CSS · Framer Motion

## Développement

```bash
npm install
npm run dev        # http://localhost:5173
```

## Build

```bash
npm run build      # génère /dist
npm run preview    # prévisualise le build
```

## Personnalisation

- **Projets** : `src/data/projects.ts`
- **Compétences** : `src/data/skills.ts`
- **Textes / traductions** : `src/i18n.tsx`
- **Coordonnées (email, GitHub, LinkedIn)** : `src/components/Contact.tsx` → constante `CONTACT`

## Déploiement sur Vercel

1. Pousse ce dossier sur un dépôt GitHub.
2. Sur [vercel.com](https://vercel.com) → *Add New Project* → importe le dépôt.
3. Vercel détecte automatiquement Vite (build : `npm run build`, output : `dist`).
4. Clique *Deploy*. 🎉

Alternative en CLI :

```bash
npm i -g vercel
vercel            # déploiement de preview
vercel --prod     # déploiement en production
```
