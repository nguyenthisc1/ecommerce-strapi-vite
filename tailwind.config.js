/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                primary: ["'Oswald', 'Arial', 'sans-serif'"],
                secondary: ["'Bebas Neue', 'Arial', 'sans-serif'"],
            },
            container: {
                center: true,
            },
        },
    },
};
