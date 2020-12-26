// eslint-disable-next-line
export default props => (
	<div style={{
		padding: '10px',
		marginBottom: '10px',
		border: '1px solid #ccc',
		boxShadow: '0 4px 5px 0 rgba(0, 0, 0, 0.14)',
		borderRadius: '5px'
	}}>
		<h3>Car name: { props.name }</h3>
		<p>Year: <strong>{ props.year }</strong></p>
		<input type="text" onChange={ props.onChangeName } value={ props.name } />
		<button onClick={ props.onDelete }>Delete</button>
	</div>
)
