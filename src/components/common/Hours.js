import React from 'react' 
import { days, generateRandomId } from '../../utils'

const insert = (word) => {
  return word.slice(0, 2) + ":" + word.slice(2);
}

const renderDay = (openHour) => {
  const weekDay = days(openHour.day)
  const startTime = insert(openHour.start)
  const endTime = insert(openHour.end)

  return (
    <p className="schedule-day" >
      <span className="schedule-day--weekday">{weekDay}</span>
      <span className="schedule-day--hours">{startTime} - {endTime} </span>
    </p>
  )
}

const Hours = props => {
  const { hours } = props
  const openHours = hours[0].open
  
  const dayHours = () => {
    return openHours.map(openHour => <div key={generateRandomId()} >{renderDay(openHour)}</div>)
  }
  
  return (
    <div className="hours">
      <h2>Hours</h2>
      {dayHours()}
    </div>
  ) 
}

export default Hours