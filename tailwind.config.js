/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {},
		colors: {
			'white': '#FFFFFF',
			'gray': {
				100: '#E1E1E6',
				200: '#C4C4CC',
				300: '#7C7C8A',
				400: '#323238',
				500: '#29292E',
				600: '#202024',
				700: '#121214',
			},
			'red': '#F75A68',
			'red-dark': '#AA2834',
			'green': {
				500: '#00B37E',
				700: '#00875F',
			},
			'fontSize': {
				sm: '0.875rem',
				base: '1rem',
				lg: '1.125rem',
				xl: '1.5rem',
			},
			'fontFamily': {
				bold: ['Roboto_700Bold', 'sans-serif'],
				regular: ['Roboto_400Regular', 'sans-serif'],
			},
		},
	},
	plugins: [],
};
