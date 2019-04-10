import React, { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import BusinessRow from './BusinessRow'
import { getBusinesses, getFavouriteBusinessesByUserId, getViewedBusinessesByUserId } from '../../api/cafedeskAPI'

const fetchBusinesses = async (setState, fetchType, setBusinessMarkers, setMarkerPositions, tags) => {
  setState({loaded: false})
  
  let businesses = []
  if (fetchType === 'recommendations') {
    businesses = await getBusinesses(tags)
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
    setMarkerPositions(markers)
  }
}

const BusinessList = (props) => {
  const { fetchType } = props
  const [state, setState] = useState({loaded:false})

  const usePrevious = value => {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  }

  const prevUserTags = usePrevious(props.user.tags)

  useEffect(() => {
    fetchBusinesses(setState, fetchType, props.setBusinessMarkers, props.setMarkerPositions, props.userTags)
  }, [])

  useEffect(() => {
    if (prevUserTags !== props.user.tags) {
      fetchBusinesses(setState, fetchType, props.setBusinessMarkers, props.setMarkerPositions, props.userTags)
    }
  })

  if (state.loaded) {
    return (
      <div className="business-list">
        {state.businesses.map(business => (
          <Link to={`${props.match.path}/${business.id}`} key={business.id}>
            <BusinessRow key={business.id} business={business} showMap={props.cardShowMap} />
          </Link>
        )
        
        )}
      </div>
    )
  } else {
    return (
      <div>
        <h1>Business list loading...</h1>
      </div>
    )
  }

}

export default BusinessList
