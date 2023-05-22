/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-img": "url('./src/assets/images/hero.jpg')",
        band_1: "url('./src/assets/images/band1.jpg')",
        band_2: "url('./src/assets/images/band2.jpg')",
        band_3: "url('./src/assets/images/band3.jpg')",
        band_4: "url('./src/assets/images/band4.jpg')",
        band_5: "url('./src/assets/images/band5.jpg')",
        band_6: "url('./src/assets/images/band6.jpg')",
        band_7: "url('./src/assets/images/band7.jpg')",
      },
    },
  },
  plugins: [],
};
