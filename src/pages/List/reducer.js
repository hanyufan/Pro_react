import { CHANGE_LIST } from './actionTypes'

const defaultState = {
	left: [],
	right: []
}

export default (state = defaultState, action) => {
	switch(action.type) {
		case CHANGE_LIST: 
			return {
				...action.value
			}
		default:
			return state
	}
}
