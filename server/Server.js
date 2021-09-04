/* eslint-disable quotes */
const express = require('express')
const cors = require('cors')
const app = express()
app.use(express.static('build'))
app.use(cors())
app.use(express.json())

let data = [
	{
		id: 0,
		title: 'Assignment',
		author: 'Timmy Bo Bimmy',
		text: "I wish I didn't have to do this assignment,\n" +
      "It's a bad way to spend time in lockdown confinement,\n" +
      "I am struggling to keep my mental health in alignment, \n" +
      "Oh how I wish I didn't have to do this assignment.",
		votes: 20,
		liked: false,
	},
	{
		id: 1,
		title: 'Pay Me',
		author: 'The Bombastic Samtastic',
		text: "Pay me and I'll provide you a good poem,\n" +
      "It'll be so good that you'll absolutely want to show'em,\n" +
      "They'll be very original and nobody will know'em, \n" +
      "But you're going to have to pay for this amazing poem",
		votes: 23,
		liked: false,
	},
	{
		id: 2,
		title: 'My Useless Talent',
		author: 'Sambalam Bambalam',
		text: "I am sad that my only talent is rhyming,\n" +
      "I wish I had talents in things like mining,\n" +
      "Alas I missed my chance to learn thanks to my poor timing,\n" +
      "So now all I have is my useless talent  for rhyming",
		votes: 18,
		liked: false,
	},
	{
		id: 3,
		title: "Fire & Ice",
		author: "Robert Frost",
		text: "Some say the world will end in fire,\n" +
      "Some say in ice.\n" +
      "From what I’ve tasted of desire\n" +
      "I hold with those who favour fire.\n" +
      "But if it had to perish twice,\n" +
      "I think I know enough of hate\n" +
      "To say that for destruction ice\n" +
      "Is also great\n" +
      "And would suffice.",
		votes: 19,
		liked: false,
	},
	{
		id: 4,
		title: 'The Sharp And Brainy Hippopotamus',
		author: 'Billy Bob',
		text: "Whose hippopotamus is that? I think I know.\n" +
			"Its owner is quite happy though.\n" +
			"Full of joy like a vivid rainbow,\n" +
			"I watch him laugh. I cry hello.\n \n" +
			"He gives his hippopotamus a shake,\n" +
			"And laughs until her belly aches.\n" +
			"The only other sound's the break,\n" +
			"Of distant waves and birds awake.\n \n" +
			"The hippopotamus is sharp, brainy and deep,\n" +
			"But he has promises to keep,\n" +
			"After cake and lots of sleep.\n" +
			"Sweet dreams come to him cheap.\n \n" +
			"He rises from his gentle bed,\n" +
			"With thoughts of kittens in his head,\n" +
			"He eats his jam with lots of bread.\n" +
			"Ready for the day ahead.",
		votes: 27,
		liked: false,
	},
	{
		id: 5,
		title: "The Dude And The Musician",
		author: "Timmy Bo Bimmy",
		text: "See the feeding of the dude,\n" +
			"I think he's angry at the jude.\n \n" +
			"He finds it hard to see the puppy,\n" +
			"Overshadowed by the secret guppy.\n \n" +
			"Who is that snapping near the bear?\n" +
			"I think she'd like to eat the heir.\n \n" +
			"She is but an emotional musician,\n" +
			"Admired as she sits upon a composition.\n \n" +
			"Her strong car is just an octopus,\n" +
			"It needs no gas, it runs on platypus.\n \n" +
			"She's not alone she brings a dog,\n" +
			"a pet scorpion, and lots of pickerel frog.\n \n" +
			"The scorpion likes to chase a spanner,\n" +
			"Especially one that's in the personal manner.\n \n" +
			"The dude shudders at the lying giraffe\n" +
			"He want to leave but she wants the graf.",
		votes: 5,
		liked: false,
	},
	{
		id: 6,
		title: "Lose Yourself",
		author: "Eminem",
		text: "His palms are sweaty, knees weak, arms are heavy\n" +
			"There's vomit on his sweater already: Mom's spaghetti\n" +
			"He's nervous, but on the surface he looks calm and ready\n" +
			"To drop bombs, but he keeps on forgetting\n" +
			"What he wrote down, the whole crowd goes so loud\n" +
			"He opens his mouth, but the words won't come out\n" +
			"He's choking, how? Everybody's joking now\n" +
			"The clock's run out, time's up, over, blaow!\n" +
			"Snap back to reality, oh, there goes gravity, oh\n" +
			"There goes Rabbit, he choked, he's so mad but he won't\n" +
			"Give up that easy, no, he won't have it, he knows\n" +
			"His whole back's to these ropes, it don't matter, he's dope\n" +
			"He knows that but he's broke, he's so stagnant, he knows\n" +
			"When he goes back to this mobile home, that's when it's\n" +
			"Back to the lab again yo, this whole rhapsody\n" +
			"Better go capture this moment and hope it don't pass him",
		votes: 30,
		liked: false,
	},
	{
		id: 7,
		title: "Humanity",
		author: "Billy Bob",
		text: "Don't belive that poor people are unintelligent?\n" +
			"poor people are intelligent beyond belief.\n" +
			"Primitive, poor people.\n" +
			"Down, down, down into the darkness of the poor people,\n" +
			"Gently they go - the sharp, the trenchant, the smart.\n \n" +
			"All that is lowborn is not honest humanitarian,\n" +
			"honest humanitarian, by all account is noble.\n" +
			"Never forget the imperial and august honest humanitarian.\n \n" +
			"How happy is the big, complex civilization!\n" +
			"A complex civilization is elder. a complex civilization is capacious,\n" +
			"a complex civilization is immense, however.\n \n" +
			"I cannot help but stop and look at the little, historical humankind.\n" +
			"Does the historical humankind make you shiver?\n" +
			"does it?\n \n" +
			"I saw the the such improvement of my generation destroyed,\n" +
			"How I mourned the half humanization.\n" +
			"Does the half humanization make you shiver?\n" +
			"does it?\n \n" +
			"Pay attention to the entire earth,\n" +
			"the entire earth is the most greatest connection of all.\n" +
			"Down, down, down into the darkness of the entire earth,\n" +
			"Gently it goes - the maximum, the top, the best.",
		votes: 25,
		liked: false,
	},
	{
		id: 8,
		title: "The Death of the Ball Turret Gunner",
		author: "Randall Jarrell",
		text: "From my mother’s sleep I fell into the State,\n" +
			"And I hunched in its belly till my wet fur froze.\n" +
			"Six miles from earth, loosed from its dream of life,\n" +
			"I woke to black flak and the nightmare fighters.\n" +
			"When I died they washed me out of the turret with a hose.",
		votes: 15,
		liked: false,
	},
	{
		id: 9,
		title: "Ode To The Best Friend",
		author: "Sambalam Bambalam",
		text: "My wild best friend, you inspire me to write.\n" +
			"How I hate the way you feed, sleep and fly,\n" +
			"Invading my mind day and through the night,\n" +
			"Always dreaming about the deadly ai.\n \n" +
			"Let me compare you to a prompt ember?\n" +
			"You are more fancy, ready and funny.\n" +
			"Sick frost nips the robins of December,\n" +
			"And wintertime has the waste of money.\n \n" +
			"How do I hate you? Let me count the ways.\n" +
			"I hate your queer ankle, feet and elbows.\n" +
			"Thinking of your medley feet fills my days.\n" +
			"My hate for you is the romantic throes.\n \n" +
			"Now I must away with a chancy heart,\n" +
			"Remember my quick words whilst we're apart.",
		votes: 24,
		liked: false,
	},
]

