import React from 'react'
import GoogleApiWrapper from '../common/MapContainer'
import { getAsset } from '../../utils'

const SearchPage = (props) => {
  let { user } = props

  if (user.coords === undefined) {
    return (
      <div className="search-page-loading">
        {/* <div className="loading-icon-container">
          <img className="loading-icon" src={getAsset('coffee-cup.svg')} alt="loading icon" />
        </div> */}
      </div>
    )
  }

  return (
    <div>
      <GoogleApiWrapper mapPosition={user.coords} markerPositions={[user.coords]} />
      <h1>Search Page</h1>
    </div>
  )
}
export default SearchPage