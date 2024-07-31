import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "tokyo-blue": "#171d35", // Base color for Tokyo Night
        "tokyo-dark": "#040a20", // Darker background
        "tokyo-bright-blue": "#2776f9", // Bright accent
        "tokyo-accent": "#7aa2f7", // Accent color
        "tokyo-light": "#c0caf5", // Light text color
        "tokyo-gray": "#3b4261", // Grayish background
        "tokyo-red": "#cf434c", // Red accents
        "tokyo-yellow": "#e0af68", // Yellow accents
        "tokyo-green": "#9ece6a", // Green accents
        "tokyo-purple": "#bb9af7", // Purple accents
        "tokyo-cyan": "#7dcfff", // Cyan accents
        "tokyo-orange": "#ff9e64", // Orange accents
        "tokyo-dull-gray": "#646c87", // Dull accents
      },
      boxShadow: {
        "tokyo-bright": "0 5px 30px -4px rgb(39 118 249 / 0.6);",
      },
    },
  },
  plugins: [],
};
export default config;
