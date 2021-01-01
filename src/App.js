import { Component } from 'react'
import classes from './App.scss'
import Cars from './Cars/Cars'
import About from './About/About'
import { Route } from 'react-router-dom'

class App extends Component {
	render () {
		const divStyle = {
			textAlign: 'center'
		}

		return (
			<div className={ classes.app } style={ divStyle }>
				<nav className="nav">
					<ul className="nav__ul">
						<li className="nav__li">
							<a href="/">Home</a>
						</li>
						<li>
							<a href="/about">About</a>
						</li>
					</ul>
				</nav>
				<hr />

				<Route
					path="/"
					exact
					render={ () => <h1>Home page</h1> }
				/>
				<About />

				<Cars />
			</div>
		)
	}
}

export default App
