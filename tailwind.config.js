/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './templates/**/*.html',
    ],
    plugins: [
        require('@tailwindcss/typography'),
        require('daisyui'),
    ],
    theme: {
        extend: {},
    },
    daisyui: {
        themes: [
            // 'cupcake',
            'dracula',
        ],
    },
    // darkMode : ['class', '[data-theme]="dracula"'],
}

