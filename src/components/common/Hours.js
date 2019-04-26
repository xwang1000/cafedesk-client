import React from 'react' 
import { getYelpDay, generateRandomId, convertToYelpDay, convertToHours, toClassNames } from '../../utils'
const todayDay = new Date().getDay()

const renderDay = (openHour) => {
  // Gather information
  const weekDay = getYelpDay(openHour.day)
  const startTime = convertToHours(openHour.start)
  const endTime = convertToHours(openHour.end)
  
  const className = toClassNames ({
    'schedule-day': true,
    'schedule-day--today': convertToYelpDay(todayDay) === openHour.day
  })

  return (
    <p className={className} >
      <span className="schedule-day--weekday">{weekDay}</span>
      <span className="schedule-day--hours">{startTime} - {endTime} </span>
    </p>
  )
}

const Hours = props => {
  const { hours } = props

  if (hours !== undefined) {
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

  return (
    <div className="hours">
      <h2>Hours</h2>
      <p className="schedule-day">not available</p>
    </div>
  )

}

export default Hours
