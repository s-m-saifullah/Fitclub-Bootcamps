/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#306bf4",
          secondary: "#e1b6f9",
          accent: "#01088e",
          neutral: "#211F37",
          "base-100": "#FCFCFD",
          info: "#1148EE",
          success: "#4CD6B4",
          warning: "#DCB218",
          error: "#DB2929",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
