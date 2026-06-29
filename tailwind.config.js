/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // ── Palette « atelier » : prune · terracotta · or, sur ivoire chaud ──
        blush: '#f7f3ec', // ivoire chaud (fond de page)
        cream: '#fffdf8',
        ink: '#2a2230', // aubergine-espresso (texte principal)
        plum: '#5e4d59', // mauve-taupe (texte courant)
        rose: '#9d3b5b', // grenat / accent principal (remplace le rose néon)
        pink: '#b35e76', // rose poudré (accent secondaire, dusty)
        lilac: '#8a6aa0', // améthyste mat
        peach: '#d98a5e', // terracotta
        coral: '#cf7a4e', // terracotta brûlée
        gold: '#c79a52', // or champagne
        teal: '#2f7d6e', // accent froid (sécurité / contrastes)
        petal: '#ead9dd', // blush poudré très doux (halos)
        sand: '#efe7da', // sable (cartes alternées)
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Outfit', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        soft: '0 18px 50px -22px rgba(157, 59, 91, 0.28)',
        petal: '0 30px 80px -32px rgba(94, 58, 82, 0.42)',
        gold: '0 18px 45px -18px rgba(199, 154, 82, 0.5)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        floaty: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(28px, -22px) scale(1.06)' },
          '66%': { transform: 'translate(-22px, 18px) scale(0.96)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '200% 50%' },
        },
        aurora: {
          '0%, 100%': { transform: 'translate(0,0) rotate(0deg)' },
          '50%': { transform: 'translate(-4%, 3%) rotate(8deg)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        sparkle: {
          '0%, 100%': { transform: 'scale(0) rotate(0deg)', opacity: '0' },
          '50%': { transform: 'scale(1) rotate(90deg)', opacity: '1' },
        },
        sheen: {
          '0%': { transform: 'translateX(-150%) skewX(-20deg)' },
          '100%': { transform: 'translateX(250%) skewX(-20deg)' },
        },
        'spin-slow': {
          to: { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        floaty: 'floaty 18s ease-in-out infinite',
        shimmer: 'shimmer 6s linear infinite',
        aurora: 'aurora 22s ease-in-out infinite',
        marquee: 'marquee 38s linear infinite',
        sparkle: 'sparkle 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
