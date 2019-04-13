import React, { useState } from 'react'
import { getAsset } from '../../utils'
import './ui.css'
import { postUserFavourite } from '../../api/cafedeskAPI'

const FAVOURITE_URL = getAsset('star.svg')


const FavIcon = props => {
  const favouriteClicked = () => postUserFavourite(props.businessId)
  const [favourite, setFavourite] = useState(props.isFav)
  
  const onClick = (event) => {
    event.preventDefault()
    favouriteClicked()
    const favouriteToggled = !favourite
    setFavourite(favouriteToggled)
  }

  const className = favourite ? 'fav-icon' : 'fav-icon fav-icon--deselect'

  return <img className={className} onClick={onClick} src={FAVOURITE_URL} />
}

export default FavIcon
