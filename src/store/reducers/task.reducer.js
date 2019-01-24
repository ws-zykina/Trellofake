
import { GET_TASKS, CREATE_TASK, REMOVE_TASK, CHANGE_TASK_GROUP } from "../types/task.type";

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
		case CHANGE_TASK_GROUP:
			let newState = JSON.parse(JSON.stringify(state))
			let updatedTask = JSON.parse(JSON.stringify(action.payload))



			let indexUpdatedtask = newState.items.findIndex((task) => task._id === updatedTask._id)

			let newTasksArray = newState.items
			newTasksArray.splice(indexUpdatedtask, 1)
			newTasksArray.push(updatedTask);

			return {
				...state,
				items: newTasksArray
			};
		default:
			return state;
	}
};