/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{html,js}",
        "./index.html",
    ],
    theme: {
        extend: {
            backgroundImage: {
                'colorido': "url('/src/assets/img/bg-padrao-textura.jpg')",
                'executiva': "url('/src/assets/img/executiva.jpg')"
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