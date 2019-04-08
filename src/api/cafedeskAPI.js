const axios = require('axios')

const cafedeskAPI = axios.create({
  baseURL: 'http://localhost:8080/'
})

module.exports = {
  // get user view history
  getViewedBusinessesByUserId(id) {
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

  // return recommendations
  getBusinesses() {
    return new Promise((res, rej) => {
      cafedeskAPI
        .get(`/recommendations`)
        .then(response => {
          res(response.data)
        })
        .catch(error => {
          rej(error)
        })
    })
  }
}
