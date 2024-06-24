module.exports = {
  content: ["./*.html", "./src/**/*.tsx"],
  plugins: [require("@tailwindcss/forms")],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      purple: "#3f3cbb",
      midnight: "#121063",
      metal: "#565584",
      tahiti: "#3ab7bf",
      silver: "#ecebff",
      "bubble-gum": "#ff77e9",
      bermuda: "#78dcca",
      black: "#000000",
      //   UPS
      "ups-green": "#0A8080",
      "ups-yellow": "#FFC400",
      "ups-blue": "#0662BB",
      "ups-red": "#DF2901",
      "ups-gray": "#8C857E",
    },
  },
};
