import React  from 'react'
import BusinessList from '../common/BusinessList'
import BusinessContainer from '../common/BusinessContainer'
import { Route } from 'react-router-dom'

const ProfilePage = (props) => {
  
  return (
      <div className="page profile-history">
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
  )

}

export default ProfilePage
