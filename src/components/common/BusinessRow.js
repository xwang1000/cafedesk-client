import React from 'react'
import FavIcon from '../ui/FavIcon'
import TagList from './TagList'
import './Business.css'

const BusinessRow = props => {
  const { business } = props
  const address = business.location.address1
  const is_open = business.hours ? business.hours[0].is_open_now : undefined

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

  return (
    <div>
      <div className="business-row">
        <div className="business-row-col1">
          <img className="business-row-image" src={business.image_url} alt={business.name}></img>
        </div>

        <div className="business-row-col2">
          <FavIcon isFav={business.is_favourite} businessId={business.id} />
          <p className="business-row-name">{business.name}</p>

          <p className="business-row-close">now {is_open ? 'open' : 'closed'} { getDistance(business.distance) }</p>
          
          <p className="business-row-address">{address && address }</p>
          <TagList tags={business.tags} />
        </div>
      </div>
    </div>
  )
}

export default BusinessRow
