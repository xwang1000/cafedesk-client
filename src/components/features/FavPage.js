import React from 'react'
import BusinessList from '../common/BusinessList'

const renderFavPage = ()=> {
  return (
    <div className="fav-page">
      <h1>My Favourites </h1>
      <BusinessList fetchType="favourite" />
  </div>
  )
}

const FavPage = () => renderFavPage()

export default FavPage