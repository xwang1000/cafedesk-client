import React, { useState, useEffect } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

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

  const [user, setUser] = useState({})

  const setUserLocation = location => {
    const {latitude, longitude} = location.coords
    const coords = {latitude, longitude}
    setUser({
      ...coords
      }
    )
    console.log(coords)
    document.cookie = `userlocation=asdf;domain=cafedesk-server.herokuapp.com;path=/;max-age=31536000`
  }

  useEffect(() => {
    fetchUserLocation(setUserLocation)
  }, [])

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
