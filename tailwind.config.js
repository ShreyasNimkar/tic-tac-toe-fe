/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        faintYellow: {
          600: "#FFE79E",
          900: "#F2C94C",
        },
        faintBlue: {
          900: "#2F80ED",
          600: "#2C8DFF",
        },
        faintRed: {
          900: "#FF4F4F",
          600: "#EB5757",
        },
        faintGray: {
          900: "#E0E0E0",
        },
        smokeGray: {
          900: "#F4F4F4",
        },
        faintGreen: {
          900: "#6FCF97",
        },
        textGray: {
          900: "#333333",
          500: "#rgba(51, 51, 51, 0.5)",
        },
      },
    },
  },
  plugins: [],
};
