import { Component } from 'react'

export default class CounterNew extends Component {
	state = {
		counter: 0
	}

	updateCounter (value) {
		this.setState({
			counter: this.state.counter + value
		})
	}

	render () {
		return (
			<div className="CounterNew">
				<h1>Счетчик <strong>{ this.state.counter }</strong></h1>
				<hr />

				<div className="CounterNew__actions">
					<button onClick={ () => this.updateCounter(1) }>Добавить 1</button>
					<button onClick={ () => this.updateCounter(-1) }>Вычесть 1</button>
				</div>
			</div>
		)
	}
}
