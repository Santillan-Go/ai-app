/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "main-white": "#fff",
        "main-blue": "#00a8f3",
        "main-pink": "#ff4081",
        "main-yellow": "#ffeb3b",
        "main-green": "#00e676",
        "main-purple": "#8a0788",
        "dark-blue": "#09091e",
        "purple-dark": "#1a011a",
        "gray-dark": "#1c1c1e",
        "gray-light": "#a9a9a9",
        "gray-medium": "#bebebe",
        "gray-pale": "#d3d5d9",
      },
      height: {
        "screen-dynamic": "calc(var(--vh) * 100)",
      },
    },

    screens: {
      sm: "640px", // make sure this is set correctly
      // other breakpoints
    },
  },

  plugins: [],
};
