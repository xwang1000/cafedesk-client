import React from 'react'
import { Route } from 'react-router-dom'
import BusinessList from '../common/BusinessList'
import BusinessContainer from '../common/BusinessContainer'

const FavPage = props => {
  return (
    <div className="fav-page">
      <h1>My Favourites </h1>
      <Route
        exact path={props.match.path} 
        render={(props) => (
          <BusinessList
            {...props}
            fetchType="favourite"
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

export default FavPage