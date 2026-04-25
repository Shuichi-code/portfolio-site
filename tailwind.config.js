/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './Components/**/*.razor',
    './Pages/**/*.razor',
    './wwwroot/index.html',
  ],
  theme: {
    extend: {
      colors: {
        cream: { DEFAULT: '#FFFBF5', soft: '#FFF8F0', deep: '#F5EFE6' },
        ink:   { DEFAULT: '#2D3748', soft: '#4A5568', mute: '#727782' },
        accent: { DEFAULT: '#2B6CB0', dark: '#005394' },
        chip: {
          teal:    '#E6FFFA', tealfg:    '#006B5F',
          green:   '#F0FFF4', greenfg:   '#22543D',
          coral:   '#FFF5F5', coralfg:   '#C53030',
          purple:  '#FAF5FF', purplefg:  '#6B46C1',
          blue:    '#EBF8FF', bluefg:    '#2B6CB0',
        },
      },
      fontFamily: {
        display: ['"Fraunces"', 'Georgia', 'Cambria', 'serif'],
        body:    ['"DM Sans"', 'system-ui', 'sans-serif'],
        mono:    ['"DM Mono"', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        warm:   '0 12px 32px -4px rgba(45, 55, 72, 0.08)',
        warmlg: '0 24px 48px -8px rgba(45, 55, 72, 0.10)',
      },
    },
  },
  plugins: [],
};
