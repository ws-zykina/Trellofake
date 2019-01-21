import { GET_TASKS, CREATE_TASK} from "../types/task.type";
import axios from '../../core/axios';

export const getTasks = ( user ) => async( dispatch ) => {
	try {
		const responce = await axios.get('http://localhost:3005/api/tasks')
		console.log('responce getTasK', responce);
		await dispatch( {
			type    : GET_TASKS,
			payload : responce.data
		} );
	} catch ( error ) {
		console.log('error', error);
	}
};

export const createTask = ( task ) => async( dispatch ) => {
	try {
		const responce = await axios.post('http://localhost:3005/api/tasks/task', task)
		console.log('responce createTask', responce);
		await dispatch( {
			type    : CREATE_TASK,
			payload: responce.data
		} );

	} catch ( error ) {
		console.log('error', error);
	}
};