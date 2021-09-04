import React from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
// import stylings
import { makeStyles } from '@material-ui/styles'
import theme from '../config/theme'
// import material ui components
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles(() => ({
	paper: {
		padding: theme.spacing(4),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		[theme.breakpoints.down('md')]: {
			width: '70vw',
		},
		width: '50vw',
	},
	formDiv: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
	},
	textField: {
		marginTop: theme.spacing(4),
		width: '100%',
	},
	button: {
		marginTop: theme.spacing(4),
		width: '100%',
		height: '7vh',
	},
}))

const NewForm = ({ baseURL }) => {
	const classes = useStyles()
	const [poem, setPoem] = React.useState({
		title: '',
		author: '',
		text: '',
		votes: 0,
	})
	const [error, setError] = React.useState({
		title: '',
		author: '',
		text: '',
	})

	const validate = () => {
		const message = {
			title: '',
			author: '',
			text: '',
		}
		if (poem.title.length < 1) {
			message.title = 'Please enter a title.'
		}
		if (poem.author.length < 1) {
			message.author = 'Please enter an author.'
		}
		if (poem.text.length < 1) {
			message.text = 'Please enter the poem.'
		}

		setError(message)

		if (error.title.length < 1 && error.author.length < 1 && error.text.length < 1) {
			console.log(poem)
			axios.post(baseURL, poem)
		}
	}

	return (
		<Paper className={classes.paper}>
			<form noValidate autoComplete="off" className={classes.formDiv}>
				<Typography variant="h3" align="center">
          Submit A New Poem
				</Typography>

				{/* The title */}
				<TextField
					label="Title"
					variant="outlined"
					className={classes.textField}
					onChange={(e) => {
						setPoem({
							...poem,
							title: e.target.value,
						})
					}}
					error={error.title.length > 0}
					helperText={error.title}
				/>

				{/* The Author */}
				<TextField
					label="Author Name"
					variant="outlined"
					className={classes.textField}
					onChange={(e) => {
						setPoem({
							...poem,
							author: e.target.value,
						})
					}}
					error={error.author.length > 0}
					helperText={error.author}
				/>
				<TextField
					label="The Poem"
					multiline
					minRows={10}
					variant="outlined"
					className={classes.textField}
					onChange={(e) => {
						setPoem({
							...poem,
							text: e.target.value,
						})
					}}
					error={error.text.length > 0}
					helperText={error.text}
				/>
				<Link
					to={(error.title.length < 1 && error.author.length < 1 && error.text.length < 1) && '/'}
					style={{ textDecoration: 'none', color: '#000' }}
				>
					<Button
						variant="contained"
						color="secondary"
						disableElevation
						className={classes.button}
						onClick={validate}
					>
          submit
					</Button>
				</Link>
			</form>
		</Paper>
	)
}

NewForm.propTypes = {
	baseURL: PropTypes.string,
}

export default NewForm
