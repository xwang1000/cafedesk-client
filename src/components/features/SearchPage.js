import React, { useState } from 'react'
import { Route } from 'react-router-dom'
import GoogleApiWrapper from '../common/MapContainer'
import BusinessList from '../common/BusinessList'
import BusinessContainer from '../common/BusinessContainer'

const SearchPage = props => {
  const [markerPositions, setMarkerPositions] = useState([])
  const [businessMarkers, setBusinessMarkers] = useState([])
  const [keywords, setKeywords] = useState([])

  let { user } = props
  const [inputValue, setInputValue] = useState('')

  const handleInputChange = (event) => {
    setInputValue(event.target.value)

    setKeywords(inputValue.split(' '))
  }

  // Reset marker positions to the businesses
  const resetMap = () => {
    setMarkerPositions(businessMarkers)
  }

  // Take the business coords and set the marker positions
  const showOnMap = (coords) => {
    setMarkerPositions([coords])
  }

  return (
    <div>
      <GoogleApiWrapper markerPositions={markerPositions} />
      <input className="search-bar" type="text" 
        value={inputValue} 
        placeholder="look up a coffee shop" 
        onChange={handleInputChange}
      />
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
      />
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