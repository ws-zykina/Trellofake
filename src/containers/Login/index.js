import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { login } from "../../store/actions/auth.actions";
import LoginForm from './components/LoginForm';
import './Login.scss';

class Login extends Component {
	handleSubmit = (credentials) => {
		this.props.login(credentials);
	}

	render() {
		return (
		<div className={'login-page'}>
			<LoginForm onSubmit={this.handleSubmit}/>
		</div>
		)
	}
}

const mapStateToProps = ( { Auth } ) => {
	return { Auth };
};

const mapDispatchToProps = ( dispatch ) => {
	return bindActionCreators( { login }, dispatch );
};



export default connect( mapStateToProps, mapDispatchToProps )( Login );