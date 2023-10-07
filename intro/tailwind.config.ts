import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    // Via Youtube, tips om å legge til alle mapper i prosjektet. La derfor til intro mappen. 
    './intro/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    // La inn en white, for å få tekstfargen til å vises på nettsiden. Kilde: https://stackoverflow.com/questions/67098510/class-text-white-with-tailwind-does-not-work 
    textColor: {
      white: "#FFF", 
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
