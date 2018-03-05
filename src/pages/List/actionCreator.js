import { CHANGE_LIST } from './actionTypes'

export const getChangeListAction = (list) => ({
	type: CHANGE_LIST,
	value: list
})

export const getActionList = () => {
	return (dispatch) => {
		fetch('./api/list.json')
		.then((res) => res.json())
		.then((res) => {
			dispatch(getChangeListAction(res.data))
		})
	}
}
