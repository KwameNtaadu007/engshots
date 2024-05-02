/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors:{
        'secondary':'#F56565',//#2D3748 
        'primary':'#5521db',//#1A202C', //#ED8936 
        'accent':'#48BB78', //#4299E1
        'neutral':'#CBD5E0',//#E2E8F0
        'back':'#F7FAFC', //#EDF2F7
        'error':' #ff4a4a'
      }
    },
  },
  plugins: [],
};
