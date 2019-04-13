import React, { useState } from 'react'
import { Route } from 'react-router-dom'
import GoogleApiWrapper from '../common/MapContainer'
import BusinessList from '../common/BusinessList'
import BusinessContainer from '../common/BusinessContainer'
import { getAsset } from '../../utils'
const renderWaiting = () => {
  return (
    <div className="search-page-waiting">
      <img className="search-page-waiting-location" src={getAsset('store-icon.svg')} />
      <img className="search-page-waiting-scan" src={getAsset('scan.svg')} />
    </div>
  )
}

const SearchPage = props => {
  const [markerPositions, setMarkerPositions] = useState([])
  const [businessMarkers, setBusinessMarkers] = useState([])
  const [keywords, setKeywords] = useState([])

  let { user } = props
  const [inputValue, setInputValue] = useState('')
  const [timeoutId, setTimeoutId] = useState(null)
  let keywords_ = ''

  const fireSearch = () => {
    clearTimeout(timeoutId)

    const timeoutId_ = setTimeout(() => {
      setKeywords(keywords_)
    }, 600)

    setTimeoutId(timeoutId_)
  }

  const handleInputChange = (event) => {
    setInputValue(event.target.value)
    keywords_ = (event.target.value).split(' ')
    fireSearch()
  }

  // Reset marker positions to the businesses
  const resetMap = () => {
    setMarkerPositions(businessMarkers)
  }

  // Take the business coords and set the marker positions
  const showOnMap = (coords) => {
    setMarkerPositions([coords])
  }

  const showId = (id) => props.history.push(`/search/${id}`)

  return (
    <div>
      <GoogleApiWrapper markerPositions={markerPositions} showId={showId} />
      <input className="search-bar" type="text" 
        value={inputValue}
        placeholder="look up a coffee shop" 
        onChange={handleInputChange}
      />
      {
        keywords.length >= 1 ?
        <Route
          path={props.match.path} 
          render={(props) => (
            <BusinessList
              {...props}
              fetchType="search"
              keyword={keywords[0]}
              user={user}
              setBusinessMarkers={setBusinessMarkers}
              setMarkerPositions={setMarkerPositions}
            />
          )}
        /> : 
        renderWaiting()
      }

      <Route
        exact path={`${props.match.path}/:businessId`}
        render={(props) => 
          (<BusinessContainer 
            {...props} 
            resetMap={resetMap}
            showOnMap={showOnMap}
          />)}
      />
    </div>
  )
}

export default SearchPage