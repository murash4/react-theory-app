import { Component } from 'react'
import { connect } from 'react-redux'

class CounterNew extends Component {
	render () {
		return (
			<div className="CounterNew">
				<h1>Счетчик <strong>{ this.props.counter }</strong></h1>
				<hr />

				<div className="CounterNew__actions">
					<button onClick={ this.props.onAdd }>Добавить 1</button>
					<button onClick={ this.props.onSub }>Вычесть 1</button>
				</div>
				<div className="CounterNew__actions">
					<button onClick={ () => this.props.onAddNumber(15) }>Добавить 15</button>
					<button onClick={ () => this.props.onAddNumber(-17) }>Вычесть 17</button>
				</div>
			</div>
		)
	}
}

function mapStateToProps (state) {
	return {
		counter: state.counter
	}
}

function mapDispatchToProps (dispatch) {
	return {
		onAdd: () => dispatch({
			type: 'ADD'
		}),
		onSub: () => dispatch({
			type: 'SUB'
		}),
		onAddNumber: number => dispatch({
			type: 'ADD_NUMBER',
			payload: number
		})
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterNew)
