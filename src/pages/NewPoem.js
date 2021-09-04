import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
// import stylings
import { makeStyles } from '@material-ui/styles'
import theme from '../config/theme'
// import material ui components
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
// import custom components
import NewForm from '../components/NewForm'
import NavBar from '../components/NavBar'
// import icons
import ArrowBackIcon from '@material-ui/icons/ArrowBack'

const useStyles = makeStyles(() => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
	},
	backButton: {
		textDecoration: 'underline',
	},
	backArrow: {
		marginRight: theme.spacing(2),
	},
}))

const NewPoem = ({ baseURL }) => {
	const classes = useStyles()

	return (
		<NavBar>
			<Link to="/" style={{ textDecoration: 'none', color: '#000' }}>
				<Button color="primary" className={classes.backButton}>
					<ArrowBackIcon className={classes.backArrow} />
          CANCEL
				</Button>
			</Link>
			<div className={classes.root}>
				<NewForm baseURL={baseURL} />
			</div>
		</NavBar>
	)
}

NewPoem.propTypes = {
	baseURL: PropTypes.string,
}

export default NewPoem
