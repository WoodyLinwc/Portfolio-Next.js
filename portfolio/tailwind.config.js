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
                // Add the spinner-grow animation
                "spinner-grow": "spinner-grow 0.75s linear infinite",
                // Add shimmer animation for lazy loading
                shimmer: "shimmer 1.5s infinite",
            },
            keyframes: {
                blink: {
                    "0%, 50%": { opacity: "1" },
                    "51%, 100%": { opacity: "0" },
                },
                // Add spinner-grow keyframes
                "spinner-grow": {
                    "0%": {
                        transform: "rotate(0deg)",
                        opacity: "1",
                    },
                    "50%": {
                        opacity: "0.5",
                    },
                    "100%": {
                        transform: "rotate(360deg)",
                        opacity: "1",
                    },
                },
                // Add shimmer effect for lazy loading placeholders
                shimmer: {
                    "0%": { "background-position": "-200% 0" },
                    "100%": { "background-position": "200% 0" },
                },
            },
        },
    },
    plugins: [],
};
