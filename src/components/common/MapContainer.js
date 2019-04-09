import React, { useState, useEffect } from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react'
import { getAsset, generateRandomId } from '../../utils'

import secrets from '../../secrets'

const {GOOGLE_API_KEY} = secrets
const USER_ICON_URL = "https://www.freeiconspng.com/uploads/cute-icon-png-20.png"

const hasPosition = coordinate => {
  if (coordinate === undefined) {
    console.log('coordinate is undefined')
    return false
  }
  return coordinate.latitude !== undefined && coordinate.longitude !== undefined
}

const LoadingContainer = () => (<div className="map-loading"></div>)

const Container = props => {
  console.log('map props: ', props)
  const getFormattedCoordinates = coordinates => {
    return {
      lat: coordinates.latitude,
      lng: coordinates.longitude
    } 
  }

  const currentUserLocation = getFormattedCoordinates(JSON.parse(localStorage.getItem('userCoords')))

  const style = {
    width: '100%',
    height: '20rem',
    position: 'relative',
    boxShadow: '0px 19px 36px -11px rgba(0,0,0,0.1)',
  }

  const markers = props.markerPositions.filter(hasPosition).map(markerPosition => 
    <Marker 
      key={generateRandomId()} 
      position={getFormattedCoordinates(markerPosition)}
    />
  )

  const userMarker = (google) => 
    <Marker 
      name="your position" 
      position={currentUserLocation} 
      icon={{
        url: USER_ICON_URL,
        anchor: new google.maps.Point(32,32),
        scaledSize: new google.maps.Size(64,64)
      }}
    />

  const points = [
    currentUserLocation,
    ...props.markerPositions.filter(hasPosition).map(markerPosition => getFormattedCoordinates(markerPosition))
  ]

  const bounds = new props.google.maps.LatLngBounds();
  for (let i = 0; i < points.length; i++) {
    bounds.extend(points[i]);
  }

  return (
    <div style={style} >
      <Map 
        className="google-map-container" 
        google={props.google}
        center={getFormattedCoordinates(props.mapPosition)}
        defaultCenter={currentUserLocation}
        initialCenter={currentUserLocation}
        { ...(props.markerPositions.length === 0 ? {zoom: 14} : {bounds: bounds})}
      >
        {markers}
        {userMarker(props.google)}
      </Map>
    </div>
  )
}


export default GoogleApiWrapper({
  apiKey: GOOGLE_API_KEY,
  LoadingContainer: LoadingContainer
})(Container)