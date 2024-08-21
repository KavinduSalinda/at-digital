/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6B3CC9", // Add your primary color here
        secondary: "#F28D35", // Add your secondary color here
        custom_Ash: "#FAF8FF", // component background
        textSecondary: "#4B5563"
      },
      screens: {
        'sm': '345px', // Update the sm breakpoint to 345px
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
      },
    },
  },
  plugins: [],
}
