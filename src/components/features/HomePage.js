import React, { useState } from 'react'
import GoogleApiWrapper from '../common/MapContainer'
import BusinessList from '../common/BusinessList'
import BusinessContainer from '../common/BusinessContainer'
import PreferenceBox from '../common/PreferenceBox'
import { Route } from 'react-router-dom'

const HomePage = (props) => {
  const [markerPositions, setMarkerPositions] = useState([])
  const [businessMarkers, setBusinessMarkers] = useState([])
  
  // Reset marker positions to the businesses
  const resetMap = () => {
    setMarkerPositions(businessMarkers)
  }

  // Take the business coords and set the marker positions
  const showOnMap = (coords) => {
    setMarkerPositions([coords])
  }

  const user = props.user

  return (
    <div className="home-page">
      <GoogleApiWrapper markerPositions={markerPositions} />
      <PreferenceBox changeUserTags={props.changeUserTags} />
      <Route
        path={props.match.path} 
        render={(props) => (
          <BusinessList
            {...props}
            fetchType="recommendations"
            user={user}
            setBusinessMarkers={setBusinessMarkers}
            setMarkerPositions={setMarkerPositions}
          />
        )}
      />
      <Route
        exact path={`${props.match.path}/:businessId`}
        render={(props) => 
          (<BusinessContainer 
            {...props} 
            resetMap={resetMap}
            showOnMap={showOnMap}
          />)}
      />
    </div>

  )
}

export default HomePage
