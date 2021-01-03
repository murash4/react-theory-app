import { ADD3 } from "../actions/actionTypes";

const initialState = {
	counter: 200
}

export default function counter3 (state = initialState, action) {
	switch(action.type) {
		case ADD3:
			return {
				counter: state.counter + action.payload
			}
		default:
			return state
	}
}
