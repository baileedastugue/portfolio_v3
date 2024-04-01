/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		screens: {
			// sm: '425px',
			md: '768px',
			lg: '1024px',
			xl: '1440px',
		},
		colors: {
			purple: '#3E40AB',
			'purple-light': '#A381C3',
			orange: '#EC8605',
			yellow: '#FAC414',
			dark: '#242424',
			light: '#F8F8F8',
		},
		fontFamily: {
			sans: ['Bebas Neue', 'sans-serif'],
			serif: ['Source Serif Pro', 'serif'],
		},
		extend: {
			fontFamily: {
				focus: 'Playfair Display, serif',
			},
			letterSpacing: {
				display: '24px',
			},
		},
	},
	plugins: [],
};
