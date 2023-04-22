/** @type {import('tailwindcss').Config} */
module.exports = {
  important:true,
 content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
     backgroundColor:{
      "bgp":"#fab534",
      "bgs":"#3639d6"
     },
     colors:{
       "txtp":"#fab534",
       "txts":"#3639d6"
     }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}

