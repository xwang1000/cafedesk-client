import React from 'react'
import './Gallery.css'

const Gallery = props => {
  const { photos, name } = props
  
  return (
    <div className="gallery">
      {photos.map(photoURL => (
        <img 
          src={photoURL} 
          key={photoURL}
          alt={name}
        >
        </img>
      ))}
    </div>
  )
}

export default Gallery
