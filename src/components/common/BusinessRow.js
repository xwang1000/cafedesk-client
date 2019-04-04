import React from 'react'
import { Link } from 'react-router-dom'
import TagList from './TagList'
import './Business.css'

const BusinessRow = props => {
  const { business, onClickBusiness } = props
  const onClick = () => {
    onClickBusiness(business.id)
  }

  return (
    <Link to={`/feed/${business.id}`}>
      <div className="business-row">
          <div className="business-row-col1">
            <img className="business-row-image" src={business.image_url}></img>
          </div>

          <div className="business-row-col2">
            <p className="business-row-name">{business.name}</p>
            <p className="business-row-close">closes at {business.closing_time} pm</p>
            <p className="business-row-distance">{business.distance} km away</p>
            <TagList tags = {business.tags} />
          </div>
      </div>
    </Link>
  )
}

export default BusinessRow
