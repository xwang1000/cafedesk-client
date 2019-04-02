import React from 'react'

const NavItem = props => {
  return (
    <div className="nav-item">
      <img src={props.src} alt={props.name}></img>
    </div>
  )
}

export default NavItem