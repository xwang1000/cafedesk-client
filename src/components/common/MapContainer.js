import React, { useState, useEffect } from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import secrets from '../../secrets'

const {GOOGLE_API_KEY} = secrets

const hasPosition = coordinate => {
  return coordinate.latitude !== undefined && coordinate.longitude !== undefined
}

const Container = props => {
  console.log('map props: ', props)
  const getFormattedCoordinates = coordinates => {
    return {
      lat: coordinates.latitude,
      lng: coordinates.longitude
    } 
  }

  const style = {
    width: '100%',
    height: '20rem',
    position: 'relative',
    boxShadow: '0px 19px 36px -11px rgba(0,0,0,0.1)',
  }

  const markers = props.markerPositions.filter(hasPosition).map((markerPosition, index) => {
    return <Marker key={index} position={getFormattedCoordinates(markerPosition)}/>
  })

  return (
    <div style={style} >
      <Map 
        className="google-map-container" 
        google={props.google}
        center={getFormattedCoordinates(props.mapPosition)}
      >
    {markers}
      </Map>
    </div>
  )
}

const LoadingContainer = () => (
  <div className="map-loading"></div>
)

export default GoogleApiWrapper({
  apiKey: GOOGLE_API_KEY,
  LoadingContainer: LoadingContainer
})(Container)