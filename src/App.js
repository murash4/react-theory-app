import { Component } from 'react'
import classes from './App.scss'
import Cars from './Cars/Cars'
import About from './About/About'
import { Route, NavLink, Switch, Redirect } from 'react-router-dom'
import CarDetail from './CarDetail/CarDetail'
import CounterNew from "./CounterNew/CounterNew";

class App extends Component {
	state = {
		isLoggedIn: false
	}

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
									pathname: '/about'
									// search: '?a=1&b=2',
									// hash: 'wfm-hash'
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
						<li className="nav__li">
							<NavLink
								to="/counter"
								className="nav__link"
							>Counter</NavLink>
						</li>
					</ul>
				</nav>

				<hr />

				{
					!this.state.isLoggedIn
					? <div>
							<button onClick={ () => this.setState({ isLoggedIn: true }) }>Вход</button>
							<hr />
						</div>
					: null
				}

				<Switch>
					<Route
						path="/"
						exact
						render={ () => <h1>Home page</h1> }
					/>

					{
						this.state.isLoggedIn
						? <Route
								path="/about"
								component={ About }
							/>
						: null
					}

					<Route
						path="/cars/:name"
						exact
						component={ CarDetail }
					/>

					<Route
						path="/cars"
						component={ Cars }
					/>

					<Route
						path="/counter"
						component={ CounterNew }
					/>

					{/*<Route*/}
					{/*	render={ () => <h1 style={{ color: 'red' }}>404 not found</h1> }*/}
					{/*/>*/}
					<Redirect
						to={ '/' }
					/>
				</Switch>

			</div>
		)
	}
}

export default App
