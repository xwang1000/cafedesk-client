import React, { useState, useEffect } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
// import {getBusinesses} from '../api/cafedeskAPI'

import './App.css'
import HomePage from './features/HomePage'
import SearchPage from './features/SearchPage'
import FavPage from './features/FavPage'
import ProfilePage from './features/ProfilePage'
import SearchResultsContainer from './features/SearchResultsContainer'
import NavBar from './features/NavBar'

const fetchUserLocation = async (setUserLocation) => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(setUserLocation)
  } else {

  }
}

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
  const [user, setUser] = useState({})

  const setUserLocation = location => {
    setUser({
      coords: {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude
      }
    })
  }

  useEffect(() => {
    fetchUserLocation(setUserLocation)
  })

  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact 
            path='/feed/:id'
            render={(props) => <HomePage {...props} user={user}  />}
          />
          <Route path='/feed' 
            render={(props) => <HomePage {...props} user={user} />}
          />
          <Route path='/search' component={SearchPage} />
          <Route path='/fav' component={FavPage} />
          <Route path='/profile' component={ProfilePage} />
          {/* <Route path='/search/results' component={SearchResultsContainer} /> */}
        </Switch>
        
      <NavBar />
      </BrowserRouter>
    </div>
  )

}

export default App
