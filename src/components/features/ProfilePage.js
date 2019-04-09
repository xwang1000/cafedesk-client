import React, { useState, useEffect } from 'react'
import BusinessList from '../common/BusinessList'
import { getViewedBusinessesByUserId } from '../../api/cafedeskAPI'
import { getAsset } from '../../utils'
import { Route } from 'react-router-dom'

const fetchBusinesses = async (setData) => {
  setData({isLoaded: false})
  const result = await getViewedBusinessesByUserId(1)

  setData({
    isLoaded: true,
    businesses: result
  })
}

const renderProfilePage = props => {
  return (
    <div className="profile-page">
      <div className="profile-header">
        <h1>Hello, {props.user.name}</h1>
        <p>your tags here</p>
        <p>distance</p>
      </div>

      <div className="profile-history">
        <h1 className="profile-history-head">History</h1>
        <Route
          path={props.match.path} 
          render={(props) => (
            <BusinessList
              {...props}
              fetchType="history"
            />
          )}
        />
        <Route
          path={`${props.match.path}/:businessId`}
          render={(props) => 
            (<BusinessContainer 
              {...props} 
            />)}
        />
      </div>
    </div>
  )
}

const renderProfilePageLoading = props => {
  return (
    <div className="profile-page">
      <div className="profile-header">
        <h1>Hello, {props.user.name}</h1>
        <p>your tags here</p>
        <p>distance</p>
      </div>

      <div className="profile-history">
        <h1 className="profile-history-head">History</h1>
        <div className="loading-icon-container">
          <img className="loading-icon" src={getAsset('coffee-cup.svg')} />
        </div>
      </div>
    </div>
  )
}

const ProfilePage = () => {

  const user = {
    name: 'Nancy'
  }
  const [data, setData] = useState({isLoaded: false})

  useEffect(() => {
    fetchBusinesses(setData)
  }, [])

  if (data.isLoaded) {
    return renderProfilePage({
      businesses: data.businesses,
      user
    })
  } else {
    return renderProfilePageLoading({user})
  }
}

export default ProfilePage