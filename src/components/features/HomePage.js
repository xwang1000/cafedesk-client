import React, { useState, useEffect } from 'react'
import GoogleApiWrapper from '../common/MapContainer'
import BusinessList from '../common/BusinessList'
import BusinessContainer from '../common/BusinessContainer'
import { getBusinesses, getBusinessById } from '../../api/cafedeskAPI'

const fetchBusinessById = async (id, setBusiness, setMarkerPositions, setMapPosition) => {
  const businessQueried = await getBusinessById(id)
  setBusiness(businessQueried)
  setMarkerPositions([businessQueried.coordinates])
  setMapPosition(businessQueried.coordinates)
  // setMarkerPositions([{latitude: 49.2813891, longitude: -124.1144766}])
  // setMapPosition({latitude: 49.2813891, longitude: -124.1144766})
}

const fetchRecommendations = async (setBusinesses, setMarkerPositions) => {
      
  const businessesQueried = await getBusinesses()
  const markers = businessesQueried.map(business => {
    if (business.coordinates) {
      return business.coordinates
    } 
    return {}
  })

  setBusinesses(businessesQueried)
  console.log('businesses recommended markers: ', markers)
  if (setMarkerPositions) {
    setMarkerPositions(markers)
  }
}

const HomePage = (props) => {
  console.log('home page props: ', props)
  const paramsId = props.match.params.id 
  const [businesses, setBusinesses] = useState([])
  const [business, setBusiness] = useState({})
  const [mapPosition, setMapPosition] = useState(props.user.coords || {})
  const [markerPositions, setMarkerPositions] = useState([])

  useEffect(() => {
    fetchRecommendations(setBusinesses, setMarkerPositions)
  }, [])

  if (mapPosition === undefined || markerPositions.length === 0) {
    return (
      <div>
        Loading...
      </div>
    )
  }

  const showOnMap = () => {
    fetchRecommendations(setBusinesses)
    fetchBusinessById(paramsId, setBusiness, setMarkerPositions, setMapPosition)
  }

  return (
    <div className="home-page">
      {paramsId ? <BusinessContainer id={paramsId} business={business} showOnMap={showOnMap} />: <div></div>}
      <GoogleApiWrapper mapPosition={mapPosition || props.user.coords} markerPositions={markerPositions} />
      <BusinessList businesses={businesses} />
    </div>
  )
}

export default HomePage
