import React from 'react'
import './Car.scss'
import withClass from '../hoc/withClass'
import PropTypes from 'prop-types'

class Car extends React.Component {

	constructor (props) {
		super(props)

		this.inputRef = React.createRef()
	}

	componentDidMount () {
		if (this.props.index === 1) {
			// this.inputRef.focus()
			this.inputRef.current.focus()
		}
	}

	render () {
		const inputClasses = ['input']

		if (this.props.name) {
			inputClasses.push('green')
		} else {
			inputClasses.push('red')
		}

		if (this.props.name.length > 4) {
			inputClasses.push('bold')
		}

		return (
			<React.Fragment>
				<h3>Car name: { this.props.name }</h3>
				<p>Year: <strong>{ this.props.year }</strong></p>
				<input
					// ref={ inputRef => this.inputRef = inputRef }
					ref={ this.inputRef }
					type="text"
					onChange={ this.props.onChangeName }
					value={ this.props.name }
					className={ inputClasses.join(' ') }
				/>
				<button onClick={ this.props.onDelete }>Delete</button>
			</React.Fragment>
		)
	}
}

Car.propTypes = {
	index: PropTypes.number,
	name: PropTypes.string.isRequired,
	year: PropTypes.number,
	onChangeName: PropTypes.func,
	onDelete: PropTypes.func
}

export default withClass(Car, 'car')
