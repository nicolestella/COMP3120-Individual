import { createMuiTheme } from '@material-ui/core/styles'
import '@fontsource/hahmlet'

const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#FF7480',
		},
		secondary: {
			main: '#A8E6CF',
		},
	},
	typography: {
		fontFamily: [
			'Hahmlet',
			'-apple-system',
			'BlinkMacSystemFont',
			'"Segoe UI"',
			'Roboto',
			'"Helvetica Neue"',
			'Arial',
			'sans-serif',
			'"Apple Color Emoji"',
			'"Segoe UI Emoji"',
			'"Segoe UI Symbol"',
		].join(','),
	},
})

export default theme
