import React from 'react'



const Icon = ({iconName, margin, size, color}) => {
  return (
	<i className={`fa ${iconName}`} style={{margin: margin ? margin : '0 4px', fontSize: size ? size : '14px', color: color ? color : 'white' }}></i>
  )
}

export default Icon;