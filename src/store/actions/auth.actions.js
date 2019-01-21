
import { AUTH_SUCCESS, AUTH_FAILED, CHECK_TOKEN_SUCCESS, CHECK_TOKEN_FAILED } from "../types/auth.type";
import history from "../../core/history";
import axios from '../../core/axios';
import api from '../../core/api'


export const login = ( user ) => async( dispatch ) => {
	try {
		const responce = await axios.post('http://localhost:3005/api/auth/signIn', user)
		const { data: {token}} =  responce


		await dispatch( {
			type    : AUTH_SUCCESS,
			payload : responce
		} );
		sessionStorage.setItem( "token",  token );
		history.push( "/dashboard" );
	} catch ( error ) {
		dispatch( {
			type    : AUTH_FAILED,
			payload : 'Some error'
		} );
	}
};

export const checkToken = () => ( dispatch ) => {
	let token = sessionStorage.getItem( "token" );
	console.log('this is checking token');
	if (token) {
		console.log('1', 1);
		dispatch( { type: CHECK_TOKEN_SUCCESS } );
	} else {
		console.log('2', 2);
		dispatch( { type: CHECK_TOKEN_FAILED } );
	}
};
