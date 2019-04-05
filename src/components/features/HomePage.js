import React, { useState, useEffect } from 'react'
import GoogleApiWrapper from '../common/MapContainer'
import BusinessList from '../common/BusinessList'
import BusinessContainer from '../common/BusinessContainer'
import { getBusinesses, getBusinessById } from '../../api/cafedeskAPI'

const HomePage = (props) => {

  const businesses = [
    {
      id: "zLQ9EQ8qAhEfXDc-2AieVQ",
      alias: "catfe-vancouver-2",
      name: "Catfe",
      image_url: "https://s3-media2.fl.yelpcdn.com/bphoto/fBoz2g-b-DyuiSty_NCQkg/o.jpg",
      tags: ['quiet', 'free wifi', 'jazzy'],
      closing_time: 7,
      distance: 1.2
    },
    {
      id: "NUmZ89MwOx4nrtW7w5TruQ",
      alias: "van-pet-yaletown-vancouver",
      name: "Van Pet Yaletown",
      image_url: "https://s3-media1.fl.yelpcdn.com/bphoto/xIdKo18QtipPdDPLbjQVsA/o.jpg",
      tags: ['laptop-friendly', 'authentic tea', 'hiphop music'],
      closing_time: 9,
      distance: 3
    },
    {
      id: "dX6y4zA-1AtWsYnT4AZXNg",
      alias: "revolver-vancouver",
      name: "Revolver",
      image_url: "https://s3-media4.fl.yelpcdn.com/bphoto/CAExZOlAizC-yyLZrZt4xQ/o.jpg",
      tags: ['folk music', 'white noice', 'relaxing'],
      closing_time: 10,
      distance: 1.6
    },
    {
      id: "zLQ9EQ8qAhEfXDc-f2AieVQ",
      alias: "catfe-vancouver-2",
      name: "Catfe",
      image_url: "https://s3-media2.fl.yelpcdn.com/bphoto/fBoz2g-b-DyuiSty_NCQkg/o.jpg",
      tags: ['quiet', 'free wifi', 'jazzy'],
      closing_time: 7,
      distance: 1.2
    },
    {
      id: "NUmZ89MwOx4nrtW7w5TfruQ",
      alias: "van-pet-yaletown-vancouver",
      name: "Van Pet Yaletown",
      image_url: "https://s3-media1.fl.yelpcdn.com/bphoto/xIdKo18QtipPdDPLbjQVsA/o.jpg",
      tags: ['laptop-friendly', 'authentic tea', 'hiphop music'],
      closing_time: 9,
      distance: 3
    },
    {
      id: "dX6y4zA-1AtWsYnT4fAZXNg",
      alias: "revolver-vancouver",
      name: "Revolver",
      image_url: "https://s3-media4.fl.yelpcdn.com/bphoto/CAExZOlAizC-yyLZrZt4xQ/o.jpg",
      tags: ['folk music', 'white noice', 'relaxing'],
      closing_time: 10,
      distance: 1.6
    }
  ]

  const paramsId = props.match.params.id 
  const [selectedBusiness, setSelectedBusiness] = useState({})
  const [mapPosition, setMapPosition] = useState({})
  const [markerPositions, setMarkerPositions] = useState([])

  useEffect(() => {

    const fetchData = async () => {
      const businessesQueried = await getBusinesses('cupcake')
      
      // Set states
      setSelectedBusiness(businessesQueried[0])

      // set map and markers coordinates
      setMapPosition(businessesQueried[0].coordinates)
      setMarkerPositions([businessesQueried[0].coordinates])
    
    }
    fetchData()
    
    // provide empty array to avoide activating it on component updates
  }, [])

  const setMapCoordinates = (coords) => {
    if (!coords) {
      coords = {
        latitude: 123, 
        longitude: 123
      }
    } 
    
    setMarkerPositions([coords])
    setMapPosition(coords)
    console.log('coods: ', coords)
  }

  return (
    <div className="home-page">
        {paramsId ? <BusinessContainer id={paramsId} business={selectedBusiness} setMapCoordinates={setMapCoordinates} />: <div></div>}
        <GoogleApiWrapper mapPosition={mapPosition} markerPositions={markerPositions} />
        <BusinessList businesses={businesses} />
    </div>
  )
}

export default HomePage
