import React from 'react' 
import { days, generateRandomId } from '../../utils'

const insert = (word) => {
  const txt2 = word.slice(0, 2) + ":" + word.slice(2);
  return txt2
}

const renderDay = (openHour) => {
  const weekDay = days(openHour.day)
  const startTime = insert(openHour.start)
  const endTime = insert(openHour.end)

  return `${weekDay}  ${startTime} - ${endTime}`
}

const Hours = props => {
  const { hours } = props
  const openHours = hours[0].open
  
  const dayHours = () => {
    return openHours.map(openHour => <p className="schedule-day" key={generateRandomId()} >{renderDay(openHour)}</p>)
  }
  
  return (
    <div class="hours">
      {dayHours()}
    </div>
  ) 
}

export default Hours