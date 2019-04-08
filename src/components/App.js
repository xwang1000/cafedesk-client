import React, { useState, useEffect } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import './App.css'
import HomePage from './features/HomePage'
import SearchPage from './features/SearchPage'
import FavPage from './features/FavPage'
import ProfilePage from './features/ProfilePage'
// import SearchResultsContainer from './features/SearchResultsContainer'
import NavBar from './features/NavBar'

const fetchUserLocation = async (setUserLocation) => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(setUserLocation)
  } 
}

function App() {

  const [userCoords, setUserCoords] = useState({})
  const [userTags, setUserTags] = useState([])

  const changeUserCoords = location => {
    const {latitude, longitude} = location.coords
    const coords = {latitude, longitude}

    localStorage.setItem('userCoords', JSON.stringify(coords))
    setUserCoords(
      JSON.parse(localStorage.getItem('userCoords'))
    )
  }

  useEffect(() => {
    fetchUserLocation(changeUserCoords)
    setUserTags(['free wifi', 'jazzy music'])
  }, [])

  return (
    <div>
      
      <BrowserRouter>
        <Switch>
          <Route exact 
            path='/feed/:id'
            render={(props) => <HomePage {...props} 
            user={{
              coords: userCoords,
              tags: userTags
            }}  />}
          />
          <Route path='/feed' 
            render={(props) => <HomePage {...props} 
            user={{
              coords: userCoords,
              tags: userTags
            }} />}
          />
          <Route path='/search' 
            render={(props) => <SearchPage {...props} 
            user={{
              coords: userCoords,
              tags: userTags
            }} />}
          />
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
