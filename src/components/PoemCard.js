import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import clsx from 'clsx'
import axios from 'axios'
// import stylings
import { makeStyles } from '@material-ui/styles'
import theme from '../config/theme'
// import material-ui components
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import Divider from '@material-ui/core/Divider'
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

const PoemCard = ({ poem, onClick, baseURL }) => {
	const classes = useStyles()

	const newLine = (text) => {
		const t = text
		return t.split('\n', 2).map((str, id) => (
			<Typography key={id} noWrap>
				{str}
			</Typography>
		))
	}

	const onLike = (id) => {
		axios.post(baseURL + `/${id}`)
	}

	return (
		<Card className={classes.card}>
			<Link to={`poems/${poem.id}`} style={{ textDecoration: 'none', color: '#000' }}>
				<CardActionArea className={classes.actionsArea} onClick={onClick}>
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
	onClick: PropTypes.func,
	baseURL: PropTypes.string,
}

export default PoemCard
