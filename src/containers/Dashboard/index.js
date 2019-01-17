import React, { Component } from 'react'
import './Dashboard.scss'
import ListContainer from '../../components/ListContainer'
 class Dashboard extends Component {
  render() {
	return (
	  <div className='dashboard'>
		<ListContainer title='Main'>
			123
		</ListContainer>

		<ListContainer title='123'>
			123
		</ListContainer>

		<ListContainer title='123'>
			123
		</ListContainer>
	  </div>
	)
  }
}

export default Dashboard
