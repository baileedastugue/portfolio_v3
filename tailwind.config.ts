import type { Config } from 'tailwindcss';

export default {
	content: ['index.html', 'src/**/*.tsx'],
	darkMode: 'selector',
	theme: {
		fontFamily: {
			sans: ['Bebas Neue', 'sans-serif'],
			serif: ['Source Serif Pro', 'serif'],
		},
		screens: {
			sm: '390px',
			md: '768px',
			lg: '1024px',
			xl: '1440px',
		},
		extend: {
			animation: {
				reveal: 'reveal 1.5s ease-out',
			},
			backgroundImage: ({ theme }) => ({
				radial: `radial-gradient(circle, ${theme('colors.orange')} 0%, ${theme('colors.yellow')} 50%);`,
			}),
			borderRadius: {
				card: '4px',
			},
			boxShadow: {
				xs: '0 4px 6px 0 rgba(0, 0, 0, 0.25)',
			},
			colors: {
				dark: '#242424',
				light: '#F8F8F8',
				orange: '#EC8605',
				purple: '#3E40AB',
				'purple-light': '#A381C3',
				'purple-dark': '#3E40AB',
				yellow: '#FAC414',
			},
			fontFamily: {
				focus: 'Playfair Display, serif',
			},
			keyframes: {
				reveal: {
					'0%': { width: '0', marginLeft: '0' },
					'90%': { width: '100%', marginLeft: '-.5rem' },
					'100%': { marginLeft: '0' },
				},
			},
			letterSpacing: {
				display: '1.5em',
			},
			minWidth: {
				'full-plus-5rem': 'calc(100% + 5rem)',
			},
		},
	},
	plugins: [],
} satisfies Config;
