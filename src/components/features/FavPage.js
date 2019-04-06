import React, { useEffect, useState } from 'react'
import BusinessList from '../common/BusinessList'
import { getFavouriteBusinessesByUserId } from '../../api/cafedeskAPI'
import { getAsset } from '../../utils'

const fetchBusinesses = async (setData) => {
  setData({isLoaded: false})
  const result = await getFavouriteBusinessesByUserId(1)
  setData({
    businesses: result,
    isLoaded: true
  })
}

const renderFavPageLoading = () => {
  return (
    <div className="fav-page">
      <h1>My Favourites</h1>
      <div className="loading-icon-container">
        <img className="loading-icon" src={getAsset('coffee-cup.svg')} />
      </div>
    </div>
  )
}

const renderFavPage = props => {
  return (
    <div className="fav-page">
      <h1>My Favourites (8)</h1>
      <BusinessList businesses={props.businesses} />
  </div>
  )
}

const FavPage = () => {
  const [data, setData] = useState({isLoaded: false})

  useEffect(() => {
    fetchBusinesses(setData)
  }, [])
  
  if (data.isLoaded) {
    return renderFavPage({businesses: data.businesses})
  } else {
    return renderFavPageLoading()
  }
}

export default FavPage