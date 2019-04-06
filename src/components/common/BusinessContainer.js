import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getBusinessById } from '../../api/cafedeskAPI'
import TagList from '../common/TagList'

const getAsset = (fileName) => `${process.env.PUBLIC_URL}/assets/${fileName}`

const renderBusinessContainer = (props) => {
  const {image_url, name, distance, is_closed, tags} = props.business
  const distanceInKm = Math.floor(distance / 10) / 100

  return (
    <div className="business-container-bg">
      <Link to="/feed/">
        <div className="business-container-void"></div>
      </Link>
      <div className="business-container float-up">
        <div className="business-container-row1">
          <div className="business-container-col1">
            <img className="business-container-pic" src={image_url} alt={name}></img>
          </div>
          <div className="business-container-col2">
            <h2>{name}</h2>
            <p>{is_closed !== undefined ? (is_closed ? 'closed' : 'open') : ''}</p>
            <p>{distanceInKm ? distanceInKm + ' kms away' : ''}</p>
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
    <div className="business-container-bg">
      <Link to="/feed/">
        <div className="business-container-void"></div>
      </Link>
      <div className="business-container float-up loading">
        <img className="business-container-loading-img" src={getAsset('coffee-cup.svg')} />
      </div>
    </div>
  )
}

const fetchBusinessById = async (setState, id, setMapCoordinates) => {
  setState({isLoaded: false})
  
  const business = await getBusinessById(id)
  business.isLoaded = true
  
  setMapCoordinates(business.coordinates)

  setState(business)
}

const BusinessContainer = (props) => {
  const [business, setBusiness] = useState({isLoaded: false})
  useEffect(() => {
    fetchBusinessById(setBusiness, props.id, props.setMapCoordinates)
  }, {})

  if (business.isLoaded) {
    return renderBusinessContainer({business})
  }
  
  else {
    return renderBusinessContainerLoading()
  }
}

export default BusinessContainer