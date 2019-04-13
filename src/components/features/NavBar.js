import React from 'react'
import NavItem from './NavItem'

const getAsset = (fileName) => `${process.env.PUBLIC_URL}/assets/${fileName}`

const NavBar = props => {

  return (
    <div className="nav-bar">
      <NavItem to="/feed" name="Feed" isActive={() => ('feed' === props.activeNav)} src={getAsset('placeholder.svg')} />
      <NavItem to="/search/" name="Search" isActive={'search' === props.activeNav} src={getAsset('search.svg')} />
      <NavItem to="/fav/" name="Fav" isActive={'fav' === props.activeNav} src={getAsset('star.svg')} />
      <NavItem to="/profile/" name="Account" isActive={'history' === props.activeNav} src={getAsset('user.svg')} />
    </div>
  )
}

export default NavBar