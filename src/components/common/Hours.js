import React from 'react' 
import { getYelpDay, generateRandomId, convertToYelpDay, convertToHours } from '../../utils'
const todayDay = new Date().getDay()

const renderDay = (openHour) => {
  // Gather information
  const weekDay = getYelpDay(openHour.day)
  const startTime = convertToHours(openHour.start)
  const endTime = convertToHours(openHour.end)
  
  // If it is today, add class
  const today = convertToYelpDay(todayDay) === openHour.day
  const className = today ? 'schedule-day--today' : ''

  return (
    <p className={"schedule-day " + className} >
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