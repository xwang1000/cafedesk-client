import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import BusinessRow from './BusinessRow'
import { getBusinesses, getFavouriteBusinessesByUserId, getViewedBusinessesByUserId } from '../../api/cafedeskAPI'

const fetchBusinesses = async (setState, fetchType, setBusinessMarkers) => {
  setState({loaded: false})
  
  let businesses = []
  if (fetchType === 'recommendations') {
    businesses = await getBusinesses()
  }

  if (fetchType === 'favourite') {
    businesses = await getFavouriteBusinessesByUserId(1)
  }

  if (fetchType === 'history') {
    businesses = await getViewedBusinessesByUserId(1)
  }

  const newState = {
    loaded: true,
    businesses: businesses
  }
  setState(newState)

  if (setBusinessMarkers) {
    const markers = businesses.map(business => business.coordinates)
    setBusinessMarkers(markers)
  }
}

const BusinessList = (props) => {
  const { fetchType } = props
  const [state, setState] = useState({loaded:false})
  
  useEffect(() => {
    fetchBusinesses(setState, fetchType, props.setBusinessMarkers)
  }, [])

  console.log('business list states: ', state)
  if (state.loaded) {
    return (
      <div className="business-list">
        {state.businesses.map(business => (
          <Link to={`${props.match.path}/${business.id}`}>
            <BusinessRow key={business.id} business={business} showMap={props.cardShowMap} />
          </Link>
        )
        
        )}
      </div>
    )
  } else {
    return (
      <div>
        <h1>Business list loading</h1>
      </div>
    )
  }

}

export default BusinessList
