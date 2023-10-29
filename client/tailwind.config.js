/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                primary: ["'Oswald', 'Arial', 'sans-serif'"],
                secondary: ["'Bebas Neue', 'Arial', 'sans-serif'"],
            },
            colors: {
                primary: 'var(--primary-color)',
                secondary: 'var(--secondary-color)',
                yellow: 'var(--yellow-color)',
                orange: 'var(--orange-color)'
                // dark: 'var(--color-dark)',
                // cream: 'var(--color-cream)',
                // 'cream-2': 'var(--color-cream-2)',
                // blue: 'var(--color-blue)',
                // grey: 'var(--color-grey)',
                // 'grey-2': 'var(--color-grey-2)',
            },
            container: {
                center: true,
            },
        },
    },
    plugins: [
        require('tailwindcss-text-fill-stroke'), // no options to configure
    ],
};
