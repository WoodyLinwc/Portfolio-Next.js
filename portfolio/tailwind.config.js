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
                primary: "#0BCEAF",
                secondary: "#6c757d",
                dark: "#343a40",
            },
            fontFamily: {
                sans: ["Roboto", "sans-serif"],
            },
            animation: {
                "bounce-slow": "bounce 2s infinite",
                "pulse-border": "pulse-border 1.5s ease-out infinite",
            },
            keyframes: {
                "pulse-border": {
                    "0%": { transform: "scale(1)", opacity: "1" },
                    "100%": { transform: "scale(2)", opacity: "0" },
                },
            },
        },
    },
    plugins: [],
};
