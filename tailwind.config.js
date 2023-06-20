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
                reviewBg: "hsl(219, 30%, 18%)",
                signupBg: "hsl(217, 28%, 15%)",
                Cyan: "hsl(176, 68%, 64%)",
                Blue: "hsl(198, 60%, 50%)",
                lightRed: "hsl(0, 100%, 63%)",
            },
        },
    },
    plugins: [],
};
