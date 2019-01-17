import React from 'react'
import './Navigation.scss'
import Button from '../Button'
import Input from '../Input'
import Logo from '../Logo'

const Navigations = () => {
  return (
	<div class='top-nav'>
		<div className="left-nav-section">
			<Button>Home</Button>
			<Button>Boards</Button>
			<Input />
		</div>
		<Logo src='https://a.trellocdn.com/prgb/dist/images/header-logo-2x.01ef898811a879595cea.png' text='logo' />
		<div className="right-nav-section">
			<Button>Home</Button>
			<Button>Boards</Button>
		</div>
	</div>
  )
}

export default Navigations