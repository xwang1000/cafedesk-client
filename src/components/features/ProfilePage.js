import React from 'react'
import BusinessList from '../common/BusinessList'
import BusinessContainer from '../common/BusinessContainer'
import { Route } from 'react-router-dom'

const ProfilePage = (props) => {
  const userName = props.user ? props.user.name : ''

  return (
    <div className="profile-page">
      <div className="profile-header">
        <h1>Hello {userName}</h1>
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

export default ProfilePage