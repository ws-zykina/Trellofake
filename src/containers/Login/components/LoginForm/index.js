
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../../components/Button';
import Input from '../../../../components/Input';
import '../LoginForm.scss';

class LoginForm extends Component {
	handleChangeField = (field, event) => {
		this.setState({ [field]: event.currentTarget.value });
	}

	handleSubmit = (e) => {
		e.preventDefault()
		this.props.onSubmit(this.state);
	}

	render() {
		console.log(this.state)
		return (
			<form onSubmit={this.handleSubmit} className={'login-form'}>
				<div className="text"> Login </div>
				<Input name='email' type='text' onChange={this.handleChangeField} placeholder='Enter email' className="login-input" />
				<Input name='password' type='password' onChange={this.handleChangeField} placeholder='Enter password' className="login-input" />
				<Button type='submit' onClick={this.handleSubmit} className="login-button">
					Sign In
				</Button>
				<div className="text"> OR </div>
				<Button type='submit' className="login-button">
					<Link to="/registration">Sign Up</Link>
				</Button> 
			</form>
		)
	}
}
export default LoginForm;