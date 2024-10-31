/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily : {
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        'bgLight': '#FFFFFF',
        'textLight' : '#000000',
        'detailLight' : '#F3F3F1',
        'bgDark' : '#2C4F3D',
        'textDark' : '#FFFFFF',
        'detailDark' : '#2C493A',
      },
      maxWidth: {
        'container': '40rem',
      },
    }, 
  },
  plugins: [],
};
 