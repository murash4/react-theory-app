// eslint-disable-next-line
export default props => (
	<div style={{
		padding: '10px',
		marginBottom: '10px',
		border: '1px solid #ccc'
	}}>
		<h3>Car name: { props.name }</h3>
		<p>Year: <strong>{ props.year }</strong></p>
		<input type="text" onChange={ props.onChangeName } value={ props.name } />
		<button onClick={ props.onDelete }>Delete</button>
	</div>
)
