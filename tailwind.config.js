/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin';
import colors from 'tailwindcss/colors';
module.exports = {
  content: [
    './**/*.{html,js}',
  ],
  darkMode: 'media',
  theme: {
    extend: {
      fontFamily: {
        'dana': ['dana', 'sans-serif'],
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
    },
    colors: {
      primary1: '#4AC63F',
      primary2: '#F6C92D',
      primary3: '#FD7FE9',
      primary4: '#62B3FD',
      secondary1: '#CDEDFF',
      secondary2: '#FFEBDF',
      secondary3: '#FFD5FB',
      secondary4: '#D6F4BF',
      neutrals1: '#141416',
      neutrals2: '#23262F',
      neutrals3: '#353945',
      neutrals4: '#777E90',
      neutrals5: '#B1B5C3',
      neutrals6: '#E6E8EC',
      neutrals7: '#F4F5F6',
      neutrals8: '#E6E8EC',

      lightBackground: '#ffffff',
      darkBackground: '#1e1e1e',
      lightText: '#141416',
      darkText: '#E6E8EC',

      blue: colors.blue,
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      slate: colors.slate,
      zinc: colors.zinc,
      neutral: colors.neutral,
      stone: colors.stone,
      red: colors.red,
      orange: colors.orange,
      amber: colors.amber,
      lime: colors.lime,
      green: colors.green,
      teal: colors.teal,
      cyan: colors.cyan,
      sky: colors.sky,
      violet: colors.violet,
      purple: colors.purple,
      fuchsia: colors.fuchsia,
      pink: colors.pink,
      rose: colors.rose,    
    },
    boxShadow: {
      simple: '0 0 4px rgba(0, 0, 34, 0.20000000298023224)',
      'simple-01': '0 1px 4px rgba(0, 0, 34, 0.4000000059604645)',
      'simple-02': '0 2px 4px rgba(0, 0, 34, 0.20000000298023224)',
      glow: '0px 0px 4px 0.5px rgba(255, 132, 4, 0.20000000298023224)',
    },

  },
  plugins: [
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/typography'),
    // require('@tailwindcss/aspect-ratio'),

    plugin(({ addComponents, theme }) => {
      addComponents({
        '.font-dana': {
          fontFamily: theme('fontFamily.dana'),
        },
        '.type-2r': {
          fontWeight: '400',
          fontSize: '0.5rem', //8px
          lineHeight: '0.625rem', //10px
          fontFamily: theme('fontFamily.dana'),
        },
        '.type-2-5r': {
          fontWeight: '400',
          fontSize: '0.625rem', //10px
          lineHeight: '0.75rem', //12px
          fontFamily: theme('fontFamily.dana'),
        },
        '.type-3r': {
          fontWeight: '400',
          fontSize: '0.75rem', //12px
          lineHeight: '1.25rem', //20px
          fontFamily: theme('fontFamily.dana'),
        },
        '.type-3-5r': {
          fontWeight: '400',
          fontSize: '0.875rem', //14px
          lineHeight: '1.0625rem', //17px
          fontFamily: theme('fontFamily.dana'),
        },
        '.type-4r': {
          fontWeight: '400',
          fontSize: '1rem', //16px
          lineHeight: '1.57rem', //25px
          fontFamily: theme('fontFamily.dana'),
        },
        '.type-5r': {
          fontWeight: '400',
          fontSize: '1.25rem', //20px
          lineHeight: '1.9375rem', //31px
          fontFamily: theme('fontFamily.dana'),
        },
        '.type-6r': {
          fontWeight: '400',
          fontSize: '1.5rem', //24px
          lineHeight: '2.375rem', //38px
          fontFamily: theme('fontFamily.dana'),
        },
        '.type-3m': {
          fontWeight: '500',
          fontSize: '0.75rem', //12px
          lineHeight: '1.25rem', //20px
          fontFamily: theme('fontFamily.dana'),
        },
        '.type-3-5m': {
          fontWeight: '500',
          fontSize: '0.875rem', //14px
          lineHeight: '1.0625rem', //17px
          fontFamily: theme('fontFamily.dana'),
        },
        '.type-4m': {
          fontWeight: '500',
          fontSize: '1rem', //16px
          lineHeight: '1.57rem', //25px
          fontFamily: theme('fontFamily.dana'),
        },
        '.type-3sb': {
          fontWeight: '600',
          fontSize: '0.75rem', //12px
          lineHeight: '1.25rem', //20px
          fontFamily: theme('fontFamily.dana'),
        },
        '.type-4sb': {
          fontWeight: '600',
          fontSize: '1rem', //16px
          lineHeight: '1.57rem', //25px
          fontFamily: theme('fontFamily.dana'),
        },
        '.type-4-5b': {
          fontWeight: '700',
          fontSize: '1.125rem', //18px
          lineHeight: '1.75rem', //28px
          fontFamily: theme('fontFamily.dana'),
        },
        '.type-h1': {
          fontWeight: '500',
          fontSize: '1.5rem',
          lineHeight: '1.75rem',
          fontFamily: theme('fontFamily.dana'),
        },
        '.type-h2': {
          fontWeight: '500',
          fontSize: '1.25rem',
          lineHeight: '1.625rem',
          fontFamily: theme('fontFamily.dana'),
        },
        '.type-h3': {
          fontWeight: '500',
          fontSize: '1.0625rem',
          lineHeight: '1.5rem',
          fontFamily: theme('fontFamily.dana'),
        },
        '.type-h4': {
          fontWeight: '700',
          fontSize: '0.9375rem',
          lineHeight: '1.25rem',
          fontFamily: theme('fontFamily.dana'),
        },
        '.type-h5': {
          fontWeight: '700',
          fontSize: '0.9375rem',
          lineHeight: '1.25rem',
          fontFamily: theme('fontFamily.dana'),
        },
        '.type-h6': {
          fontWeight: '700',
          fontSize: '0.9375rem',
          lineHeight: '1.25rem',
          fontFamily: theme('fontFamily.dana'),
        },
        '.type-body': {
          fontWeight: '400',
          fontSize: '0.9375rem',
          lineHeight: '1.25rem',
          fontFamily: theme('fontFamily.dana'),
        },
        '.type-control': {
          fontWeight: '400',
          fontSize: '0.9375rem',
          lineHeight: '1.25rem',
          fontFamily: theme('fontFamily.dana'),
        },
        '.type-footnote': {
          fontWeight: '400',
          fontSize: '0.8125rem',
          lineHeight: '1.125rem',
          fontFamily: theme('fontFamily.dana'),
        },
        '.type-control-label': {
          fontWeight: '400',
          fontSize: '0.8125rem',
          lineHeight: '1.125rem',
          fontFamily: theme('fontFamily.dana'),
        },
      });
    }),
  ],

}

