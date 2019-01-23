import React, { Component } from 'react'
import Button from '../Button';
import Avatar from '../Avatar';

class AvatarButton extends Component {
	cutText = (text) => {
		let cuttedText = '';
		cuttedText = text.split(' ')
		cuttedText = cuttedText.map((word)=> {
			return word[0];
		})
		cuttedText.join('')
		return cuttedText
	}

	render() {
		const {text, image} = this.props;
		return (
			<Button className={'circle-button'}>
				<Avatar image={image} text={text && this.cutText(text)}/>
			</Button>
		)
	}
}

export default AvatarButton;
