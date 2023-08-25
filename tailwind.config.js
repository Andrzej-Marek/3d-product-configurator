/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#9B93FF",

          secondary: "#d926a9",

          accent: "#1fb2a6",

          neutral: "#2a323c",

          "base-100": "#1d232a",

          info: "#3abff8",

          success: "#36d399",

          warning: "#fbbd23",

          error: "#f87272",
        },
      },
    ],
  },
  theme: {
    extend: {
      colors: {
        primary: "#9B93FF",
        dark: "#000013",
        background: "#F6F6F6",
        gray: {
          "300-60": "rgba(219, 218, 213, 0.6)",
        },
        shadow: {
          top: "-2px 0px 14px 0px rgba(0, 0, 0, 0.05);",
        },
      },
      gridTemplateColumns: {
        // Complex site-specific column configuration
        "2/1fr": "2fr 1fr",
        "3/1fr": "3fr 1fr",
        "4/1fr": "4fr 1fr",
        "1/2fr": "1fr 2fr",
      },
      boxShadow: {
        bar: "0px -4px 27px rgba(0, 0, 0, 0.15)",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
    require("postcss-100vh-fix"),
    require("daisyui"),
  ],
};
