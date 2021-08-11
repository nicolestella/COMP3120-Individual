import { createMuiTheme } from '@material-ui/core/styles'
import '@fontsource/hahmlet'

const theme = createMuiTheme({
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
