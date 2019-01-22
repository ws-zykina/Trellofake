
import {GET_GROUPS, CREATE_GROUP} from "../types/group.type";

export const defaultState = {
  groups: []
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case GET_GROUPS:
		return {
			...state,
			items: action.payload
		};
	case CREATE_GROUP:
		const updatedGroupsList = state.items;
		updatedGroupsList.push(action.payload);
		return {
			...state,
			items: updatedGroupsList
		};
    default:
      return state;
  }
};