import React from 'react'
import FavIcon from '../ui/FavIcon'
import TagList from './TagList'
import './Business.css'

const BusinessRow = props => {
  const { business } = props
  const address = business.location.address1
  const distance = () => {
    let distance = ''
    if (business.distance) {
      distance = (business.distance / 1000).toFixed(2) + 'km'
      if (business.distance < 1000) {
        distance = business.distance.toFixed(0) + ' m'
      }
      return <span className="business-row-distance">{ `${distance}` }</span>
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

          <p className="business-row-close">   now {business.is_closed ? 'closed' : 'open'} { distance() }</p>
          
          <p className="business-row-address">{address && address }</p>
          <TagList tags={business.tags} />
        </div>
      </div>
    </div>
  )
}

export default BusinessRow
