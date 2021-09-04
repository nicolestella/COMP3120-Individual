import React from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import {
	Link,
	useParams,
} from 'react-router-dom'
import { withRouter } from 'react-router'
// import stylings
import { makeStyles } from '@material-ui/styles'
import theme from '../config/theme'
// import material ui components
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
// import icons
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
// import custom components
import FullPoemCard from '../components/FullPoemCard'
import NavBar from '../components/NavBar'

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},
	poemDiv: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},
	homeButton: {
		marginTop: theme.spacing(2),
	},
}))

/**
 *
 * @param {String} baseURL: The Base URL used to make GET and POST requests.
 * @returns The page displaying the full details of a given poem.
 */
const FullPoem = ({ baseURL }) => {
	const id = useParams().id
	const [foundID, setFoundID] = React.useState('')
	const [poem, setPoem] = React.useState({})
	const classes = useStyles()

	React.useEffect(() => {
		if (id) {
			setTimeout(() => {
				// Make a GET request using the given id
				axios.get(baseURL + `/${id}`)
					.then((res) => {
						if (res.status !== 404) {
							setFoundID('y')
							setPoem(res.data)
						} else {
							setFoundID('n')
						}
					})
			}, 1000)
		}
	}, [poem])

	return (
		<NavBar hasButton>
			<div className={classes.root}>
				<Link to={'/'} style={{ textDecoration: 'none', color: '#000' }}>
					<Button color="primary">
						<ArrowBackIcon style={{ marginRight: theme.spacing(2) }} />
						BACK
					</Button>
				</Link>
				<div className={classes.poemDiv}>
					{/* If poem id is undefined, show the loading sign */}
					{poem.id === undefined && (
						<Typography>Loading...</Typography>
					)}

					{/* If poem id is found and the object is found, display it */}
					{foundID === 'y' && poem.id !== undefined &&
					(
						<FullPoemCard poem={poem} baseURL={baseURL}/>
					)
					}

					{/* If object is not found, display the message */}
					{foundID === 'n' &&
					(
						<Typography>
					This poem does not exist.
						</Typography>
					)}
				</div>
			</div>
		</NavBar>
	)
}

FullPoem.propTypes = {
	baseURL: PropTypes.string.isRequired,
}

export default withRouter(FullPoem)
