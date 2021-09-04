import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import ReactMarkdown from 'react-markdown'
// import stylings
import { makeStyles } from '@material-ui/styles'
import theme from '../config/theme'
// import material-ui components
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
// import icons
import FavoriteIcon from '@material-ui/icons/Favorite'

const useStyles = makeStyles((theme) => ({
	card: {
		margin: theme.spacing(2),
	},
	actionsArea: {
		padding: theme.spacing(2),
	},
	title: {
		marginBottom: theme.spacing(2),
	},
	poem: {
		marginTop: theme.spacing(2),
	},
	actions: {
		justifyContent: 'flex-end',
		backgroundColor: theme.palette.secondary.main,
	},
	likedHeart: {
		color: '#bd3345',
	},
}))

/**
 *
 * @param {Object} poem: The poem object containing title, author, text, votes, and liked.
 * @param {String} baseURL: The Base URL used to make GET and POST requests.
 * @returns A small poem preview card showing only 2 lines of the poem.
 */
const PoemCard = ({ poem, baseURL }) => {
	const classes = useStyles()

	// A function to make a new line for each '\n'
	const newLine = (text) => {
		const t = text
		return t.split('\n', 2).map((str, id) => (
			<ReactMarkdown key={id}>
				{str}
			</ReactMarkdown>
		))
	}

	// Send a POST request to update the votes when user likes the poem
	const onLike = (id) => {
		axios.post(baseURL + `/${id}`)
	}

	return (
		<Card className={classes.card}>

			{/* When the card is clicked, navigate to the full poem page */}
			<Link to={`poems/${poem.id}`} style={{ textDecoration: 'none', color: '#000' }}>
				<CardActionArea className={classes.actionsArea}>
					<Typography variant="h5" className={classes.title} noWrap>
						{poem.title}
					</Typography>
					<Typography color="textSecondary">
					By {poem.author}
					</Typography>
					<Divider />
					<div className={classes.poem}>
						{newLine(poem.text)}
						<Typography>
            ...
						</Typography>
					</div>
				</CardActionArea>
			</Link>

			{/* The bottom section is where the user can like/upvote the poem */}
			<CardActions className={classes.actions}>
				<IconButton edge="end" onClick={() => onLike(poem.id)}>
					<FavoriteIcon className={clsx(poem.liked && classes.likedHeart)}/>
				</IconButton>
				<Typography style={{ marginRight: theme.spacing(2) }}>
					{poem.votes}
				</Typography>
			</CardActions>
		</Card>
	)
}

PoemCard.propTypes = {
	poem: PropTypes.object.isRequired,
	baseURL: PropTypes.string,
}

export default PoemCard
