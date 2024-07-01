/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Primary
        "primary-50": "#FFEBEE",
        "primary-100": "#FFCDD2",
        "primary-200": "#EF9A9A",
        "primary-300": "#E57373",
        "primary-400": "#EF5350",
        "primary-500": "#F44336",
        "primary-600": "#E53935",
        "primary-700": "#D32F2F",
        "primary-800": "#C62828",
        "primary-900": "#B71C1C",
        // Secondary
        "secondary-50": "#FFF7E2",
        "secondary-100": "#FFE9B7",
        "secondary-200": "#FFDC89",
        "secondary-300": "#FFCF5A",
        "secondary-400": "#FFC338",
        "secondary-500": "#FEB925",
        "secondary-600": "#FDAC22",
        "secondary-700": "#FC9A21",
        "secondary-800": "#FB8920",
        "secondary-900": "#F96A1D",
        // Base
        white: "#FFFFFF",
        black: "#0D0D0D",
        // Alerts
        error: "#FF4436",
        success: "#79EF50",
        info: "#50E5EF",
      },
      fontSize: {
        h1: "49px",
        h2: "39px",
        h3: "31px",
        subtitle1: "25px",
        subtitle2: "20px",
        body1: "16px",
        body2: "13px",
      },
    },
  },
  plugins: [],
};
