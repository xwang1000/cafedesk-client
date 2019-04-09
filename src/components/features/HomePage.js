import React, { useState, useEffect } from 'react'
import GoogleApiWrapper from '../common/MapContainer'
import BusinessList from '../common/BusinessList'
import BusinessContainer from '../common/BusinessContainer'
import PreferenceBox from '../common/PreferenceBox'
import { Route } from 'react-router-dom'

const HomePage = (props) => {

  const [businesses, setBusinesses] = useState([])
  const [mapPosition, setMapPosition] = useState(props.user.coords || {})
  const [markerPositions, setMarkerPositions] = useState([])

  const resetMap = () => {
    const markers = businesses.map(business => {
      if (business.coordinates) {
        return business.coordinates
      } 
      return {}
    })
    setMarkerPositions(markers)
  }

  return (
    <div className="home-page">
      <GoogleApiWrapper mapPosition={mapPosition || props.user.coords} markerPositions={markerPositions} />
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
          />
        )}
      />
      <Route
        path={`${props.match.path}/:businessId`}
        render={(props) => 
          (<BusinessContainer 
            {...props} 
            resetMap={resetMap} 
          />)}
      />
    </div>
  )
}

export default HomePage
