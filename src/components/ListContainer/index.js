import React from 'react'
import './ListContainer.scss';

const ListContainer = ({children, title}) => {

  return (
	<div className='list-container'>
		<div className='list-header'>
			<h4>{title}</h4>
		</div>
		<div className='list-body'>
			{children}
		</div>
		<div>another things</div>
	</div>
  )
}
export default ListContainer
