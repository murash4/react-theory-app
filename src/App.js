import { Component } from 'react'
import './App.css'
import Car from './Car/Car'

class App extends Component {
	state = {
		cars: [
			{
				name: 'Ford',
				year: 2018
			},
			{
				name: 'Audi',
				year: 2016
			},
			{
				name: 'Mazda',
				year: 2010
			}
		],
		pageTitle: 'React components',
		showCars: false
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

	render () {
		const divStyle = {
			textAlign: 'center'
		}

		return (
			<div style={ divStyle }>
				<h1>{ this.state.pageTitle }</h1>
				<button onClick={ this.toggleCarsHandler }>Toggle cars</button>

				{
					this.state.showCars
						? this.state.cars.map((car, key) => (
								<Car
									key={ key }
									name={ car.name }
									year={ car.year }
									onChangeName={ event => this.onChangeName(event.target.value, key) }
									onDelete={ this.deleteHandler.bind(this, key) }
								/>
							))
						: null
				}
			</div>
		)
	}
}

export default App;
