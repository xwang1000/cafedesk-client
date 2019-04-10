import React from 'react'
import { NavLink } from 'react-router-dom'

const NavItem = props => {

  return (
    <NavLink to={props.to} className="nav-item" activeClassName="nav-item--active">
      <img src={props.src} alt={props.name}></img>
    </NavLink>
  )
}

export default NavItem