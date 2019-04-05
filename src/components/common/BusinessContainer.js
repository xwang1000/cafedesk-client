import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getBusinessById } from '../../api/cafedeskAPI'

const renderBusinessContainer = (props) => {
  const {image_url, name, distance, is_closed} = props.business
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
      <div className="business-container float-up">
        <div className="business-container-row1">
          <div className="business-container-col1">
            <div className="business-container-pic"></div>
          </div>
          <div className="business-container-col2">
            <h2>-----</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

const fetchBusinessById = async (setState, id) => {
  setState({isLoaded: false})
  
  const businessQueried = await getBusinessById(id)
  businessQueried.isLoaded = true
  
  setState(businessQueried)
}

const BusinessContainer = (props) => {
  const [business, setBusiness] = useState({isLoaded: false})

  useEffect(() => {
    fetchBusinessById(setBusiness, props.id)
  }, {})

  if (business.isLoaded) {
    return renderBusinessContainer({business})
  }
  
  else {
    return renderBusinessContainerLoading()
  }
}

export default BusinessContainer