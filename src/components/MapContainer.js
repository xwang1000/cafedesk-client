import React from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import secrets from '../secrets'

const {GOOGLE_API_KEY} = secrets

const Container = props => {
  const style = {
    width: '100%',
    height: '20rem',
    position: 'relative',
    boxShadow: '0px 19px 36px -11px rgba(0,0,0,0.1)'
  }
  return (
    <div style={style} >
      <Map 
        className="google-map-container" 
        google={props.google}
        initialCenter={{
          lat: 49.2844435, 
          lng: -123.1101434
        }}
      >
        <Marker
          name={'Dolores park'}
          position={{lat: 49.2844435, lng: -123.1101434}} />
        <Marker />
      </Map>
    </div>
  )
}

export default GoogleApiWrapper({
  apiKey: GOOGLE_API_KEY
})(Container)