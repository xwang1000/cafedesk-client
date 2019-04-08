const axios = require('axios')

const cafedeskAPI = axios.create({
  baseURL: 'https://cafedesk-server.herokuapp.com'
})

module.exports = {
  // get user history
  getViewedBusinessesByUserId(id) {
    return new Promise((res, rej) => {})
  },

  // get user favourites
  getFavouriteBusinessesByUserId(id) {
    return new Promise((res, rej) => {})
  },

  // get business details
  getBusinessById(id) {
    return new Promise((res, rej) => {})
  },

  // get recommendations
  getBusinesses(keyword) {
    return new Promise((res, rej) => {
      cafedeskAPI
        .get(`/search/${keyword}`)
        .then(response => {
          res(response.data.businesses)
        })
        .catch(error => {
          rej(error)
        })
    })
  }
}
