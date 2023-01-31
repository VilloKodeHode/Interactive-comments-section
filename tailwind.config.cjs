/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#C9FEF5",

          secondary: "#C9FEF5",

          accent: "#C9FEF5",

          neutral: "#22555C",

          "base-100": "#87BDC2",

          info: "#22555C",

          success: "#22555C",

          warning: "#22555C",

          error: "#22555C",
        },
      },
    ],
  },
  theme: {
    screens: {
      ms: "320px",

      mm: "375px",

      ml: "425px",

      sm: "640px",

      md: "768px",

      lg: "1024px",

      xl: "1280px",

      "2xl": "1536px",
    },
    extend: {
      fontFamily: { Rubik: ["Rubik", "sans-serif"] },
      backgroundImage: () => ({
        "gradient-radial-to-tr":
          "radial-gradient(115% 90% at 0% 100%, var(--tw-gradient-stops))",
        "gradient-radial-to-tl":
          "radial-gradient(115% 90% at 100% 100%, var(--tw-gradient-stops))",
        "gradient-radial-to-br":
          "radial-gradient(90% 115% at 0% 0%, var(--tw-gradient-stops))",
        "gradient-radial-to-bl":
          "radial-gradient(90% 115% at 100% 0%, var(--tw-gradient-stops))",
      }),
      fontFamily: { Roboto: ["Roboto", "sans-serif"] },
      colors: {
        design: {
          ModerateBlue: "#5457B6",
          SoftRed: "#ED6468",
          LightGrayishBlue: "#C3C4EF",
          PaleRed: "#FFB8BB",
          DarkBlue: "#324152",
          GrayishBlue: "#67727E",
          LighGray: "#EAECF1",
          VeryLightGray: "#F5F6FA",
        },
      },
      keyframes: {
        popUp: {
          "0%": { transform: "scale(0)", opacity: "0%" },
          "100%": { transform: "scale(1)", opacity: "100%" },
        },
        glow: {
          "0%": { opacity: "30%" },
          "100%": { opacity: "100%" },
        },
        slideIn: {
          "0%": { transform: "scale(0)", right: "0" },
          "100%": { transform: "scale(1)", right: "50%" },
        },
      },
      animation: {
        ProjectPopUp: "popUp ease 0.3s linear",
        RPSPopUp: "popUp 0.1s ease-in",
        glow: "glow 1s ease-in-out infinite alternate",
        rulesSlideIn: "slideIn 1s ease-in-out linear",
        RPSPopUpDelayed: "popUp 0.1s ease-in 1.0s backwards",
        RPSPopUpMoreDelayed: "popUp 0.1s ease-in 2s backwards",
      },
    },
  },
  plugins: [require("daisyui")],
};
