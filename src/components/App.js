import React, { useState } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
// import {getBusinesses} from '../api/cafedeskAPI'

import './App.css'
import HomePage from './HomePage'
import SearchPage from './SearchPage'
import FavPage from './FavPage'
import ProfilePage from './ProfilePage'
import NavBar from './NavBar'

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
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/search' component={SearchPage} />
          <Route path='/fav' component={FavPage} />
          <Route path='/profile' component={ProfilePage} />
        </Switch>
      <NavBar />
      </BrowserRouter>
    </div>
  )

}

export default App
