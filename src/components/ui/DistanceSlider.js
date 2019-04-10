import React, { useState } from 'react'
import InputRange from 'react-input-range';
import './ui.css'

const DistanceSlider = props => {
  const [value, setValue] = useState(10)
  return (
    <div>
      <InputRange
        maxValue={20}
        minValue={0}
        value={value}
        onChange={value => setValue(value)} />
    </div>
  )
}

export default DistanceSlider