const getDay  = dayOfTheWeek => {
  const weekday = new Array(7);
  weekday[1]="Mon";
  weekday[2]="Tue";
  weekday[3]="Wed";
  weekday[4]="Thu";
  weekday[5]="Fri";
  weekday[6]="Sat";
  weekday[0]="Sun";

  const n = weekday[dayOfTheWeek % 7];
  return n;
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

  convertToHours (word) {
    return word.slice(0, 2) + ":" + word.slice(2);
  }
  
}
