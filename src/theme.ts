import { createTheme } from '@mui/material'

export const theme = createTheme({
	spacing: 10,
	palette: {
		primary: {
			main: '#f00',
		},
	},
	typography: {
		h1: {
			fontSize: '2.5rem',
			marginBottom: 20,
			fontWeight: 600,
		},
		h2: {
			fontSize: '1.5rem',
			marginBottom: 15,
			fontWeight: 500,
		},
	},
})
