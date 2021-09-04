import React from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import clsx from 'clsx'
// import stylings
import { makeStyles } from '@material-ui/styles'
import theme from '../config/theme'
// import material ui components
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
// import icons
import FavoriteIcon from '@material-ui/icons/Favorite'

const useStyles = makeStyles(() => ({
	card: {
		display: 'flex',
		flexDirection: 'column',
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

const FullPoemCard = ({ poem, baseURL }) => {
	const classes = useStyles()

	const newLine = (text) => {
		const t = text
		return t.split('\n').map((str, id) => (
			<Typography key={id} align="center">
				{str}
			</Typography>
		))
	}

	const onLike = (id) => {
		axios.post(baseURL + `/${id}`)
	}

	return (
		<div style={{ display: 'flex', flexDirection: 'row' }}>
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
