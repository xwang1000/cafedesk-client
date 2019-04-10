import React from 'react'

import TagList from './TagList'
import './Business.css'

const BusinessRow = props => {
  const { business } = props
  return (
    <div>
      <div className="business-row">
        <div className="business-row-col1">
          <img className="business-row-image" src={business.image_url} alt={business.name}></img>
        </div>

        <div className="business-row-col2">
          <p className="business-row-name">{business.name}</p>
          <p className="business-row-close">{business.is_closed ? 'Closed' : 'Open'} Now</p>
          <p className="business-row-distance">{(business.distance / 1000).toFixed(2)} km away</p>
          <TagList tags={business.tags} />
        </div>
      </div>
    </div>
  )
}

export default BusinessRow
