import React from 'react'
import './ListContainer.scss';
import Input from '../../components/Input';
import { DropTarget } from 'react-dnd'
import TaskContainer from '../../components/TaskContainer';

const ListContainer = ({ tasks, id, title, handleChange, handleKey, connectDropTarget }) => {
	console.log(tasks)
	return connectDropTarget(
		<div className='list-container'>
			<div className='list-header'>
				<h4>{title}</h4>
			</div>
			<div className='list-body'>
				{
					tasks && tasks.map((task) =>{
						if(task.groupId === id) {
							return <TaskContainer key={task.id} id={task.id} taskInfo={task} handleDeleteClick={(event) => this.handleDeleteTask(task._id, event)}/>
						}
					}
				)}
			</div>
			<div>
				<Input className='create-task-input' name='newTaskName' onChange={handleChange} onKeyPress={handleKey} placeholder="New task" />
			</div>
		</div>
	)
}

const columnTarget = {
	drop(props, monitor) {
	  const task = monitor.getItem().id;
	  const group = props.id;
	  if (!props.tasks.some(task => task.id === task)) {
		props.drop(task, group);
	  }
	  if (monitor.getDropResult()) {
		// props.swap(id, monitor.getDropResult().dropId)
	  }
	}
  }

  function collect(connect) {
	return {
	  connectDropTarget: connect.dropTarget()
	}
  }

  export default DropTarget('CARD', columnTarget, collect)(ListContainer);