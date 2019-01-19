import React from 'react'
import './Navigation.scss'
import Button from '../Button';
import AvatarButton from '../AvatarButton';

import Input from '../Input';
import Logo from '../Logo';
import Icon from '../Icon';
import Avatar from '../Avatar';
import SearchBar from '../SearchBar';



const Navigations = ({onSearch, handleNavClick}) => {
  return (
	<div className='top-nav'>
		<div className="left-nav-section">
			<Button>
				<Icon iconName='fa-home'/>
			</Button>
			<Button>
				<Icon iconName='fa-window-maximize'/>
				Boards
			</Button>
			<SearchBar onSearch={onSearch}/>
			{/* <Input name={'searchValue'} onChange={(name, e)=> onSearch(name, e)}/> */}
		</div>
		<Logo src='https://a.trellocdn.com/prgb/dist/images/header-logo-2x.01ef898811a879595cea.png' text='logo' />
		<div className="right-nav-section">
			<Button onClick={()=>handleNavClick('showGroupModal')}>
				<Icon iconName='fa-plus'/>
			</Button>
			<Button>
				<Icon iconName='fa-info-circle'/>
			</Button>
			<Button>
				<Icon iconName='fa-bell'/>
			</Button>
			<AvatarButton text='Alexey Moiseenko'/>
		</div>
	</div>
  )
}

export default Navigations