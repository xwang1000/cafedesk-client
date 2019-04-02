import React, { useState } from 'react'
// import {getBusinesses} from '../api/cafedeskAPI'
import './App.css'
import HomePage from './HomePage'

function App() {
  // const [businesses, setBusinesses] = useState([])

  // const searchWithKeyword = (event) => {
  //   event.preventDefault()
  //   let keyword = event.target.keyword.value
  //   lookupBusiness(keyword)
  //   keyword = ''
  // }

  // const lookupBusiness = (keyword) => {
  //   getBusinesses(keyword)
  //     .then(businesses => {
  //       setBusinesses(businesses)
  //     })
  // }

  // return (
  //   <div className="App">
  //     <form onSubmit={searchWithKeyword}>
  //       <input type="text" name="keyword" placeholder="Search for businesses..."></input>
  //       <input type="submit" value="search"></input>
  //     </form>
  //     {businesses.map(business => (
  //       <p key={business.id}>{business.name}</p>
  //     ))}
  //   </div>
  // )

  // SETTING UP REACT COMPONENTS
  return (
    <HomePage />
  )

}

export default App
