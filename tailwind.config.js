/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./*.{html,js}"],
   theme: {
      extend: {
         colors: {
            "color-1": "#353535",
            "color-2": "#3C6E71",
            "color-3": "#FFFFFF",
            "color-4": "#D9D9D9",
            "color-5": "#284B63",
            "color-6": "#efefef",
         },
         fontFamily: {
            poppins: "'Poppins', sans-serif",
         },
      },
   },
   plugins: [],
};
