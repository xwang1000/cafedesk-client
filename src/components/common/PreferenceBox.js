import React, { useState, useEffect} from 'react'
import TagList from './TagList'

// props:
// @showGreeting: boolean
// @showPrompt: boolean
// @userTags: array
// @totalTags: array
// @setUserTags: method

const allTags = 
  ['queit', 'free wifi', 'jazzy', 
    'laptop-friendly', 'fast wifi', 
    'matcha', 'good tea', 'bakery', 'breakfast food', 'big tables']

const getAllTags = () => {
  setTimeout(() => {
    return allTags
    }, 1000)
}

const PreferenceBox = props => {
  const [allTags, setAllTags] = useState([])

  useEffect(() => {
    setAllTags(getAllTags())
    return (() => props.resetMap())
  }, {})

  const updateTags = () => {
    props.changeUserTags(['some tags', 'right here', 'its working!'])
  }

  return (
    <div>
      <h1>What kind of coffee shops are you looking for?</h1>
      <TagList tags={getAllTags} />
      <button onClick={updateTags}>
        change user tags
      </button>
    </div>
  )
}

export default PreferenceBox