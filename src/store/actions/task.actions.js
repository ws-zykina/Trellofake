import { GET_TASKS, CREATE_TASK, REMOVE_TASK, CHANGE_TASK_GROUP} from "../types/task.type";
import axios from '../../core/axios';
import api from '../../core/api';


export const getTasks = () => async( dispatch ) => {
	try {
		const responce = await axios.get(`${api.host}${api.tasks.getTasks}`)
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

export const changeTaskGroup = ( data ) => async( dispatch ) => {
	try {
		const responce = await axios.post('http://localhost:3005/api/tasks/changeGroup', data)
		console.log('responce', responce);
		await dispatch( {
			type    : CHANGE_TASK_GROUP,
			payload: responce.data
		} );
	} catch ( error ) {
		console.log('error', error);
	}
};