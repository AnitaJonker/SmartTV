const colors = require("tailwindcss/colors")

module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./public/index.html",
    "./components/**/*.{html,js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: colors.neutral,
      },
    },
  },
}
