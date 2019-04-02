import React from 'react'
import GoogleApiWrapper from './MapContainer'
import BusinessList from './BusinessList'

const HomePage = () => {

  return (
    <div className="home-page">
      <GoogleApiWrapper />
      <BusinessList />
    </div>
  )
}

export default HomePage