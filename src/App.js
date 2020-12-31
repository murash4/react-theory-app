import React, { Component } from 'react'
import classes from './App.scss'
import Car from './Car/Car'
import ErrorBoundary from './ErrorBoundary/ErrorBoundary'
import Counter from './Counter/Counter'

export const ClickedContext = React.createContext(false)

class App extends Component {
	constructor (props) {
		console.log('App constructor')
		super(props)

		this.state = {
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
			<div className={ classes.app } style={ divStyle }>
				{/*<h1 className={ classes.h1 }>{ this.state.pageTitle }</h1>*/}
				<h1>{ this.props.title }</h1>

				<ClickedContext.Provider value={ this.state.clicked }>
					<Counter />
				</ClickedContext.Provider>
				<hr/>

				<button onClick={ () => this.setState({ clicked: true }) }>Change clicked</button>
				<br/>

				<button style={{ marginTop: 20 }} onClick={ this.toggleCarsHandler }>Toggle cars</button>

				<div style={{
					width: 400,
					margin: 'auto',
					paddingTop: '20px'
				}}>
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
			</div>
		)
	}
}

export default App;
