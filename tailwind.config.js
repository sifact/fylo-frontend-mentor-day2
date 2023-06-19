/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            colors: {
                white: "hsl(0, 0%, 100%)",
                primary: "hsl(218, 28%, 13%)",
                footer: "hsl(216, 53%, 9%)",
                review: "hsl(219, 30%, 18%)"
                orange: {
                    primary: "hsl(26, 100%, 55%)",
                    secondary: "hsl(25, 100%, 94%)",
                },

                yellow: {
                    100: "#F55C46",
                },
                black: {
                    lightBox: "hsl(0, 0%, 0%)",
                },
            },
        },
    },
    plugins: [],
};
