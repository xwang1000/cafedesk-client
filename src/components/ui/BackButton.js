import React from 'react'
import { getAsset } from '../../utils'
const BackButton = () => 
  <img className="back-button" src={getAsset('back.svg')} onClick={() => window.history.back()} />
export default BackButton