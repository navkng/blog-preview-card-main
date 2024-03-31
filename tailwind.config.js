/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html"],
    theme: {
        fontFamily: {
            fig: ["Figtree", "sans-serif"]
        },
        extend: {
            colors: {
                yellowish: "#f4d04e"
            },
            boxShadow: {
                normal: "8px 10px 0px 1px rgb(0 0 0 / 1)",
                hover: "8px 10px 0px 2px rgb(0 0 0 / 1)"
            }
        }
    },
    plugins: []
};
