
import { AUTH_SUCCESS, AUTH_FAILED, SIGNUP_SUCCESS, SIGNUP_FAILED, CHECK_TOKEN_SUCCESS, CHECK_TOKEN_FAILED } from "../types/auth.type";
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
		// history.push( "/registration" );
	}
};

export const registration = ( user ) => async( dispatch ) => {
	try {
		const responce = await axios.post('http://localhost:3005/api/auth/signUp', user)
		const { data: {token}} =  responce
		await dispatch( {
			type    : SIGNUP_SUCCESS,
			payload : responce.data
		} );
		console.log("registration,SIGNUP_SUCCESS")
		sessionStorage.setItem( "token",  token );
		history.push( "/dashboard" );
 	} catch ( error ) {
		dispatch( {
			type    : SIGNUP_FAILED,
			payload : 'Some error'
		} );
		console.log("registration,SIGNUP_FAILED")
	}
};

export const checkToken = () => ( dispatch ) => {
	let token = sessionStorage.getItem( "token" );
	console.log('this is checking token');
	if (token) {
		dispatch( { type: CHECK_TOKEN_SUCCESS } );
	} else {
		dispatch( { type: CHECK_TOKEN_FAILED } );
	}
};
