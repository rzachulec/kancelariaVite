import type { Config } from 'tailwindcss'

export default {
  purge: [
    './index.html',
     './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],  
  plugins: [],
  theme: {
    fontFamily: {
      'sans': ['SFPro','ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'display': ['Oswald'],
      'body': ['SFPro'],
    }
  }
} satisfies Config

