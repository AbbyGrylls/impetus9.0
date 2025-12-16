import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ["var(--font-orbitron)", "sans-serif"], // Futuristic Title
        montserrat: ["var(--font-montserrat)", "sans-serif"], // Clean Body text
      },
      colors: {
        "impetus-orange": "#FF4500", // Fire
        "impetus-bronze": "#CD7F32", // Industrial
        "impetus-cyan": "#00FFFF",   // Digital
        "impetus-deep": "#0B3D91",   // Space
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        'spin-slow': 'spin 12s linear infinite',
      }
    },
  },
  plugins: [],
};
export default config;