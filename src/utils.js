const getDay  = dayOfTheWeek => {
  const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat']
  return weekdays[dayOfTheWeek % 7]
}

module.exports = {
  getAsset (fileName) {
    return `${process.env.PUBLIC_URL}/assets/${fileName}`
  },

  generateRandomId (length = 8) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
    for (var i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  },

  getYelpDay (dayOfTheWeek) {
    return getDay(dayOfTheWeek % 7 + 8)
  },

  convertToYelpDay (day) {
    return day % 7 - 1
  },

  toClassNames (classNames) {
    return Object.keys(classNames).reduce((classNamesList, currentName) => {
      if (classNames[currentName]) {
        const newClassNamesList = classNamesList
        newClassNamesList.push(currentName)
        return newClassNamesList
      } else {
        return classNamesList
      }
    }, []).join(' ')
  },

  convertToHours (word) {
    return word.slice(0, 2) + ":" + word.slice(2)
  },

  isEmptyObject (obj) {
    return Object.keys(obj).length === 0 && obj.constructor === Object
  }
  
}
