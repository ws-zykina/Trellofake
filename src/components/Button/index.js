import React from 'react'
import PropTypes from 'prop-types';
import './Button.scss'

const Button = ({onClick, title, children}) => {
  return (
	<button onClick={onClick} className="main-button">
		{children}
	</button>
  )
}


Button.propTypes = {
	title: PropTypes.string,
	onClick:  PropTypes.string.isRequired
};

Button.defaultProps = {
	title: 'Button'
};
export default Button;