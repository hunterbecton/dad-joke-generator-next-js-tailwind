/** @type {import('tailwindcss').Config} */

const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Rubik', ...fontFamily.sans],
      },
      boxShadow: {
        'neutral-lg':
          '0px 301px 84px rgba(15, 42, 41, 0.01), 0px 192px 77px rgba(15, 42, 41, 0.06), 0px 108px 65px rgba(15, 42, 41, 0.2), 0px 48px 48px rgba(15, 42, 41, 0.34), 0px 12px 26px rgba(15, 42, 41, 0.39), 0px 0px 0px rgba(15, 42, 41, 0.4)',
      },
    },
    colors: {
      amber: {
        one: '#FEF6EB',
        two: '#FDEACE',
        three: '#FCD69E',
        four: '#FABA5B',
        five: '#F89B0F',
        six: '#C37706',
        seven: '#965C05',
        eight: '#784A04',
        nine: '#5F3B06',
        ten: '#543200',
      },
      brand: {
        one: '#ECFDFC',
        two: '#D1FAF8',
        three: '#A7F3EF',
        four: '#6EE7E1',
        five: '#34D3CB',
        six: '#10B9B1',
        seven: '#05968F',
        eight: '#047872',
        nine: '#065F5B',
        ten: '#005450',
      },
      neutral: {
        one: '#F8FCFC',
        two: '#F1F9F9',
        three: '#E2F0F0',
        four: '#CBE1E0',
        five: '#94B8B7',
        six: '#648B8A',
        seven: '#476968',
        eight: '#335554',
        nine: '#1E3B3A',
        ten: '#0F2A29',
      },
    },
    fontSize: {
      'headline-2xl': ['2.25rem', '2.5rem'],
      'headline-3xl': ['3rem', '1'],
      'button-sm': [
        '0.875rem',
        {
          lineHeight: '1.25rem',
          fontWeight: '500',
        },
      ],
      'button-base': [
        '1rem',
        {
          lineHeight: '1.5rem',
          fontWeight: '500',
        },
      ],
    },
  },
  plugins: [],
};
