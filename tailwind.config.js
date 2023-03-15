const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  colors: {
    gray: {
      100: '#fcfcfd',
      200: '#F8F8FB',
      300: '#ecedf2',
      400: '#dbdde6',
      500: '#c2c6d6',
      600: '#aaafc5',
      700: '#9298b5',
      800: '#7981a4',
      900: '#636b92',
      1000: '#535979',
      1100: '#424761',
      1200: '#323549',
      1300: '#212431',
    },
    tblue: {
      100: '#EBFAFF',
      200: '#D6F5FF',
      300: '#C2F1FF',
      400: '#99E7FF',
      500: '#70DEFF',
      600: '#47D4FF',
      700: '#14C8FF', // Telcoin blue
      800: '#00BCF5',
      900: '#009CCC',
      1000: '#007DA3',
      1100: '#005E7A',
      1200: '#003F52',
      1300: '#002F3D',
    },
    blue: {
      100: '#EBF7FF',
      200: '#D6EFFF',
      300: '#C2E7FF',
      400: '#ADDEFF',
      500: '#99D6FF',
      600: '#70C6FF',
      700: '#37AEFF', // Action Items
      800: '#0093F5',
      900: '#007ACC',
      1000: '#0062A3',
      1100: '#00497A',
      1200: '#003152',
      1300: '#00253D',
    },
    burple: {
      100: '#EDEBFF',
      200: '#DBD6FF',
      300: '#C9C2FF',
      400: '#B7ADFF',
      500: '#9385FF',
      600: '#8170FF',
      700: '#533DFF', // Primary
      800: '#391FFF',
      900: '#1D00F5',
      1000: '#1800CC',
      1100: '#1300A3',
      1200: '#0E007A',
      1300: '#0C0066',
    },
    green: {
      100: '#EBFFFB',
      200: '#D7FEF6',
      300: '#C3FEF2',
      400: '#91FDE6',
      500: '#68FADB',
      600: '#2BEAC2',
      700: '#03CEA4',
      800: '#03B591',
      900: '#028D71',
      1000: '#026451',
      1100: '#015041',
      1200: '#013C30',
      1300: '#012820',
    },
    white: '#FFFFFF',
    status: {
      complete: '#02C39A',
      inProgress: '#FFBA00',
      error: '#DB222A',
    },
  },
  fontFamily: {
    sans: ['hero-new', ...defaultTheme.fontFamily.sans],
  },
  screens: {
    md: '834px',
    // => @media (min-width: 768px) { ... }

    lg: '1440px',
    // => @media (min-width: 992px) { ... }
  },
  extend: {
    dropShadow: {
      blue: '0px 8px 12px rgba(55, 174, 255, 0.25)',
    },
  },

  plugins: [],
};
