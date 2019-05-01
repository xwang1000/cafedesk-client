import React from 'react'

const BackButton = () => 
  <i 
    className="back-button fas fa-chevron-down"
    onClick={() => window.history.back()}
    >
  </i>
  
export default BackButton
