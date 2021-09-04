import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
// import stylings
import { makeStyles } from '@material-ui/styles'
// import material ui components
import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import theme from '../config/theme'

const useStyles = makeStyles((theme) => ({
	appBar: {
		height: '10vh',
		display: 'flex',
		flexDirection: 'row',
		backgroundColor: '#fff',
		color: '#000',
		alignItems: 'center',
		margin: 0,
	},
	title: {
		flexGrow: 1,
		marginLeft: theme.spacing(2),
	},
	button: {
		width: '200px',
		[theme.breakpoints.down('sm')]: {
			width: '150px',
		},
		height: '40px',
		marginRight: theme.spacing(3),
	},
}))

const NavBar = ({ children, hasButton }) => {
	const classes = useStyles()

	return (
		<div>
			<AppBar className={classes.appBar} elevation={0} position="sticky">
				<Typography variant="h3" className={classes.title}>
        Poetique
				</Typography>
				{hasButton && (
					<Link to={'/new'} style={{ textDecoration: 'none', color: '#000' }}>
						<Button
							variant="outlined"
							color="primary"
							className={classes.button}
							disableElevation>
					ADD NEW
						</Button>
					</Link>
				)}
			</AppBar>

			<div>
				{children}
			</div>
		</div>
	)
}

NavBar.propTypes = {
	children: PropTypes.node,
	hasButton: PropTypes.bool,
}

export default NavBar
