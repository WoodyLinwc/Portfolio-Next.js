/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#457efa",
                secondary: "#0BCEAF",
            },
            fontFamily: {
                roboto: ["Roboto", "sans-serif"],
            },
            animation: {
                blink: "blink 1s infinite",
            },
            keyframes: {
                blink: {
                    "0%, 50%": { opacity: "1" },
                    "51%, 100%": { opacity: "0" },
                },
            },
        },
    },
    plugins: [],
};
