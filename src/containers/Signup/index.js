import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { registration} from "../../store/actions/auth.actions";
import SignupForm from './components/SignupForm';
import '../Signup/Signup.scss';

class Signup extends Component {
	handleSubmit = (credentials) => {
		
		this.props.registration(credentials);
		console.log("this.props.registration(credentials);")
	}

	render() {
		return (
		<div className={'signup-page'}>
			<SignupForm onSubmit={this.handleSubmit}/>
		</div>
		)
	}
}

const mapStateToProps = ( { Auth } ) => {
	return { Auth };
};

const mapDispatchToProps = ( dispatch ) => {
	return bindActionCreators( { registration }, dispatch );
};



export default connect( mapStateToProps, mapDispatchToProps )(Signup);