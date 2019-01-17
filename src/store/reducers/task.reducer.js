
import {GET_TASKS} from "../types/task.type";

export const defaultState = {
  task: {}
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case GET_TASKS:
		return {
			...state,
			task : [1,2,3]
		};
    default:
      return state;
  }
};