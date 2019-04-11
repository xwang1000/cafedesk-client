import React, { useState, useEffect } from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import './App.css'
import HomePage from './features/HomePage'
import SearchPage from './features/SearchPage'
import FavPage from './features/FavPage'
import ProfilePage from './features/ProfilePage'
// import SearchResultsContainer from './features/SearchResultsContainer'
import PreferenceBox from './common/PreferenceBox'
import NavBar from './features/NavBar'

const fetchUserCoords = async (setUserCoords) => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(setUserCoords)
  } 
}

const renderRedirect = (userTags) => {
  if (userTags.length === 0) {
    return <Redirect to='/preference' />
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

  const changeUserTags = tags => {
    setUserTags(tags)
    localStorage.setItem('userTags', JSON.stringify(tags))
    console.log(localStorage)
  }

  useEffect(() => {
    fetchUserCoords(changeUserCoords)
  }, [])

  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <div className="pages">
            <Route exact path="/" render={() => (
                <Redirect to="/feed"/>
            )}/>
            <Route path='/feed' 
              render={(props) => <HomePage {...props} 
              user={{
                coords: userCoords,
                tags: userTags
              }}
              changeUserTags={changeUserTags}
              />}
            />
            <Route path='/search' 
              render={(props) => <SearchPage {...props} 
              user={{
                coords: userCoords,
                tags: userTags
              }}
              />}
            />
            <Route path='/fav' 
              render={(props) => <FavPage {...props} 
              />}
            />
            <Route path='/profile' 
              render={(props) => <ProfilePage {...props} 
              user={{
                coords: userCoords,
                tags: userTags
              }}
              />}
            />
          </div>
        </Switch>
        
        <NavBar />
      </BrowserRouter>
    </div>
  )

}

export default App
