import React from 'react'
import NavItem from './NavItem'

const getAsset = (fileName) => `${process.env.PUBLIC_URL}/assets/${fileName}`

const NavBar = () => {
  return (
    <div className="nav-bar">
      <NavItem to="/feed" name="Feed" src={getAsset('placeholder.svg')} />
      <NavItem to="/search/" name="Search" src={getAsset('search.svg')} />
      <NavItem to="/fav/" name="Fav" src={getAsset('star.svg')} />
      <NavItem to="/profile/" name="Account" src={getAsset('user.svg')} />
    </div>
  )
}

export default NavBar