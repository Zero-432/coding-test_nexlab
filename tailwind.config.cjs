/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                montserrat: ['Montserrat', 'sans-serif'],
            },
        },
    },
    // eslint-disable-next-line import/no-extraneous-dependencies, global-require
    plugins: [require('tailwind-scrollbar')],
}
