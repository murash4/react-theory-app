import { Component } from 'react'
import classes from './App.scss'
import Cars from './Cars/Cars'
import About from './About/About'
import { Route, NavLink, Switch } from 'react-router-dom'
import CarDetail from './CarDetail/CarDetail'

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
							<NavLink
								to="/"
								exact
								className="nav__link"
								activeClassName="nav__link--active"
							>Home</NavLink>
						</li>
						<li className="nav__li">
							<NavLink
								to={{
									pathname: '/about',
									search: '?a=1&b=2',
									hash: 'wfm-hash'
								}}
								className="nav__link"
								activeStyle={{
									color: 'blue'
								}}
							>About</NavLink>
						</li>
						<li className="nav__li">
							<NavLink
								to="/cars"
								className="nav__link"
							>Cars</NavLink>
						</li>
					</ul>
				</nav>
				<hr />

				<Switch>
					<Route
						path="/"
						exact
						render={ () => <h1>Home page</h1> }
					/>

					<Route
						path="/about"
						component={ About }
					/>

					<Route
						path="/cars/:name"
						exact
						component={ CarDetail }
					/>

					<Route
						path="/cars"
						component={ Cars }
					/>
				</Switch>

			</div>
		)
	}
}

export default App
