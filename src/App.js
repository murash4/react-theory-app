import { Component } from 'react'
import classes from './App.scss'
import Cars from './Cars/Cars'
import About from './About/About'

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

				<h1>{ this.props.title }</h1>

				<About />

				<Cars props={ this.props } />
			</div>
		)
	}
}

export default App
