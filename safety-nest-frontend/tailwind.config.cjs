/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    container: {
      center: true,
      padding: "1.5rem",
    },

    extend: {
      colors: {
        brand: {
          cream: "#F7F3E2",
          brown: "#5A3A22",
          brownLight: "#B46E36",
          blue: "#91AFB8",
          orange: "#E7A33A",
          white: "#FFFFFF",
        },
      },

      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },

      boxShadow: {
        soft: "0 4px 12px rgba(0,0,0,0.06)",
        medium: "0 6px 20px rgba(0,0,0,0.10)",
      },

      borderRadius: {
        soft: "14px",
      },
    },
  },

  plugins: [],
};
