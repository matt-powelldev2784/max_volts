/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primaryPink: '#d70567',
      },
      screens: {
        sm: '0px',
        md: '600px',
        lg: '1100px',
      },
    },
    fontSize: {
      sm: ['14px', '20px'],
      base: ['18px', '24px'],
      lg: ['22px', '28px'],
      xl: ['26px', '32px'],
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.flexCol': {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        },
        '.flexRow': {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
        },
      })
    },
  ],
}
