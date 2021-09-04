import React from 'react'
import PropTypes from 'prop-types'
// import stylings
import { makeStyles } from '@material-ui/styles'
// import material ui components
import Grid from '@material-ui/core/Grid'
// import custom components
import NavBar from '../components/NavBar'
import PoemCard from '../components/PoemCard'

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
	},
}))

/**
 *
 * @param {Array} poems: Array of poem objects.
 * @param {String} baseURL: The Base URL used to make GET and POST requests.
 * @returns The Homepage.
 */
const Home = ({ poems, baseURL }) => {
	const classes = useStyles()

	return (
		<div className={classes.root}>
			<NavBar hasButton>
				<Grid container>
					{poems.map((item) => (
						<Grid item key={item.id} xs={12} sm={6} md={4}>
							<PoemCard poem={item} baseURL={baseURL} />
						</Grid>
					))}
				</Grid>
			</NavBar>
		</div>
	)
}

Home.propTypes = {
	poems: PropTypes.array.isRequired,
	baseURL: PropTypes.string,
}

export default Home
