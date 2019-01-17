
import { AUTH_SUCCESS, AUTH_FAILED, CHECK_TOKEN_SUCCESS, CHECK_TOKEN_FAILED } from "../types/auth.type";

let defaultState =  {
	current       : {},
	isAuth        : false,
	checkingToken : true,
	loginError    : ""
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case AUTH_SUCCESS:
		return {
			...state,
			user: action.payload,
			isAuth  : true
		};
	case AUTH_FAILED:
		return {
			...state,
			isAuth  : false,
			loginError : action.payload
		};
	case CHECK_TOKEN_SUCCESS:
		return {
			...state,
			isAuth        : true,
			checkingToken : false

		};
	case CHECK_TOKEN_FAILED:
		return {
			...state,
			isAuth  : false,
			checkingToken : false
		};
    default:
      return state;
  }
};