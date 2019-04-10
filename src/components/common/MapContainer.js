import React from 'react'
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react'
import { generateRandomId } from '../../utils'

import secrets from '../../secrets'

const {GOOGLE_API_KEY} = secrets
const USER_ICON_URL = "https://www.freeiconspng.com/uploads/cute-icon-png-20.png"

const hasPosition = coordinate => {
  if (coordinate === undefined) {
    return false
  }
  return coordinate.latitude !== undefined && coordinate.longitude !== undefined
}

const LoadingContainer = () => (<div className="map-loading"></div>)

const Container = props => {
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
  if (points.length > 1) {
    for (let i = 0; i < points.length; i++) {
      bounds.extend(points[i]);
    }
  } else {

  }

  bounds.extend(points[0])
  return (
    <div style={style} >
      <Map 
        className="google-map-container" 
        google={props.google}
        defaultCenter={currentUserLocation}
        initialCenter={currentUserLocation}
        { ...(points.length <= 1 ? {zoom: 12} : {bounds: bounds})}
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