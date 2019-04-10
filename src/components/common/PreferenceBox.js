import React, { useState, useEffect } from 'react'
import { InteractiveTag } from './Tag'
import './PreferenceBox.css'
import { getTags } from '../../api/cafedeskAPI'

const allTagsData = []
getTags()
  .then(tags => {
    tags.sort().forEach((tag, i) => {
      allTagsData.push({ name: tag, selected: i < 3 ? true : false })
    })
  })
  .catch(error => {
    console.error(error);
  })

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
