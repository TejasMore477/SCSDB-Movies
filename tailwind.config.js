/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBullet: '#503ecb', // custom bullet color here
      },
    },
  },
  plugins: [],
}

