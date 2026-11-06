/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {colors: {
      "gray-20": "#F8F4EB",
      "gray-50": "#EFE6E6",
      "gray-100": "#DFCCCC",
      "gray-500": "#5E0000",
      "steel":"#8CA5B8",
      "mint":"#0B1014",
      "gunmetal":"#F5F7FA",
      "outer":"#C9D5E1",
      "ice":"#D7E3EE",
      "lighter": "#111B22",
    },
    backgroundImage: (theme) => ({
      "gradient-yellowred":
        "linear-gradient(90deg, #FF616A 0%, #FFC837 100%)",
      "mobile-home": "url('./assets/HomePageGraphic.png')",
    }),
    fontFamily: {
      dmsans: ["DM Sans", "sans-serif"],
      montserrat: ["Montserrat", "sans-serif"],
    },
    content: {
      java: "url('./assets/java.jpg')",
    },
  },
  screens: {
    xs: "480px",
    sm: "768px",
    md: "1060px",
  },
  },
  plugins: [],
}