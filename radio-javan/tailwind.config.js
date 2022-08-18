/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
        screens: {
            'xs': '320px',
            'sm': '375px',
            'md': '425px',
            'lg': '768px',
            'xl': '1024px',
            '2xl': '1440px',
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
    ],
}