import { ClickedContext } from '../App'

const Counter2 = () => {
	return (
		<div style={{
			width: 200,
			margin: '0 auto 20px',
			border: '1px solid #ccc'
		}}>
			<h3>Counter 2</h3>
			<ClickedContext.Consumer>
				{ clicked => clicked ? <p>Clicked</p> : null }
			</ClickedContext.Consumer>
		</div>
	)
}

export default Counter2
