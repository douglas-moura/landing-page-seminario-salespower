/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{html,js}",
        "./index.html",
    ],
    theme: {
        extend: {
            backgroundImage: {
                'colorido': "url('/src/assets/img/bg-padrao-textura.webp')",
                'executiva': "url('/src/assets/img/executiva.webp')"
            },
        },
        fontFamily: {
            'montserrat': ['Montserrat', 'sans-serif']
        },
        colors: {
            'azul-escuro': '#1B1464',
            'vermelho': '#cc1a0a',
            'preto': '#252525',
            'branco': '#FEFEFD',
        }
    },
    plugins: [],
}