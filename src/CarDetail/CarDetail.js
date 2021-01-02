import { Component } from 'react'

export default class CarDetail extends Component {
	render () {
		return (
			<div>
				<h1>{ this.props.match.params.name }</h1>
			</div>
		)
	}
}
