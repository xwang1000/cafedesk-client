const axios = require('axios')

const cafedeskAPI = axios.create({
  baseURL: 'https://cafedesk-server.herokuapp.com'
})

module.exports = {
  getBusinesses (keyword) {
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