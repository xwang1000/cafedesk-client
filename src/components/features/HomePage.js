import React, { useState } from 'react'
import GoogleApiWrapper from '../common/MapContainer'
import BusinessList from '../common/BusinessList'
import BusinessContainer from '../common/BusinessContainer'
import PreferenceBox from '../common/PreferenceBox'
import DistanceSlider from '../ui/DistanceSlider'
import { Route } from 'react-router-dom'

const HomePage = (props) => {
  
  const [markerPositions, setMarkerPositions] = useState([])
  const [businessMarkers, setBusinessMarkers] = useState([])
  
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
      <PreferenceBox changeUserTags={props.changeUserTags} />
      <DistanceSlider />
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
    </div>
  )
}

export default HomePage
