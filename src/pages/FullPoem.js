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
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
// import icons
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
// import custom components
import NavBar from '../components/NavBar'
import FullPoemCard from '../components/FullPoemCard'

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

const FullPoem = ({ baseURL }) => {
	const id = useParams().id
	const [foundID, setFoundID] = React.useState('')
	const [poem, setPoem] = React.useState({})
	const classes = useStyles()

	const newLine = (text) => {
		const t = text
		return t.split('\n').map((str, id) => (
			<Typography key={id} align="center">
				{str}
			</Typography>
		))
	}

	React.useEffect(() => {
		if (id) {
			setTimeout(() => {
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
					{poem.id === undefined && (
						<Typography>Loading...</Typography>
					)}
					{foundID === 'y' && poem.id !== undefined &&
					(
						<FullPoemCard poem={poem} baseURL={baseURL}/>
					)
					}

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
