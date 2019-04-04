import React, { useState, useEffect } from 'react'
import GoogleApiWrapper from './MapContainer'
import BusinessList from './BusinessList'
import BusinessContainer from './BusinessContainer'
import { getBusinesses } from '../api/cafedeskAPI'
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

  const [selectedId, setSelectedId] = useState('')
  const paramsId = props.match.params.id 
  const [selectedBusiness, setSelectedBusiness] = useState({})
  
  useEffect(() => {
    async function fetchData() {
      const businessesQueried = await getBusinesses('paramsId')
      setSelectedBusiness(businessesQueried[0])
    }
    fetchData()
  }, [])

  return (
    <div className="home-page">
        {paramsId ? <BusinessContainer id={paramsId} business={selectedBusiness}/>: <div></div>}
        <GoogleApiWrapper />
        <BusinessList businesses={businesses} />
        {/* conditional rendering business detail based on selected id */}
    </div>
  )
}

export default HomePage
