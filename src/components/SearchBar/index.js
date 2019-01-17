import React from 'react'
import Icon from '../Icon'
import Input from '../Input'

import './SearchBar.scss'


function SearchBar({onSearch}) {
	return (
		<div className='search-bar-container'>
			<Input name={'searchValue'} onChange={(name, e)=> onSearch(name, e)}/>
			<Icon iconName='fa-search' margin='0 8px'/>
		</div>
	)
}
export default SearchBar;
