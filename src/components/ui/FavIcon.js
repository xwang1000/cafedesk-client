import React from 'react'

const FavIcon = props => {
  const onClick = (event) => {
    event.preventDefault()
    props.favouriteClicked()
  }

  return <h2 onClick={onClick}>{props.isFav ? 'favourite' : 'not fav'}</h2>
}

export default FavIcon