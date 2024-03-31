  {import('tailwindcss').Config} 
module.exports = {

  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.no-scrollbar': {
          /* For Webkit-based browsers */
          '::-webkit-scrollbar': {
            display: 'none'
          },
          /* For IE and Edge */
          '-ms-overflow-style': 'none',  
          /* For Firefox */
          'scrollbar-width': 'none'  
        }
      };

      addUtilities(newUtilities);
    }
  ],
};
