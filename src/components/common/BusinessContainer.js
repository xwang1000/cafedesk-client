import React, { useState, useEffect } from 'react'
import { getBusinessById } from '../../api/cafedeskAPI'
import TagList from '../common/TagList'
import BackButton from '../ui/BackButton'
import Hours from './Hours'
import Gallery from '../features/Gallery'
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
  const { image_url, name, distance, tags, url, hours, photos } = business
  const is_open = hours ? hours[0].is_open_now : undefined

  const address = props.business.location.address1
  return (
      <div className="business-container">
        <BackButton />
        <Gallery photos={photos} name={name} />

        <div className="business-container__body">
            <div className="business-container-row1">
              <h2>
                {name}
                <a className="business-container__yelp" 
                   href={url} 
                   rel="noopener noreferrer" 
                   target="_blank"
                >
                  yelp
                </a>
              </h2>
              <p>
                <span className="business-container-close">
                  <i class="far fa-clock"></i>
                  now {is_open ? 'open' : 'closed'} { getDistance(distance) }
                </span>
                <span className="business-container-address">
                  <i class="fas fa-map-marker-alt"></i>
                  {address && address }
                </span>
              </p>
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

const BusinessContainer = props => {
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
