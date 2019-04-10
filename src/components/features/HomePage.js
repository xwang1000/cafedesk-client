import React, { useState, useEffect } from 'react'
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
    // const markers = businesses.map(business => {
    //   if (business.coordinates) {
    //     return business.coordinates
    //   } 
    //   return {}
    // })
    // setMarkerPositions(markers)
    console.log('reset map: ', businessMarkers)
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
          />
        )}
      />
      <Route
        path={`${props.match.path}/:businessId`}
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