app.get('/', (request, response) => {
	response.send('<h1> hello world </h1>')
})

app.get('/api/poems', (request, response) => {
	response.json(data)
})

app.get('/api/poems/:id', (request, response) => {
	const id = Number(request.params.id)
	const item = data.find(item => item.id === id)

	if (item) {
		response.json(item)
	} else {
		response.status(404).end()
	}
})

app.delete('/api/poems/:id', (request, response) => {
	const id = Number(request.params.id)
	data = data.filter(item => item.id !== id)
	response.status(204).end()
})

const generateID = () => {
	const maxID = data.length > 0
		? Math.max(...data.map(u => u.id))
		: 0
	return maxID + 1
}

app.post('/api/poems', (request, response) => {
	const body = request.body

	if (!body.title) {
		return response.status(400).json({
			error: 'title is missing',
		})
	}
	if (!body.author) {
		return response.status(400).json({
			error: 'author is missing',
		})
	}
	if (!body.text) {
		return response.status(400).json({
			error: 'text is missing',
		})
	}
	if (body.votes !== 0) {
		return response.status(400).json({
			error: 'votes is missing',
		})
	}

	const item = {
		id: generateID(),
		title: body.title,
		author: body.author,
		text: body.text,
		votes: body.votes,
	}

	data = data.concat(item)
	response.json(item)
})

app.post('/api/poems/:id', (req, res) => {
	const id = Number(req.params.id)
	const p = data.find((item) => item.id === id)
	const index = data.findIndex((item) => item.id === id)

	// If the data with requested id has been found,
	if (index >= 0) {
		// Toggle the liked status of that item
		p.liked = !p.liked

		// If the user likes it, increment the number of votes.
		// Otherwise, decrement it.
		if (p.liked) {
			p.votes++
		} else {
			p.votes--
		}

		// Set the data at that index to be the modified object.
		data[index] = p
		res.json(p)
	} else {
		return res.status(404).json({
			error: 'Item not found',
		})
	}
})

// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 3001
app.listen(PORT)
