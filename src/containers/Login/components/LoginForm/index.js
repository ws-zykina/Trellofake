
import React, {Component} from 'react';
import Button from '../../../../components/Button';
import Input from '../../../../components/Input';
import './LoginForm.scss';

class LoginForm extends Component {
	handleChangeField = (field, event) => {
		this.setState({[field]: event.currentTarget.value});
	}

	handleSubmit = (e) => {
		e.preventDefault()

		this.props.onSubmit(this.state);
	}

	render() {
		console.log(this.state)
		return (
			<form onSubmit={this.handleSubmit} className={'login-form'}>
				<Input name='email' type='text' onChange={this.handleChangeField} placeholder='Enter email' />
				<Input name='password' type='password' onChange={this.handleChangeField} placeholder='Enter password'/>
				<Button type='submit' onClick={this.handleSubmit}>
					Sign In
				</Button>
			</form>
		)
  	}
}
export default LoginForm;