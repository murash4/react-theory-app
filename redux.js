const redux = require('redux')

const initialState = {
	counter: 0
}

// Reducer
const reducer = (state = initialState, action) => {
	if (action.type === 'ADD') {
		return {
			counter: state.counter + 1
		}
	}

	if (action.type === 'SUB') {
		return {
			counter: state.counter - 1
		}
	}

	if (action.type === 'ADD_NUMBER') {
		return {
			counter: state.counter + action.value
		}
	}

	return state
}

// Store
const store = redux.createStore(reducer)
// console.log(store.getState())
store.subscribe(() => {
	console.log(store.getState())
})

// Actions
const addCounter = {
	type: 'ADD'
}

store.dispatch(addCounter)
// console.log(store.getState())

store.dispatch({
	type: 'SUB'
})
// console.log(store.getState())

store.dispatch({
	type: 'ADD_NUMBER',
	value: 10
})
// console.log(store.getState())
