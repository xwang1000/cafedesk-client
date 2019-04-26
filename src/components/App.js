import React, { useState, useEffect } from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import './App.css'
import PromptPage from './features/PromptPage'
import HomePage from './features/HomePage'
import SearchPage from './features/SearchPage'
import FavPage from './features/FavPage'
import ProfilePage from './features/ProfilePage'
import NavBar from './features/NavBar'
import { isEmptyObject } from '../utils'

const fetchUserCoords = async (setUserCoords) => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(setUserCoords)
  }
}

function App() {

  const [userCoords, setUserCoords] = useState({})
  const [userTags, setUserTags] = useState([])

  const changeUserCoords = location => {
    const { latitude, longitude } = location.coords
    const coords = { latitude, longitude }

    localStorage.setItem('userCoords', JSON.stringify(coords))
    setUserCoords(
      JSON.parse(localStorage.getItem('userCoords'))
    )
  }

  const changeUserTags = tags => {
    setUserTags(tags)
    localStorage.setItem('userTags', JSON.stringify(tags))
  }

  useEffect(() => {
    fetchUserCoords(changeUserCoords)
  }, [])

  return (
    <div className="app">
      <BrowserRouter>
        {
          isEmptyObject(userCoords) ?
          <Route path="/" render={PromptPage} />
          :
          <Switch>
            <Route exact path="/" render={() => (
              <Redirect to="/feed" />
            )} />
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
          </Switch>
        }
        
        <NavBar />
      </BrowserRouter>
    </div>
  )

}

export default App
