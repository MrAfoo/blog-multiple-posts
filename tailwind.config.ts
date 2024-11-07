// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}', // This will include all files inside src directory
    './pages/**/*.{js,ts,jsx,tsx}', // This will include all pages
    './app/**/*.{js,ts,jsx,tsx}', // If you have any components or pages in `app` folder
  ],
  
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
