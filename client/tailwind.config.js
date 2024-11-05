/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        heroBg: "url('./assets/hero-bg.png')",
      },
      animation: {
        "spin-slow": "spin 60s linear infinite",
      },
      height: {
        heroHeight: "500px",
      },
      fontFamily: {
        starDos: ["Stardos Stencil"],
      },
      colors: {
        btnBg: "#15252A",
        bgText: "#01B399",
        btnHover: "#2B4651",
      },
      listStyleImage: {
        triangle: 'url("./src/assets/triangle.svg")',
      },
    },
  },
  plugins: [daisyui],
  // daisyUI config (optional - here are the default values)
  daisyui: {
    themes: false, // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "light", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
};
