import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
// import stylings
import { makeStyles } from '@material-ui/styles'
// import material ui components
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

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

/**
 *
 * @param {Node} children: The children nested inside the NavBar object.
 * @param {Boolean} hasButton: Does it have the "Add New" button or not.
 * @returns The AppBar at the top of the screen
 */
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

			{children}
		</div>
	)
}

NavBar.propTypes = {
	children: PropTypes.node,
	hasButton: PropTypes.bool,
}

export default NavBar
