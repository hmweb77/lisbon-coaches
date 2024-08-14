/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors :{
        green1:"#397F97",
        green2: "#125362",
        green3:"#275261",
      
        yellow1:"#F4C166",
        yellow2: "#FFDE59",
        yellow3 :"#FFBD58",
        yellow4 :"#F5B736",
        blue1:"#0B9FBE",
       blue2:"#07819B" 
      },
    },
  },
  plugins: [],
};
