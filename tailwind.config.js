/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // tailwind очень оптимизированный так как генерируется только то что используется
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // Дирректрии где могут находиться tailwind классы
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Создание классов которых нет изначально в talewind
      gridTemplateColumns: {
        "game-field": "repeat(3, 30px)",
      },
      gridTemplateRows: {
        "game-field": "repeat(3, 30px)",
      },
    },
  },
  plugins: [],
};
