
import { GET_TASKS, CREATE_TASK, REMOVE_TASK, CHANGE_TASK_GROUP } from "../types/task.type";

export const defaultState = {
	tasks: []
};

export default (state = defaultState, action) => {
	switch (action.type) {
		case GET_TASKS:
		console.log("GET_TASKS", action.payload);
			return {
				...state,
				items: action.payload
			};
		case CREATE_TASK:
			const updatedTasksList = state.items;
			updatedTasksList.push(action.payload);
			console.log("CREATE_TASK", updatedTasksList);
			return {
				...state,
				items: updatedTasksList
			};
		case REMOVE_TASK:
		console.log("REMOVE_TASK", state.items.filter((items) => items._id !== action.payload.id));
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
			console.log("CHANGE_TASK_GROUP", newTasksArray);
			return {
				...state,
				items: newTasksArray
			};
		default:
			return state;
	}
};