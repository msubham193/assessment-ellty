import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom-all': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 -4px 6px -1px rgba(0, 0, 0, 0.01), 4px 0 6px -1px rgba(0, 0, 0, 0.1), -4px 0 6px -1px rgba(0, 0, 0, 0.1)', // Shadow in all directions
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [function({ addUtilities }:any) {
    addUtilities({
      '.no-scrollbar': {
        /* Hide scrollbar for Webkit browsers */
        '-webkit-overflow-scrolling': 'touch',
        'scrollbar-width': 'none',
        '&::-webkit-scrollbar': {
          display: 'none',
        },
      },
      '.scrollbar-none': {
        'scrollbar-width': 'none', /* Hide scrollbar for Firefox */
        '&::-webkit-scrollbar': {
          display: 'none', /* Hide scrollbar for Webkit browsers */
        },
      },
    }, ['responsive']);
  }],
};
export default config;
