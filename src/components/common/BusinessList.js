import React, { useEffect, useState } from 'react'
import BusinessRow from './BusinessRow'
import { getBusinesses, getFavouriteBusinessesByUserId } from '../../api/cafedeskAPI'

const fetchBusinesses = async (setState, fetchType) => {
  setState({loaded: false})
  
  let businesses = []
  if (fetchType === 'recommendations') {
    businesses = await getBusinesses()
  }

  if (fetchType === 'favourite') {
    businesses = await getFavouriteBusinessesByUserId(1)
  }

  const newState = {
    loaded: true,
    businesses: businesses
  }
  setState(newState)
}

const BusinessList = (props) => {
  const { fetchType } = props
  const [state, setState] = useState({loaded:false})
  
  useEffect(() => {
    fetchBusinesses(setState, fetchType)
  }, [])

  console.log('business list states: ', state)
  if (state.loaded) {
    return (
      <div className="business-list">
        {state.businesses.map(business => <BusinessRow key={business.id} business={business} showMap={props.cardShowMap} />)}
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
