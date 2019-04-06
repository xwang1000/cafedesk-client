import React, { useState, useEffect } from 'react'
import GoogleApiWrapper from '../common/MapContainer'
import BusinessList from '../common/BusinessList'
import BusinessContainer from '../common/BusinessContainer'
import { getBusinesses, getBusinessById } from '../../api/cafedeskAPI'

const fetchBusinessById = async (id, setBusiness, setMarkerPositions) => {
  const businessQueried = await getBusinessById(id)
  setBusiness(businessQueried)
  setMarkerPositions([businessQueried.coordinates])
}

const fetchRecommendations = async (setBusinesses, setMarkerPositions) => {
      
  const businessesQueried = await getBusinesses()
  
  // Set states
  const markers = businessesQueried.map(business => {
    if (business.coordinates) {
      return business.coordinates
    } 

    return {}
  })

  setBusinesses(businessesQueried)
  setMarkerPositions(markers)
}

const HomePage = (props) => {
  console.log('home page props: ', props)
  const paramsId = props.match.params.id 
  const [businesses, setBusinesses] = useState([])
  const [business, setBusiness] = useState({})
  const [mapPosition, setMapPosition] = useState({})
  const [markerPositions, setMarkerPositions] = useState([])

  useEffect(() => {
    // set map center to user location
    setMapPosition(props.user.coords)
    // set userMarker to user location

    if (paramsId) {
      fetchBusinessById(paramsId, setBusiness, setMarkerPositions)
    } else {
      fetchRecommendations(setBusinesses, setMarkerPositions)
    }
  }, [])

  return (
    <div className="home-page">
    {/* setMapCoordinates={setMapCoordinates}  */}
        {paramsId ? <BusinessContainer id={paramsId} business={business} />: <div></div>}
        <GoogleApiWrapper mapPosition={props.user.coords} markerPositions={markerPositions} />
        <BusinessList businesses={businesses} />
    </div>
  )
}

export default HomePage
