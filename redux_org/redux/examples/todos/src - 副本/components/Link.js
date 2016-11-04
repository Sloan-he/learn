import React, { PropTypes } from 'react'

const Link = ({ active, children, onClick,test }) => {
  console.log('link');
  console.log('1',test);
  if (active) {
    return <span>{children}</span>
  }

  return (
    <a href="#"
       onClick={e => {
         e.preventDefault()
         onClick()
       }}
    >
      {children}
    </a>
  )
}

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  test:PropTypes.isRequired
}

export default Link
