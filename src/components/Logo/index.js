import React from 'react'
import './Logo.scss'

const Logo = ({src, text}) => {
  return (
	src && <img src={src} alt={text} className='main-logo' />
  )
}

export default Logo
