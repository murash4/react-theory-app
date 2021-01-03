import { Component } from 'react'
import './Counter3.scss'
import { connect } from 'react-redux'

class Counter3 extends Component {
	render () {
		return (
			<div className="Counter3">
				<h1 className="Counter3__h1">Counter { this.props.counter }</h1>
				<hr />
				<button onClick={ () => this.props.onChange(1) }>Add</button>
				<button onClick={ () => this.props.onChange(-1) }>Sub</button>
			</div>
		)
	}
}

function mapStateToProps (state) {
	return {
		counter: state.counter3.counter
	}
}

function mapDispatchToProps (dispatch) {
	return {
		onChange: number => dispatch({
			type: 'ADD3',
			payload: number
		})
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter3)
