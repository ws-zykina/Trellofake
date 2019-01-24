import React, { Component } from 'react'
import './Dashboard.scss';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import ListContainer from '../../components/ListContainer';
import TaskContainer from '../../components/TaskContainer';

import Axios from '../../core/axios.js';
import { getGroups } from "../../store/actions/group.actions";
import { getTasks, removeTask, createTask, changeTaskGroup } from "../../store/actions/task.actions";
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';
class Dashboard extends Component {
	componentDidMount = async () => {
		await this.props.getTasks();
		await this.props.getGroups();
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

	changeCardColumn = (taskId, groupId) => {
		this.props.changeTaskGroup({groupId, taskId})
	}


	render() {
		// console.log('dasboard', this.props)
		const { groups: { items }, tasks } = this.props;
		console.log('tasks', tasks);
		return (
			<div className='dashboard'>
				{
					items && items.map(({ name, _id }, index) => {
						// console.log('tasks', tasks);
						var groupedTasks = tasks && tasks.items && tasks.items.filter((task, id) => {
							// console.log(task)
							if( task.groupId === _id ) {
								task.id = task._id
								return true;
							}
							return false;
						})
						// console.log('groupedTasks', groupedTasks);
						return (<ListContainer drop={this.changeCardColumn} column={name} tasks={groupedTasks} id={_id} title={name} handleChange={this.handleChangeField} handleKey={(event) => this.handleKeyPress(_id, event)}/>)
					})

				}
			</div>
		)
	}
}



const mapStateToProps = ({ groups, tasks }) => {
	return { groups, tasks };
};

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({ getGroups, removeTask, createTask, getTasks, changeTaskGroup }, dispatch);
};
export default DragDropContext(HTML5Backend)(
	connect(mapStateToProps, mapDispatchToProps)(Dashboard)
);

