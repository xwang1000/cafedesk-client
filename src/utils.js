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

  days (dayOfTheWeek) {
    const weekday = new Array(7);
    weekday[0]="Mon";
    weekday[1]="Tue";
    weekday[2]="Wed";
    weekday[3]="Thu";
    weekday[4]="Fri";
    weekday[5]="Sat";
    weekday[6]="Sun";
  
    const n = weekday[dayOfTheWeek];
    return n;
  }
}
