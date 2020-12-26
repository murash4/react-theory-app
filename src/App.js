import React, { Component } from 'react'
import './App.css'

class App extends Component {
	render () {
		return (
			<div className="App">
				<h1>Hellow world</h1>
			</div>
			// React.createElement(
			// 	'div',
			// 	{
			// 		className: 'App'
			// 	},
			// 	React.createElement(
			// 		'h1',
			// 		null,
			// 		'Hellow world'
			// 	)
			// )
		)
	}
}

export default App;
