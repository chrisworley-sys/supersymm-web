import type { Config } from 'tailwindcss'
import { fontFamily } from 'tailwindcss/defaultTheme'

const config: Config = {
  darkMode: ['class'],
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // SuperSymm brand tokens — prefix ss-*
        ss: {
          purple: {
            100: '#F1F0F8',
            200: '#D1CBE6',
            300: '#ACA1D2',
            400: '#8978BE',
            500: '#6750A4', // PRIMARY CTA
            600: '#43336D',
            700: '#22193B', // DARK BACKGROUNDS
          },
          violet: {
            300: '#B874CD',
            700: '#1B0A20', // DEEP DARK
          },
          blue: {
            100: '#D2D6ED',
            300: '#7B87C8',
            500: '#354270',
            700: '#0057B8', // LINKS
          },
          accent: {
            100: '#D5F77C', // HIGHLIGHT / CTA on dark
            200: '#B0CD65',
            300: '#8DA450',
            400: '#6B7D3C',
            500: '#4B5828',
          },
          green: {
            100: '#66CEB6',
            300: '#50A491',
            500: '#3B7C6D', // SUCCESS
          },
          pink: {
            100: '#FCE5F1',
            300: '#F36BC1',
            400: '#D331A0',
            500: '#982072',
            700: '#E977C1', // GRADIENT ENDPOINT
          },
          neutral: {
            100: '#F1F0F1',
            200: '#CECED1',
            300: '#A8A6AC',
            400: '#828189',
            500: '#5F5D66',
            600: '#3D3C42',
            700: '#1F1E21', // DEFAULT BODY TEXT
          },
          red: '#CB7587', // negative/error
          white: '#FFFFFF',
          black: '#000000',
          body: '#1F1E21',
        },

        // shadcn/ui CSS variable tokens
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },

      fontFamily: {
        sans: ['Roboto', ...fontFamily.sans],
        display: ['Inter', ...fontFamily.sans],
        serif: ['Newsreader', ...fontFamily.serif],
      },

      fontSize: {
        // SS heading scale
        'h1': ['60px', { lineHeight: '66px' }],
        'h2': ['48px', { lineHeight: '53px' }],
        'h3': ['40px', { lineHeight: '44px' }],
        'h4': ['34px', { lineHeight: '38px' }],
        'h5': ['24px', { lineHeight: '26px' }],
        'h6': ['22px', { lineHeight: '24px' }],
        // SS body scale
        'body-lg': ['20px', { lineHeight: '28px' }],
        'body-md': ['18px', { lineHeight: '25px' }],
        'body-sm': ['16px', { lineHeight: '22px' }],
        'body-xs': ['14px', { lineHeight: '20px' }],
      },

      backgroundImage: {
        'ss-hero': 'linear-gradient(93deg, #22193B 22%, #E977C1 124%)',
        'ss-blue': 'linear-gradient(93deg, #22193B 73%, #0057B8 133%)',
        'ss-text': 'linear-gradient(93deg, #6750A4, #E977C1)',
        'ss-deep': 'linear-gradient(180deg, #1B0A20 0%, #22193B 100%)',
      },

      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },

      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(32px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },

      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-up': 'fade-up 0.6s ease-out',
        'fade-in': 'fade-in 0.3s ease-out',
      },

      maxWidth: {
        'site': '1280px',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}

export default config
