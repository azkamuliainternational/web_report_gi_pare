/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.{html,ejs}"],
  theme: {
    extend: {
      backgroundImage: {
        'bg-image': "url('/public/assets/img/bg.jpg')",
      }

    },
  },
  plugins: [],
}

