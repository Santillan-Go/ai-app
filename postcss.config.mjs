/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {}, // Asegúrate de que esté escrito como "tailwindcss"

    "postcss-flexbugs-fixes": {},
    "postcss-preset-env": {
      autoprefixer: {
        flexbox: "no-2009",
      },
      stage: 3,
      features: {
        "custom-properties": true,
      },
    },
    cssnano: {
      preset: "default", // Ensures a safe minification
    },
  },
};

export default config;
