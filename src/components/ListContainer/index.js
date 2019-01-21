import React from 'react'
import './ListContainer.scss';
import Input from '../../components/Input';



const ListContainer = ({children, title, handleChange, handleKey}) => {

  return (
	<div className='list-container'>
		<div className='list-header'>
			<h4>{title}</h4>
		</div>
		<div className='list-body'>
			{children}
		</div>
		<div>
			<Input name='newTaskName' onChange={handleChange} onKeyPress={handleKey} placeholder="New task" />
		</div>
	</div>
  )
}
export default ListContainer