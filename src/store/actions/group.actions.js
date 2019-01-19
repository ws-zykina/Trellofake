import { GET_GROUPS, CREATE_GROUP } from "../types/group.type";
import axios from '../../core/axios';

export const getGroups = ( user ) => async( dispatch ) => {
	try {
		const responce = await axios.get('http://localhost:3005/api/groups')

		await dispatch( {
			type    : GET_GROUPS,
			payload : responce.data
		} );
	} catch ( error ) {
		console.log('error', error);
	}
};

export const createGroup = ( group ) => async( dispatch ) => {
	try {
		const responce = await axios.post('http://localhost:3005/api/groups/group', group)
		console.log('responce', responce);
		await dispatch( {
			type    : CREATE_GROUP,
			payload: responce.data
		} );

	} catch ( error ) {
		console.log('error', error);
	}
};
