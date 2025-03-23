/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl-blue': '0 10px 20px rgba(59, 130, 246, 0.9)',
        'exchange-shadow': 'inset 5px 5px 10px rgba(20, 128, 94, 0.7)', 
      },
      colors: { 
        'common-orange': '#f56908',
        'common-blue' : '#142590',
        'table-gray':'#b9b9b9',
        'bg-jaya9-logo-color' : '#303030',
        'exchange-color': 'rgba(6, 12, 6, 0.5)',
        'jaya-bg-color' : 'rgba(80, 255, 219, .24)',
        'jaya-9-color':'#467dc6',
        'whatsappcolor':'#4caf50',
        'uttoloncolor':'#514bbe',
        'memberinfotextcolor':'#fb8c00',
        'mobileAppButtonColor':'#9584ff',
        
        
      },
      backgroundColor:{
       'amanotcardcolor':'#f1f1f1',
        memberProfileColor: "#d4ffff",
        informationBackground: "#d5d5d5",
        toolbarbackground: "#9584ff",
        'homeTabColor':'#EAEAEA',
        
      },
      backgroundImage: {
        'custom-orange': "linear-gradient(90deg, #fbc103 0%, #f79604 15%, #f79604 30%, #fbc103 55%, #fbc103)",
      },
    },
  },
  plugins: [],
}

