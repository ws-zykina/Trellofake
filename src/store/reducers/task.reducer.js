
import {GET_TASKS, CREATE_TASK, REMOVE_TASK} from "../types/task.type";

export const defaultState = {
  tasks: []
};

export default (state = defaultState, action) => {
	console.log('454545454545454545***********', action)
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
		//const updatedTasksList = state.items;
		updatedTasksList.pop(action.payload);
		return {
			...state,
			items: updatedTasksList
		};
    default:
      return state;
  }
};