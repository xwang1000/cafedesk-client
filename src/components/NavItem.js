import React from 'react'

const NavItem = props => {
  return (
    <div className="nav-item">
      <h3>{props.name}</h3>
    </div>
  )
}

export default NavItem