import React, { Component } from 'react'
import './Dashboard.scss';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import ListContainer from '../../components/ListContainer';
import TaskContainer from '../../components/TaskContainer';

import Axios from '../../core/axios.js';
import { getGroups } from "../../store/actions/group.actions";
import { getTasks, removeTask, createTask } from "../../store/actions/task.actions";


class Dashboard extends Component {
	componentDidMount() {
		this.props.getGroups();
		this.props.getTasks();
	}

	handleChangeField = (field, event) => {
		this.setState({ [field]: event.currentTarget.value });
	}

	handleKeyPress = (id, e) => {
		if (e.key === 'Enter') {
			const { newTaskName } = this.state;
			this.props.createTask({
				name: e.currentTarget.value,
				groupId: id
			})
			e.currentTarget.value = '';
		}
	}
	
	handleDeleteTask = (id, e) =>{
		this.props.removeTask({
			id: id
		})
	}


	render() {
		console.log('dasboard', this.props)
		const { groups: { items }, tasks } = this.props;
		return (
			<div className='dashboard'>
				{
					items && items.map(({ name, _id }, index) =>
						<ListContainer title={name} handleChange={this.handleChangeField} handleKey={(event) => this.handleKeyPress(_id, event)}>
							{tasks.items && tasks.items.map((task) =>{
								if(task.groupId === _id) {
									return <TaskContainer taskInfo={task} handleDeleteClick={(event) => this.handleDeleteTask(task._id, event)}/>
								}
							}
							)}
						</ListContainer>
					)
				}
			</div>
		)
	}
}

const mapStateToProps = ({ groups, tasks }) => {
	return { groups, tasks };
};

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({ getGroups, removeTask, createTask, getTasks }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
