import React from 'react'
import { Link } from 'react-router-dom'
const BusinessContainer = (props) => {
  const {image_url, name, display_phone, distance, is_closed, location} = props.business
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

export default BusinessContainer