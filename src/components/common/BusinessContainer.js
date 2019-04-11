import React, { useState, useEffect } from 'react'
import { getBusinessById } from '../../api/cafedeskAPI'
import TagList from '../common/TagList'
import { getAsset } from '../../utils'

const goBack = () => window.history.back()

const renderBusinessContainer = (props) => {
  const { image_url, name, distance, is_closed, tags, is_favourite, id } = props.business
  const distanceInKm = Math.floor(distance / 10) / 100000

  return (
    <div>
      <div className="business-container">
        <h1 className="business-container-back" onClick={goBack}>Go Back</h1>
        <div className="business-container-row1">
          <div className="business-container-col1">
            <img className="business-container-pic" src={image_url} alt={name}></img>
          </div>
          <div className="business-container-col2">
            <h2>{name}</h2>
            <p>{is_closed !== undefined ? (is_closed ? 'closed' : 'open') : ''}</p>
            <p>{distanceInKm ? distanceInKm + ' km away' : ''}</p>
          </div>

        </div>

        <div className="business-container-row2">
          <TagList tags={tags} />
        </div>
      </div>
    </div>
  )
}

const renderBusinessContainerLoading = () => {
  return (
    <div className="business-container float-up loading">
      <h1 onClick={goBack}>Go Back</h1>
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
    showOnMap(business.coordinates)
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
