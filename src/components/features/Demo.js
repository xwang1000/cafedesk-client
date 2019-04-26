import React, { useState } from 'react'
import './Demo.css'

const Demo = () => {
  const [isOpen, toggleOpen] = useState(false)

  const renderBody = () => {
    if (isOpen) {
      return <div className="demo__body">
        <h1>CafeDesk</h1>
        <p>This app is for demo only. Although all data are real life information from Yelp and Google, we do not guarantee the data persistence of your information. </p>
        <p>Feel free to mess around with it. We sincerely hope that it helps you finding a good coffee shop to work at. Please submit any issues <a href="https://github.com/xwang1000/cafedesk-client/issues/new" target="_blank">here</a>.</p>
        <p>
          Check out our github repo 
          <a href="https://github.com/xwang1000/cafedesk-client" target="_blank"> here.</a>
        </p>
      </div>
    }

    return ''
  }
  return (
    <div className="demo">
      <div className="demo__header" onClick={() => toggleOpen(!isOpen)}>
        <h1>DEMO</h1>
      </div>

      {renderBody()}
    </div>
  )
}

export default Demo
