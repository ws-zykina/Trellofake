
import { GET_TASKS, CREATE_TASK, REMOVE_TASK } from "../types/task.type";

export const defaultState = {
	tasks: []
};

export default (state = defaultState, action) => {
	switch (action.type) {
		case GET_TASKS:
			return {
				...state,
				items: action.payload
			};
		case CREATE_TASK:
			const updatedTasksList = state.items;
			updatedTasksList.push(action.payload);
			return {
				...state,
				items: updatedTasksList
			};
		case REMOVE_TASK:
			return {
				...state,
				items: state.items.filter((items) => items._id !== action.payload.id)
			};
		default:
			return state;
	}
};