import { ADD, ADD3, ADD_NUMBER, SUB } from "./actionTypes";

export function add () {
	return {
		type: ADD
	}
}

export function sub () {
	return {
		type: SUB
	}
}
export function addNumber (number) {
	return {
		type: ADD_NUMBER,
		payload: number
	}
}

export function asyncAdd (number) {
	return dispatch => {
		setTimeout(() => {
			dispatch(addNumber(number))
		}, 3000)
	}
}

export function add3 (number) {
	return {
		type: ADD3,
		payload: number
	}
}
