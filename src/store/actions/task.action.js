import { GET_TASKS } from "../types/reducer.type";

export const getTasks = ( user ) => async( dispatch ) => {
	// const = receive from api
	dispatch( {	type: GET_TASKS } );
};
