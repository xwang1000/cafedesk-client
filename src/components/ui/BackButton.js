import React from 'react'
import { getAsset } from '../../utils'
const BackButton = () => 
  <img className="back-button" src={getAsset('back.svg')} alt="return to the previous page" onClick={() => window.history.back()} />
export default BackButton