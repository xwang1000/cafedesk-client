import React from 'react'
import NavItem from './NavItem'

const NavBar = () => {
  return (
    <div className="nav-bar">
      <NavItem name='Home' />
      <NavItem name='Search' />
      <NavItem name='Fav' />
      <NavItem name='Account' />
    </div>
  )
}

export default NavBar