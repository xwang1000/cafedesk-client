import React, { useState } from 'react'
import GoogleApiWrapper from '../common/MapContainer'
import BusinessList from '../common/BusinessList'
import BusinessContainer from '../common/BusinessContainer'
import PreferenceBox from '../common/PreferenceBox'
import { Route } from 'react-router-dom'

const HomePage = (props) => {
  
  const [markerPositions, setMarkerPositions] = useState([])
  const [businessMarkers, setBusinessMarkers] = useState([])
  
  console.log('home page marker positions:', markerPositions)
  console.log('home page business markers: ', businessMarkers)
  // Reset marker positions to the businesses
  const resetMap = () => {
    console.log('resetting map: ', businessMarkers)
    setMarkerPositions(businessMarkers)
  }

  // Take the business coords and set the marker positions
  const showOnMap = (coords) => {
    setMarkerPositions([coords])
  }

  return (
    <div className="home-page">
      <GoogleApiWrapper markerPositions={markerPositions} />
      {/* {
        props.user.tags.length === 0 && 
        <PreferenceBox changeUserTags={props.changeUserTags} userTags={props.user.tags} resetMap={resetMap} /> :
      } */}
      <Route
        path={props.match.path} 
        render={(props) => (
          <BusinessList
            {...props}
            fetchType="recommendations"
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
      <Route path="preference" component={PreferenceBox} />
    </div>
  )
}

export default HomePage
