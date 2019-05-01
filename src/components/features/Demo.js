import React, { useState } from 'react'
import './Demo.css'
import { toClassNames } from '../../utils'

const Demo = () => {
  const [isOpen, toggleOpen] = useState(false)

  const className = toClassNames({
    'demo__body': true,
    'demo__body--slide-in': isOpen
  }) 

  const getClass = isOpen ? 'open' : ''
  
  return (
    <div className="demo">
      <div className="demo__header" onClick={() => toggleOpen(!isOpen)}>
        <i className={"fas fa-flag " + getClass}></i>
      </div>

      <div className={className}>
        <h1>CafeDesk</h1>
        <p>This app is for demo only. Although all data are real life information from Yelp and Google, we do not guarantee the data persistence of your information. </p>
        <p>Feel free to mess around with it. We sincerely hope that it helps you finding a good coffee shop to work at. Please submit any issues <a href="https://github.com/xwang1000/cafedesk-client/issues/new" target="_blank" rel="noopener noreferrer">here</a>.</p>
        <p>
          Check out our github repo <a href="https://github.com/xwang1000/cafedesk-client" rel="noopener noreferrer" target="_blank">here.</a>
        </p>
        <p>
        Icons designed by <strong>Freepic</strong> and <strong>Icongeek26</strong> from <a href="https://www.flaticon.com/">Flaticon</a>
        </p>
      </div>
    </div>
  )
}

export default Demo
