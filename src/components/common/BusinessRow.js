import React from 'react'
import FavIcon from '../ui/FavIcon'
import TagList from './TagList'
import './Business.css'

const BusinessRow = props => {
  const { business } = props
  const distance = () => {
    if (business.distance) {
      return <p className="business-row-distance">{ `${(business.distance / 1000).toFixed(2)} km away` }</p>
    }
    return null
  }

  const favouriteClicked = () => {
    console.log('clicked fav!')
  }

  console.log('business is fav: ', business.is_favourite)
  return (
    <div>
      <div className="business-row">
        <div className="business-row-col1">
          <img className="business-row-image" src={business.image_url} alt={business.name}></img>
        </div>

        <div className="business-row-col2">
          <p className="business-row-name">{business.name}</p>
          <FavIcon isFav={business.is_favourite} favouriteClicked={favouriteClicked}/>
          <p className="business-row-close">{business.is_closed ? 'Closed' : 'Open'} Now</p>
          { distance() }
          <TagList tags={business.tags} />
        </div>
      </div>
    </div>
  )
}

export default BusinessRow
