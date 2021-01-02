import { Component } from 'react'
import Car from '../Car/Car'
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary'

class Cars extends Component {
	state = {
		cars: [
			{
				name: 'Ford',
				year: 2018
			},
			{
				name: 'Audi',
				year: 2010
			},
			{
				name: 'Mazda',
				year: 2013
			}
		],
		pageTitle: 'React components',
		showCars: true,
		clicked: false
	}

	onChangeName (name, index) {
		// const cars = this.state.cars.concat()
		const cars = [...this.state.cars]

		cars[index].name = name
		this.setState({ cars })
	}

	deleteHandler (index) {
		const cars = this.state.cars.concat()

		cars.splice(index, 1)
		this.setState({ cars })
	}

	toggleCarsHandler = () => {
		this.setState({
			showCars: !this.state.showCars
		})
	}

	goToHomePage = () => {
		this.props.history.push('/')
	}

	render () {
		return (
			<div style={{
				width: 400,
				margin: 'auto',
				paddingTop: '20px'
			}}>
				<button className="primary" onClick={ this.goToHomePage }>На главную</button>
				<hr />
				{
					this.state.showCars
						? this.state.cars.map((car, key) => (
							<ErrorBoundary
								key={ key }
							>
								<Car
									index={ key }
									name={ car.name }
									year={ car.year }
									onChangeName={ event => this.onChangeName(event.target.value, key) }
									onDelete={ this.deleteHandler.bind(this, key) }
								/>
							</ErrorBoundary>
						))
						: null
				}
			</div>
		)
	}
}

export default Cars
