import React, { Component } from 'react'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { checkToken } from "../../store/actions/auth.actions";
import { Route, Redirect } from "react-router-dom";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Input from '../../components/Input';
import Navigations from '../../components/Navigations'
import Dashboard from '../Dashboard';
import { createGroup } from "../../store/actions/group.actions";


class Protected extends Component {
	state = {
		showGroupModal: false,
	}

	componentDidMount() {
		this.props.checkToken();
	}

	handleSearch = (name, e) => {
		this.setState({
			[name]: e.target.value
		}, () => {
			console.log('this.state', this.state);
			console.log('TODO: trigger action from api for searching card');
		})

	}

	handleOpenGroupCreation = (field) => {
		this.setState((state) => ({
			[field]: !state[field]
		}));
	}

	handleConfirm = (field) => {
		const { newGroupName } = this.state;

		this.props.createGroup({
			name: newGroupName
		})

		this.setState((state) => ({
			[field]: !state[field]
		}));

	}

	handleChangeField = (field, event) => {
		this.setState({[field]: event.currentTarget.value});
	}

	generateCreateGroupModal = () => {
		const {showGroupModal} = this.state
		console.log('this.state', this.state);
		return (
			<Modal isOpen={showGroupModal} toggle={this.handleOpenGroupCreation}>
				<ModalHeader toggle={this.toggle}>Group</ModalHeader>
				<ModalBody>
					Please add Group
					<Input name='newGroupName' onChange={this.handleChangeField} placeholder="please type group name" />
				</ModalBody>
				<ModalFooter>
					<Button color="primary" onClick={() => this.handleConfirm('showGroupModal')}>Do Something</Button>{' '}
					<Button color="secondary" onClick={()=>this.handleOpenGroupCreation('showGroupModal')}>Cancel</Button>
				</ModalFooter>
			</Modal>
		)
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
				<Navigations onSearch={this.handleSearch} handleNavClick={this.handleOpenGroupCreation}/>
				<Dashboard />
				{this.generateCreateGroupModal()}
			</>
		)
	}
}

const mapStateToProps = ( { auth } ) => {
	return { auth }
};

const mapDispatchToProps = ( dispatch ) => {
	return bindActionCreators( { checkToken, createGroup }, dispatch );
};

export default connect( mapStateToProps, mapDispatchToProps )( Protected );
