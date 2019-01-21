import React, { Component } from 'react'
import './Dashboard.scss';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import ListContainer from '../../components/ListContainer';
import Axios from '../../core/axios.js';
import { getGroups } from "../../store/actions/group.actions";
import { getTasks, createTask } from "../../store/actions/task.actions";


class Dashboard extends Component {
	componentDidMount () {
		console.log(this.props)
		this.props.getGroups();
		this.props.getTasks();
	}

	handleChangeField = (field, event) => {
		this.setState({[field]: event.currentTarget.value});
	}

	handleKeyPress = (e) => {
		console.log(e);
		if (e.key === 'Enter') {
		  console.log('do validate', e);
		  const { newTaskName } = this.state;

		  this.props.createTask({
			name: e.currentTarget.value
		  })
		}
	}

	render() {
		console.log('dasboard',this.props)
		const { groups: { items }, tasks } = this.props;

		return (
			<div className='dashboard'>
				{
					items && items.map(({name}, index) =>
						<ListContainer title={name} handleChange={this.handleChangeField} handleKey={this.handleKeyPress}>
							{tasks.items && tasks.items.map((task)=> {
								return(task.name)
							})}
						</ListContainer>
					)
				}
			</div>
		)
	}
}

const mapStateToProps = ( { groups, tasks } ) => {
	return { groups, tasks };
};

const mapDispatchToProps = ( dispatch ) => {
	return bindActionCreators( { getGroups, createTask, getTasks }, dispatch );
};

export default connect( mapStateToProps, mapDispatchToProps )( Dashboard );
