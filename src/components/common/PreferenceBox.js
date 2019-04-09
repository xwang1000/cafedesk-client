import React, { useState, useEffect} from 'react'
import { InteractiveTag } from './Tag'

// This component acts as a form
// props:
// @showGreeting: boolean
// @showPrompt: boolean
// @userTags: array
// @totalTags: array
// @setUserTags: method

const allTagsData = 
  ['quiet', 'free wifi', 'jazzy', 
    'laptop-friendly', 'fast wifi', 
    'matcha', 'good tea', 'bakery', 'breakfast food', 'big tables']

const PreferenceBox = props => {
  const [allTags, setAllTags] = useState([])
  const [selectedTags, setSelectedTags] = useState([])

  useEffect(() => {
    const tags = allTagsData.map(tag => {
      return {
        name: tag,
        selected: false
      }
    })

    setAllTags(tags)
    return (() => props.resetMap())
  }, {})

  const updateTags = () => {
    props.changeUserTags(['some tags', 'right here', 'its working!'])
  }

  const toggleTag = (tagName) => {
    const allTagsCopy = [...allTags]
    for (let i = 0; i < allTags.length; i++) {
      const tag = allTagsCopy[i]

      if (tag.name === tagName) {
        tag.selected = !tag.selected
        break
      }
    }

    setSelectedTags(allTagsCopy)
  }

  const tags = allTags.map(tag => [
    <InteractiveTag key={tag.name} name={tag.name} toggleTag={toggleTag} selected={tag.selected} />
  ])

  return (
    <div>
      <h1>What kind of coffee shops are you looking for?</h1>
      {tags}
      <button onClick={updateTags}>
        show me some coffee shops
      </button>
    </div>
  )
}

export default PreferenceBox
