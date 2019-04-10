const axios = require('axios')

const cafedeskAPI = axios.create({
  baseURL: 'https://cafedesk-server.herokuapp.com'
})

module.exports = {
  // get user view history
  getViewedBusinessesByUserId(id) {
    return new Promise((res, rej) => {
      cafedeskAPI
        .get(`/users/${id}/views`)
        .then(response => {
          res(response.data)
        })
        .catch(error => {
          rej(error)
        })
    })
  },

  // get user favourites
  getFavouriteBusinessesByUserId(id) {
    return new Promise((res, rej) => {
      cafedeskAPI
        .get(`/users/${id}/favourites`)
        .then(response => {
          res(response.data)
        })
        .catch(error => {
          rej(error)
        })
    })
  },

  // get specific business
  getBusinessById(id) {
    return new Promise((res, rej) => {
      cafedeskAPI
        .get(`/businesses/${id}`)
        .then(response => {
          res(response.data)
        })
        .catch(error => {
          rej(error)
        })
    })
  },

  getBusinessByKeyword(keyword) {
    return new Promise((res, rej) => {
      cafedeskAPI
        .get(`/search/${keyword}`)
        .then(response => {
          res(response.data)
        })
        .catch(error => {
          rej(error)
        })
    })
  },

  // return recommendations
  getBusinesses(tags) {
    const round = (value, decimals) => {
      return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
    }
    
    const userCoords = JSON.parse(localStorage.getItem('userCoords'))

    return new Promise((res, rej) => {
      cafedeskAPI
        .get(`/recommendations`, {
          params: {
            latitude: round(userCoords.latitude, 6),
            longitude: round(userCoords.longitude, 6),
            tags: JSON.stringify(tags)
          }
        })
        .then(response => {
          console.log(response)
          res(response.data)
        })
        .catch(error => {
          console.log(error)
          rej(error)
        })
    })
  },

  getTags() {
    return new Promise((res, rej) => {
      cafedeskAPI
        .get('/tags')
        .then(response => res(response.data))
        .catch(error => rej(error))
    })
  }
}
