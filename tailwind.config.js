/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1600px',
      // => @media (min-width: 1600px) { ... }
    },
    extend: {
      colors: {
        "primary": '#262626',
        "secondary": '#767676',
        "brandOne": '#6D6D6D',
        "headerBottom": '#F5F5F3',
        "borderOne": '#F0F0F0',
        "colorOne": '#FF8686',
        "colorTwo": '#7ED321',
        "colorThree": '#B6B6B6',
        "colorFour": '#15CBA5',
        'userHoverBg':"#2B2B2B",
      }
    },
  },
  plugins: [],
}

