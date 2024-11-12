/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin';
import colors from 'tailwindcss/colors';
module.exports = {
  content: [
    './src/**/*.{html,js,css}',
    "./node_modules/flowbite/**/*.js"
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
      // Primary Colors with Variations
      primary1: {
        DEFAULT: '#4AC63F',
        90: 'rgba(74, 198, 63, 0.90)',
        75: 'rgba(74, 198, 63, 0.75)',
        50: 'rgba(74, 198, 63, 0.50)',
        25: 'rgba(74, 198, 63, 0.25)',
        10: 'rgba(74, 198, 63, 0.10)',
      },
      primary2: {
        DEFAULT: '#F6C92D',
        90: 'rgba(246, 201, 45, 0.90)',
        75: 'rgba(246, 201, 45, 0.75)',
        50: 'rgba(246, 201, 45, 0.50)',
        25: 'rgba(246, 201, 45, 0.25)',
        10: 'rgba(246, 201, 45, 0.10)',
      },
      primary3: {
        DEFAULT: '#FD7FE9',
        90: 'rgba(253, 127, 233, 0.90)',
        75: 'rgba(253, 127, 233, 0.75)',
        50: 'rgba(253, 127, 233, 0.50)',
        25: 'rgba(253, 127, 233, 0.25)',
        10: 'rgba(253, 127, 233, 0.10)',
      },
      primary4: {
        DEFAULT: '#62B3FD',
        90: 'rgba(98, 179, 253, 0.90)',
        75: 'rgba(98, 179, 253, 0.75)',
        50: 'rgba(98, 179, 253, 0.50)',
        25: 'rgba(98, 179, 253, 0.25)',
        10: 'rgba(98, 179, 253, 0.10)',
      },

      // Secondary Colors with Variations
      secondary1: {
        DEFAULT: '#CDEDFF',
        90: 'rgba(205, 237, 255, 0.90)',
        75: 'rgba(205, 237, 255, 0.75)',
        50: 'rgba(205, 237, 255, 0.50)',
        25: 'rgba(205, 237, 255, 0.25)',
        10: 'rgba(205, 237, 255, 0.10)',
      },
      secondary2: {
        DEFAULT: '#FFEBDF',
        90: 'rgba(255, 235, 223, 0.90)',
        75: 'rgba(255, 235, 223, 0.75)',
        50: 'rgba(255, 235, 223, 0.50)',
        25: 'rgba(255, 235, 223, 0.25)',
        10: 'rgba(255, 235, 223, 0.10)',
      },
      secondary3: {
        DEFAULT: '#FFD5FB',
        90: 'rgba(255, 213, 251, 0.90)',
        75: 'rgba(255, 213, 251, 0.75)',
        50: 'rgba(255, 213, 251, 0.50)',
        25: 'rgba(255, 213, 251, 0.25)',
        10: 'rgba(255, 213, 251, 0.10)',
      },
      secondary4: {
        DEFAULT: '#D6F4BF',
        90: 'rgba(214, 244, 191, 0.90)',
        75: 'rgba(214, 244, 191, 0.75)',
        50: 'rgba(214, 244, 191, 0.50)',
        25: 'rgba(214, 244, 191, 0.25)',
        10: 'rgba(214, 244, 191, 0.10)',
      },

      // Neutral Colors with Variations
      neutrals1: {
        DEFAULT: '#141416',
        90: 'rgba(20, 20, 22, 0.90)',
        75: 'rgba(20, 20, 22, 0.75)',
        50: 'rgba(20, 20, 22, 0.50)',
        25: 'rgba(20, 20, 22, 0.25)',
        10: 'rgba(20, 20, 22, 0.10)',
      },
      neutrals2: {
        DEFAULT: '#23262F',
        90: 'rgba(35, 38, 47, 0.90)',
        75: 'rgba(35, 38, 47, 0.75)',
        50: 'rgba(35, 38, 47, 0.50)',
        25: 'rgba(35, 38, 47, 0.25)',
        10: 'rgba(35, 38, 47, 0.10)',
      },
      neutrals3: {
        DEFAULT: '#353945',
        90: 'rgba(53, 57, 69, 0.90)',
        75: 'rgba(53, 57, 69, 0.75)',
        50: 'rgba(53, 57, 69, 0.50)',
        25: 'rgba(53, 57, 69, 0.25)',
        10: 'rgba(53, 57, 69, 0.10)',
      },
      neutrals4: {
        DEFAULT: '#777E90',
        90: 'rgba(119, 126, 144, 0.90)',
        75: 'rgba(119, 126, 144, 0.75)',
        50: 'rgba(119, 126, 144, 0.50)',
        25: 'rgba(119, 126, 144, 0.25)',
        10: 'rgba(119, 126, 144, 0.10)',
      },
      neutrals5: {
        DEFAULT: '#B1B5C3',
        90: 'rgba(177, 181, 195, 0.90)',
        75: 'rgba(177, 181, 195, 0.75)',
        50: 'rgba(177, 181, 195, 0.50)',
        25: 'rgba(177, 181, 195, 0.25)',
        10: 'rgba(177, 181, 195, 0.10)',
      },
      neutrals6: {
        DEFAULT: '#E6E8EC',
        90: 'rgba(230, 232, 236, 0.90)',
        75: 'rgba(230, 232, 236, 0.75)',
        50: 'rgba(230, 232, 236, 0.50)',
        25: 'rgba(230, 232, 236, 0.25)',
        10: 'rgba(230, 232, 236, 0.10)',
      },
      neutrals7: {
        DEFAULT: '#F4F5F6',
        90: 'rgba(244, 245, 246, 0.90)',
        75: 'rgba(244, 245, 246, 0.75)',
        50: 'rgba(244, 245, 246, 0.50)',
        25: 'rgba(244, 245, 246, 0.25)',
        10: 'rgba(244, 245, 246, 0.10)',
      },
      neutrals8: {
        DEFAULT: '#E6E8EC',
        90: 'rgba(230, 232, 236, 0.90)',
        75: 'rgba(230, 232, 236, 0.75)',
        50: 'rgba(230, 232, 236, 0.50)',
        25: 'rgba(230, 232, 236, 0.25)',
        10: 'rgba(230, 232, 236, 0.10)',
      },
      mypink: '#F85E9F',
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


  },
  plugins: [
    require('@tailwindcss/forms'),
    require('flowbite/plugin'),
    // require('@tailwindcss/typography'),
    // require('@tailwindcss/aspect-ratio'),

    plugin(({ addComponents, theme }) => {
      addComponents({
        '.font-dana': {
          fontFamily: theme('fontFamily.dana'),
        },
        // Headings
        '.heading-1': {
          fontFamily: theme('fontFamily.dana'),
          fontSize: theme('fontSize.xl'),
          lineHeight: theme('lineHeight.8'),
          fontWeight: theme('fontWeight.bold'),
        },

        '.heading-2': {
          fontFamily: theme('fontFamily.dana'),
          fontSize: theme('fontSize.xl'),
          lineHeight: theme('lineHeight.7'),
          fontWeight: theme('fontWeight.medium'),
        },

        '.heading-3': {
          fontFamily: theme('fontFamily.dana'),
          fontSize: theme('fontSize.lg'),
          lineHeight: theme('lineHeight.6'),
          fontWeight: theme('fontWeight.medium'),
        },

        // Body Text
        '.text-body': {
          fontFamily: theme('fontFamily.dana'),
          fontSize: theme('fontSize.base'),
          lineHeight: theme('lineHeight.5'),
          fontWeight: theme('fontWeight.normal'),
        },

        '.text-body-medium': {
          fontFamily: theme('fontFamily.dana'),
          fontSize: theme('fontSize.base'),
          lineHeight: theme('lineHeight.5'),
          fontWeight: theme('fontWeight.medium'),
        },

        '.text-body-bold': {
          fontFamily: theme('fontFamily.dana'),
          fontSize: theme('fontSize.base'),
          lineHeight: theme('lineHeight.5'),
          fontWeight: theme('fontWeight.bold'),
        },

        // Small Text
        '.text-small': {
          fontFamily: theme('fontFamily.dana'),
          fontSize: theme('fontSize.sm'),
          lineHeight: theme('lineHeight.4'),
          fontWeight: theme('fontWeight.normal'),
        },

        '.text-small-medium': {
          fontFamily: theme('fontFamily.dana'),
          fontSize: theme('fontSize.sm'),
          lineHeight: theme('lineHeight.4'),
          fontWeight: theme('fontWeight.medium'),
        },

        // Caption
        '.text-caption': {
          fontFamily: theme('fontFamily.dana'),
          fontSize: theme('fontSize.xs'),
          lineHeight: theme('lineHeight.4'),
          fontWeight: theme('fontWeight.normal'),
        },
        '.center-absolute': {
          transform: 'translate(-50%, -50%)',
        },
        respectPrefix: true,
        respectImportant: true,
        variants: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
      });
    }),

  ],

}

