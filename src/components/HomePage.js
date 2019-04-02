import React from 'react'
import Map from './Map'
import BusinessList from './BusinessList'
import NavBar from './NavBar'
const HomePage = () => {
  return (
    <div>
      <h1>Home</h1>
      <Map />
      <BusinessList />
      <NavBar />
    </div>
  )
}

export default HomePage