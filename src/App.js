import React from 'react'
// styling
import { makeStyles } from '@material-ui/styles'
// import material ui components
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
	},
	heading: {
		alignItems: 'flex-start',
		justifyContent: 'flex-start',
	},
}))

function App () {
	const classes = useStyles()

	return (
		<div className={classes.root}>
			<Typography variant="h3">
				Poetique
			</Typography>
		</div>
	)
}

export default App
