import React from 'react'
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react'
import { generateRandomId, getAsset } from '../../utils'

const GOOGLE_API_KEY = 'AIzaSyBitC0nYuPGlErcsECDQl9lvBkEsw_9k1s'
const STORE_ICON_URL = getAsset('store-icon.svg')
const USER_ICON_URL = getAsset('user-icon.svg')

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

  const markers = google => {
    
    return props.markerPositions.filter(hasPosition).map(markerPosition => 
      <Marker 
        key={generateRandomId()} 
        position={getFormattedCoordinates(markerPosition)}
        icon={{
          url: STORE_ICON_URL,
          anchor: new google.maps.Point(32,32),
          scaledSize: new google.maps.Size(50,55)
        }}
      />
    )
  } 

  const userMarker = google => 
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

  const defaultMapOptions = {
    fullscreenControl: false,
    disableDefaultUI: true,
    streetViewControl: false
  };

  return (
    <div style={style} >
      <Map 
        className="google-map-container" 
        google={props.google}
        defaultCenter={currentUserLocation}
        initialCenter={currentUserLocation}
        bounds={bounds}
        zoom={14}
        defaultOptions={defaultMapOptions}
      >
        {markers(props.google)}
        {userMarker(props.google)}
      </Map>
    </div>
  )
}


export default GoogleApiWrapper({
  apiKey: GOOGLE_API_KEY,
  LoadingContainer: LoadingContainer
})(Container)