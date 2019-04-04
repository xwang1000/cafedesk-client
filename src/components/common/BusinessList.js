import React from 'react'
import BusinessRow from './BusinessRow'

const BusinessList = (props) => {
  const { businesses} = props
  return (
    <div className="business-list">
      {businesses.map(business => <BusinessRow key={business.id} business={business} />)}
    </div>
  )
}

export default BusinessList
