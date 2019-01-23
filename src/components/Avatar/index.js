import React, { Component } from 'react'
import './Avatar.scss';

class Avatar extends Component {
   render() {
	   const { image, text, hovered } = this.props;
		return (
			<div className={'avatar-container'} style={{background: image ? 'url('+image+')' : 'white'}}>
				{!image && text}
			</div>
		)
	}
}

export default Avatar;
