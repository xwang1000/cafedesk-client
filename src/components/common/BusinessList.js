import React, { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import BusinessRow from './BusinessRow'
import { getAsset } from '../../utils'
import { getBusinesses, getFavouriteBusinessesByUserId, getViewedBusinessesByUserId, getBusinessByKeyword } from '../../api/cafedeskAPI'

const removeDups = businesses => {
  let uniqueIds = []
  let uniqueBusinesses = []
  businesses.forEach(business => {
    if (!uniqueIds[business.id]) {
      uniqueIds[business.id] = true
      uniqueBusinesses.push(business)
    }
  })
  return uniqueBusinesses;
}

const fetchBusinesses = async (setState, fetchType, setBusinessMarkers, setMarkerPositions, tags, keyword) => {
  setState({ loaded: false })

  let businesses = []

  try {
    if (fetchType === 'recommendations' && tags.length > 0) {
      businesses = await getBusinesses(tags)
    }
  
    if (fetchType === 'favourite') {
      businesses = await getFavouriteBusinessesByUserId(1)
    }
  
    if (fetchType === 'history') {
      businesses = await getViewedBusinessesByUserId(1)
    }
  
    if (fetchType === 'search') {
      businesses = await getBusinessByKeyword(keyword)
    }
  } catch (error) {

  }
  
  const newState = {
    loaded: true,
    businesses: removeDups(businesses)
  }
  setState(newState)

  if (setBusinessMarkers) {
    const markers = businesses.map(business => ({
      id: business.id,
      coordinates: business.coordinates
    }))

    setBusinessMarkers(markers)
    setMarkerPositions(markers)
  }
}

const BusinessList = (props) => {
  const { fetchType } = props
  const [state, setState] = useState({ loaded: false })

  const usePrevious = value => {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  }

  const prevUserTags = props.user ? usePrevious(props.user.tags) : []
  const prevKeyword = usePrevious(props.keyword)

  useEffect(() => {
    fetchBusinesses(setState, fetchType, props.setBusinessMarkers, props.setMarkerPositions, props.userTags, props.keyword)
  }, [])

  useEffect(() => {
    if (props.user) {
      if (prevUserTags !== props.user.tags || props.keyword !== prevKeyword) {
        fetchBusinesses(setState, fetchType, props.setBusinessMarkers, props.setMarkerPositions, props.user.tags, props.keyword)
      }
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
      <div className="business-list-loading">
        <img src={getAsset('loading.svg')} alt="a loading donut" />
      </div>
    )
  }

}

export default BusinessList
