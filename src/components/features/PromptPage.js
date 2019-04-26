import React from 'react'
import { getAsset } from '../../utils'
import './PromptPage.css'

const PromptPage = () => {
  return (
    <div className="page prompt-page">
      <iframe title="Prompt Page Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d32843.72801232183!2d-123.13054742630624!3d49.280816144071935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5486719d24e2e021%3A0xb7057fe085c86109!2sCanada+Place!5e0!3m2!1sen!2sca!4v1556266412465!5m2!1sen!2sca" width="100%" height="200px" frameBorder="0"></iframe>      
      <img className="prompt-page__image" alt="Coffee brain" src={getAsset('coffee-mind.svg')} />
      <h2>Allow <span>CafeDesk</span> to know your location</h2>
      <p>so that we can help you find better coffee shops!</p>
      
      <div className="prompt-page__instruction">
        <h3>Most mobile devices: </h3>
        <p>Enable it at Settings > Privacy > Location Services.</p>
        
        <h3>MacOS: </h3>
        <p>Enable it at System Preferences > Security & Privacy > Privacy </p>
        
        <h3>Windows</h3>
        <p>Enable it at Start Menu > Settings > Privacy > Location > Change </p>
      </div>
    </div>
  )
}
export default PromptPage
