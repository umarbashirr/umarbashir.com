/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // <-- Add this line
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // container: {
    //   screens: {
    //     sm: "400px",
    //     md: "768px",
    //     lg: "1024px",
    //     xl: "1180px",
    //     "2xl": "1536px",
    //   },
    // },
    extend: {
      colors: {
        "primary-color": "#ff5862",
        "secondary-color": "#f81f01",
        "dark-primary-color": "#df2050",
        "dark-color": "#1f1f25",
        "light-color": "#1d1d24bf",
      },
      keyframes: {
        moveBottomToTop: {
          "0%, ": { bottom: 0 },
          "100%": { top: 0 },
        },
      },
      animation: {
        moveSlow: "moveBottomToTop 3s linear infinite",
      },
    },
  },
  plugins: [],
};
