const axios = require('axios')

const cafedeskAPI = axios.create({
  baseURL: 'https://cafedesk-server.herokuapp.com'
})

module.exports = {
  // get user history
  getViewedBusinessesByUserId(id) {
    return new Promise((res, rej) => {
      cafedeskAPI
        .get(`/users/${id}/views`)
        .then((response) => {
          res(response);
        })
    })
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
  getBusinesses(tags = ['quiet', 'coffee']) {
    console.log(tags);

    return new Promise((res, rej) => {
      cafedeskAPI
        .get(`/recommendations`, {
          headers: tags,
        })
        .then(response => {
          console.log(response);

          res(response)
        })
        .catch(error => {
          rej(error)
        })
    })
  }
}
