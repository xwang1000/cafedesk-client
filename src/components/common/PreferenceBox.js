import React from 'react'

// props:
// @showGreeting: boolean
// @showPrompt: boolean
// @tags: array
// @setUserTags: method

const PreferenceBox = props => {

  const updateTags = () => {
    props.changeUserTags(['some tags', 'right here', 'its working!'])
  }
  return (
    <div>
      <h1>What kind of coffee shops are you looking for?</h1>
      <button onClick={updateTags}>
        change user tags
      </button>
    </div>
  )
}

export default PreferenceBox