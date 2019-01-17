import React, { Component } from 'react'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { checkToken } from "../../store/actions/auth.actions";
import { Route, Redirect } from "react-router-dom";

import Navigations from '../../components/Navigations'
import Dashboard from '../Dashboard';

class Protected extends Component {
	componentDidMount() {
		this.props.checkToken();
	}

	render() {
		let { checkingToken, isAuth } = this.props.auth;


		if (checkingToken) {
			return null;
		}

		if ( !isAuth ) {
			return <Redirect to="/login"/>;
		}

		return (
			 <>
				<Navigations/>
				<Dashboard />
			</>
		)
	}
}

const mapStateToProps = ( { auth } ) => {
	return { auth }
};

const mapDispatchToProps = ( dispatch ) => {
	return bindActionCreators( { checkToken }, dispatch );
};

export default connect( mapStateToProps, mapDispatchToProps )( Protected );
