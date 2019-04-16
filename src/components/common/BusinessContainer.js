import React, { useState, useEffect } from 'react'
import { getBusinessById } from '../../api/cafedeskAPI'
import TagList from '../common/TagList'
import BackButton from '../ui/BackButton'
import Hours from './Hours'
import { getAsset } from '../../utils'

const getDistance = (distance) => {
  let distance_ = ''
  if (distance) {
    distance_ = (distance / 1000).toFixed(2) + 'km'
    if (distance < 1000) {
      distance_ = distance.toFixed(0) + ' m'
    }
    return <span className="business-row-distance">{ `${distance_}` }</span>
  }
  return ''
}

const renderBusinessContainer = (props) => {
  const { business } = props
  const { image_url, name, distance, is_closed, tags, url, hours } = business
  const address = props.business.location.address1
  return (
    <div>
      <div className="business-container">
        <BackButton />
        <div className="business-container-row1">
          <div className="business-container-col1">
            <img className="business-container-pic" src={image_url} alt={name}></img>
          </div>
          <div className="business-container-col2">
            <h2>{name}</h2>
            <p className="business-container-close">now {is_closed ? 'closed' : 'open'} { getDistance(distance) }</p>
            <p className="business-container-address">{address && address }</p>
            <a className="business-container-link" href={url} rel="noopener noreferrer" target="_blank">open in yelp</a>
          </div>

        </div>
        <div className="business-container-row2">
          <TagList tags={tags} />
        </div>
        <Hours hours={hours} />
      </div>
    </div>
  )
}

const renderBusinessContainerLoading = () => {
  return (
    <div className="business-container float-up loading">
      <div className="back-button-wrapper"><BackButton /></div>
      <img className="business-container-loading-img" src={getAsset('coffee-cup.svg')} alt="loading iamge" />
    </div>
  )
}

const fetchBusinessById = async (setState, id, showOnMap) => {
  setState({ isLoaded: false })

  const business = await getBusinessById(id)
  business.isLoaded = true

  setState(business)

  if (showOnMap) {
    showOnMap({
      id: business.id,
      coordinates: business.coordinates
    })
  }
}

const BusinessContainer = (props) => {
  const [business, setBusiness] = useState({ isLoaded: false })
  useEffect(() => {
    fetchBusinessById(setBusiness, props.match.params.businessId, props.showOnMap)

    if (props.resetMap) {
      return (() => props.resetMap())
    }
  }, {})

  if (business.isLoaded) {
    return renderBusinessContainer({ business })
  }
  return renderBusinessContainerLoading()
}

export default BusinessContainer
