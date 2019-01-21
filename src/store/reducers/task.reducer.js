
import {GET_TASKS, CREATE_TASK} from "../types/task.type";

export const defaultState = {
  tasks: []
};

export default (state = defaultState, action) => {
	console.log(action)
  switch (action.type) {
    case GET_TASKS:
		return {
			...state,
			items: action.payload
    };
		case CREATE_TASK:
		console.log(state)
		const updatedTasksList = state.tasks;
		updatedTasksList.push(action.payload);
		return {
			...state,
			items: updatedTasksList
		};
    default:
      return state;
  }
};