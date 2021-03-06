import React from 'react'
import axios from 'axios'
import clsx from 'clsx'
import PropTypes from 'prop-types'
// import stylings
import { makeStyles } from '@material-ui/styles'
import theme from '../config/theme'
// import material ui components
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
// import icons
import FavoriteIcon from '@material-ui/icons/Favorite'
import ReactMarkdown from 'react-markdown'

const useStyles = makeStyles(() => ({
	card: {
		display: 'flex',
		flexDirection: 'column',
		alignSelf: 'center',
		justifySelf: 'center',
		marginTop: '12vh',
	},
	title: {
		margin: theme.spacing(2),
	},
	poemDiv: {
		margin: theme.spacing(4),
	},
	actions: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'flex-end',
	},
	img: {
		width: '100vw',
		[theme.breakpoints.down('sm')]: {
			width: '100%',
			height: '100vh',
		},
		position: 'fixed',
		zIndex: '-1',
		left: 0,
		right: 0,
	},
	likedHeart: {
		color: '#bd3345',
	},
}))

/**
 *
 * @param {Object} poem: A poem object with id, title, author, text, votes, and liked.
 * @param {String} baseURL: The base URL used to make GET and POST requests.
 * @returns The card containing the full poem details and the image background.
 */
const FullPoemCard = ({ poem, baseURL }) => {
	const classes = useStyles()

	// Function to render a new line for each '\n' found
	const newLine = (text) => {
		const t = text
		return t.split('\n').map((str, id) => (
			<ReactMarkdown key={id}>
				{str}
			</ReactMarkdown>
		))
	}

	// Function to like/upvote the poem
	const onLike = (id) => {
		axios.post(baseURL + `/${id}`)
	}

	return (
		<div style={{ display: 'flex', flexDirection: 'row' }}>
			{/* The poem card */}
			<Card className={classes.card}>
				<CardContent>
					<Typography variant="h3" align="center" className={classes.title}>
						{poem.title}
					</Typography>
					<Typography variant="h6" color="textSecondary" align="center">
					By {poem.author}
					</Typography>
					<Divider />
					<div className={classes.poemDiv}>
						{newLine(poem.text)}
					</div>
				</CardContent>
				<CardActions className={classes.actions}>
					<IconButton onClick={() => onLike(poem.id)}>
						<FavoriteIcon className={clsx(poem.liked && classes.likedHeart)}/>
					</IconButton>
					<Typography style={{ marginRight: theme.spacing(2) }}>
						{poem.votes}
					</Typography>
				</CardActions>
			</Card>

			{/* The image background */}
			<img
				src={`https://source.unsplash.com/collection/12221199/?sig=${poem.id}`}
				className={classes.img}
			/>
		</div>
	)
}

FullPoemCard.propTypes = {
	poem: PropTypes.object.isRequired,
	baseURL: PropTypes.string.isRequired,
}

export default FullPoemCard
