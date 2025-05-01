/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  darkMode: "class",
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
};

export default tailwindConfig;
