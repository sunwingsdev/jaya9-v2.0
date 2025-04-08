/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
  		boxShadow: {
  			'3xl-blue': '0 10px 20px rgba(59, 130, 246, 0.9)',
  			'exchange-shadow': 'inset 5px 5px 10px rgba(20, 128, 94, 0.7)'
  		},
  		colors: {
  			'common-orange': '#f56908',
  			'common-blue': '#142590',
  			'table-gray': '#b9b9b9',
  			'bg-jaya9-logo-color': '#303030',
  			'exchange-color': 'rgba(6, 12, 6, 0.5)',
  			'jaya-bg-color': 'rgba(80, 255, 219, .24)',
  			'jaya-9-color': '#467dc6',
  			whatsappcolor: '#4caf50',
  			uttoloncolor: '#514bbe',
  			memberinfotextcolor: '#fb8c00',
  			mobileAppButtonColor: '#9584ff',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		backgroundColor: {
  			amanotcardcolor: '#f1f1f1',
  			memberProfileColor: '#d4ffff',
  			informationBackground: '#d5d5d5',
  			toolbarbackground: '#9584ff',
  			homeTabColor: '#EAEAEA'
  		},
  		backgroundImage: {
  			'custom-orange': 'linear-gradient(90deg, #fbc103 0%, #f79604 15%, #f79604 30%, #fbc103 55%, #fbc103)'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}

