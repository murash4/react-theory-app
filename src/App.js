import { Component } from 'react'
import classes from './App.scss'
import Cars from './Cars/Cars'
import About from './About/About'
import { Route, NavLink } from 'react-router-dom'

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
							<NavLink to="/">Home</NavLink>
						</li>
						<li className="nav__li">
							<NavLink to="/about">About</NavLink>
						</li>
						<li className="nav__li">
							<NavLink to="/cars">Cars</NavLink>
						</li>
					</ul>
				</nav>
				<hr />

				<Route
					path="/"
					exact
					render={ () => <h1>Home page</h1> }
				/>

				<Route
					path="/about"
					exact
					component={ About }
				/>

				<Route
					path="/cars"
					exact
					render={ () => <Cars /> }
				/>
			</div>
		)
	}
}

export default App
