/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        '2xs': '.625rem',
        '3xs': '.5rem',
        '4xs': '1.0rem',
      },
      fontFamily: {
        custom: [
          'Krona One', 'sans-serif',
        ],
      },
      colors: {
        custom: {
          'red': '#99173C',
          'white': '#FFFFFF',
          'gray1': '#DFDFDF',
          'gray2': '#C0C0C0',
          'gray3': '#A0A0A0',
          'gray4': '#808080',
          'hoverBtn': '#BB1E4A',
          // Adicione mais cores personalizadas conforme necessário
        },
      },
    },
  },
  plugins: [],
}

