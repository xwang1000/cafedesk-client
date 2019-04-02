import React from 'react'
import NavItem from './NavItem'

const NavBar = () => {
  return (
    <div className="nav-bar">
      <NavItem name='Home' src={process.env.PUBLIC_URL + '/assets/placeholder.svg'} />
      <NavItem name='Search' src={process.env.PUBLIC_URL + '/assets/search.svg'} />
      <NavItem name='Fav' src={process.env.PUBLIC_URL + '/assets/star.svg'} />
      <NavItem name='Account' src={process.env.PUBLIC_URL + '/assets/user.svg'} />
    </div>
  )
}

export default NavBar