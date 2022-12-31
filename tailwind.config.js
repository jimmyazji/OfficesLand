const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        fontFamily: {
            primary: 'Tajawal',
        },
        container: {
            padding: {
                DEFAULT: '1.5rem',
                // lg: '3rem',
            },
        },
        screens: {
            xxs: '0',
            xs: '410px',
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
        },
        extend: {
            colors: {
                primary: '#224284',
                accent: '#c4c8cb',
                minorBackground: '#161b21',
                majorBackground:'#0d1017',
                hover: '#20262d',
            },
        },
    },
    plugins: [require('@tailwindcss/forms')],
    
};


// https://cdn.dribbble.com/userupload/4099006/file/original-14c216da048113575622eec90ad982dd.png?compress=1&resize=752x