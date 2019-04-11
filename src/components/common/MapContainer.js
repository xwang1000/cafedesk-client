import React from 'react'
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react'
import { generateRandomId, getAsset } from '../../utils'
import { Redirect } from 'react-router-dom'

const GOOGLE_API_KEY = 'AIzaSyBitC0nYuPGlErcsECDQl9lvBkEsw_9k1s'
const STORE_ICON_URL = getAsset('store-icon.svg')
const USER_ICON_URL = getAsset('user-icon.svg')

const hasPosition = business => {
  if (business.coordinates === undefined) {
    return false
  }
  return business.coordinates.latitude !== undefined && business.coordinates.longitude !== undefined
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

  const onClick = id => props.showId(id)

  const markers = google => {
    return props.markerPositions.filter(hasPosition).map(business => 
      <Marker 
        key={generateRandomId()} 
        position={getFormattedCoordinates(business.coordinates)}
        icon={{
          url: STORE_ICON_URL,
          anchor: new google.maps.Point(30,30),
          scaledSize: new google.maps.Size(50,55)
        }}
        onClick={() => onClick(business.id)}
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
        scaledSize: new google.maps.Size(58,58)
      }}
    />

  const points = [
    currentUserLocation,
    ...props.markerPositions.filter(hasPosition).map(business => getFormattedCoordinates(business.coordinates))
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
        streetViewControl={false}
        disableDefaultUI={true}
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