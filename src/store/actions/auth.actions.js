
import { AUTH_SUCCESS, AUTH_FAILED, CHECK_TOKEN_SUCCESS, CHECK_TOKEN_FAILED } from "../types/auth.type";
import history from "../../core/history";


export const login = ( user ) => async( dispatch ) => {
	try {

		const responce = {
			name: 'User 1',
			email: 'somemail@gmail.com'
		}

		await dispatch( {
			type    : AUTH_SUCCESS,
			payload : responce
		} );
		sessionStorage.setItem( "user", responce );

		history.push( "/dashboard" );
	} catch ( error ) {
		dispatch( {
			type    : AUTH_FAILED,
			payload : 'Some error'
		} );
	}
};

export const checkToken = () => ( dispatch ) => {
	let token = sessionStorage.getItem( "user" );
	console.log('this is checking token');
	if (token) {
		console.log('1', 1);
		dispatch( { type: CHECK_TOKEN_SUCCESS } );
	} else {
		console.log('2', 2);
		dispatch( { type: CHECK_TOKEN_FAILED } );
	}
};
