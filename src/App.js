import React from 'react'
import axios from 'axios'
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from 'react-router-dom'
// import pages
import FullPoem from './pages/FullPoem'
import Home from './pages/Home'
import NewPoem from './pages/NewPoem'

function App () {
	const [data, setData] = React.useState([])

	const baseURL = 'http://localhost:3001/api/poems'

	React.useEffect(() => {
		setTimeout(() => {
			axios.get(baseURL)
				.then((res) => {
					setData(res.data)
				})
		}, 1000)
	}, [data])

	return (
		<Router>
			<Switch>
				<Route path="/poems/:id">
					<FullPoem baseURL={baseURL} />
				</Route>
				<Route path="/new">
					<NewPoem baseURL={baseURL}/>
				</Route>
				<Route path="/">
					<Home poems={data} baseURL={baseURL} />
				</Route>
			</Switch>
		</Router>
	)
}

export default App
