import React from 'react'
import PropTypes from 'prop-types';
import './Input.scss';

const Input = ({name, type, onChange, value, placeholder}) => {
  return (
	<input className={'main-input'} name={name} type={type} onChange={(e) => onChange(name, e)} value={value} placeholder={placeholder}/>
  )
}

Input.propTypes = {
	name: PropTypes.string,
	type: PropTypes.oneOf(['text', 'email', 'password']).isRequired,
	value: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number,
	]),
	onChange: PropTypes.func,
	placeholder: PropTypes.string
};

Input.defaultProps = {
	placeholder: 'Some placeholder'
};

export default Input;
