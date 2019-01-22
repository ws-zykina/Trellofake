import { GET_TASKS, CREATE_TASK, REMOVE_TASK} from "../types/task.type";
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
		await dispatch( {
			type    : CREATE_TASK,
			payload: responce.data
		} );

	} catch ( error ) {
		console.log('error', error);
	}
};

export const removeTask = ( task ) => async( dispatch ) => {
	console.log('??????????????????????????????????', task);
	try {
		const responce = await axios.delete('http://localhost:3005/api/tasks/removeTask', {params: {id: task.id}})
		await dispatch( {
			type    : REMOVE_TASK,
			payload: responce.data
		} );

	} catch ( error ) {
		console.log('error', error);
	}
};