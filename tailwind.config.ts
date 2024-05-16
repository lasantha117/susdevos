import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        text_primary:'#111827',
        text_secondary:'#6B7280',
        text_disabled:'#D1D5DB',
        text_inverted_primary:'#FFFFFF',
        text_brand_primary:'#163300',
        text_brand_secondary:'#9FE870',
        // Add more colors as needed
      },

    spacing: {}
    },
  },
  plugins: [],
};
export default config;



// colors: {
//   // Custom colors
//   primary: '#FF0000',
//   secondary: '#00FF00',
//   black: '#000000',
//   white: '#ffffff',
//   gray: {
//     50: '#f9fafb',
//     100: '#f3f4f6',
//     200: '#e5e7eb',
//     300: '#d1d5db',
//     400: '#9ca3af',
//     500: '#6b7280',
//     600: '#4b5563',
//     700: '#374151',
//     800: '#1f2937',
//     900: '#111827',
//   },
//   red: '#ef4444',
//   yellow: '#f59e0b',
//   green: '#10b981',
//   blue: '#3b82f6',
//   indigo: '#6366f1',
//   purple: '#8b5cf6',
//   pink: '#ec4899',
// },
    