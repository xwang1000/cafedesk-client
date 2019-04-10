import React, { useState, useEffect} from 'react'
import { InteractiveTag } from './Tag'
import './PreferenceBox.css'

const allTagsData = [
  {
    name: 'quiet',
    selected: false
  },
  {
    name: 'good tea',
    selected: true
  },
  {
    name: 'fast wifi',
    selected: true
  },
  {
    name: 'laptop-friendly',
    selected: true
  },
  {
    name: 'jazzy',
    selected: false
  },
  {
    name: 'free wifi',
    selected: false
  },
  {
    name: 'bakery',
    selected: false
  }
]

const PreferenceBox = props => {
  const [allTags, setAllTags] = useState([])

  useEffect(() => {
    setAllTags(allTagsData)
  }, {})

  const updateTags = () => {
    const tags = allTags.filter(tag => tag.selected)
    props.changeUserTags(tags)
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

    setAllTags(allTagsCopy)
  }

  const tags = allTags.map(tag => [
    <InteractiveTag key={tag.name} name={tag.name} toggleTag={toggleTag} selected={tag.selected} updateTags={updateTags} />
  ])

  return (
    <div className="preference-box">
      {tags}
    </div>
  )
}

export default PreferenceBox
