const axios = require('axios')

const cafedeskAPI = axios.create({
  baseURL: 'https://cafedesk-server.herokuapp.com'
})

const businesses = [
  {
    id: "zLQ9EQ8qAhEfXDc-2AieVQ",
    alias: "catfe-vancouver-2",
    name: "Catfe",
    image_url: "https://s3-media2.fl.yelpcdn.com/bphoto/fBoz2g-b-DyuiSty_NCQkg/o.jpg",
    tags: ['quiet', 'free wifi', 'jazzy', 'folk music', 'white noice', 'relaxing', 'folk music', 'white noice', 'relaxing'],
    closing_time: 7,
    distance: 1212.2,
    coordinates: {
      latitude: 49.2799726074677,
      longitude: -123.107153154144
    },
    is_closed: true
  },
  {
    id: "NUmZ89MwOx4nrtW7w5TruQ",
    alias: "van-pet-yaletown-vancouver",
    name: "Van Pet Yaletown",
    image_url: "https://s3-media1.fl.yelpcdn.com/bphoto/xIdKo18QtipPdDPLbjQVsA/o.jpg",
    tags: ['laptop-friendly', 'authentic tea', 'hiphop music', 'folk music', 'white noice', 'relaxing', 'folk music', 'white noice', 'relaxing'],
    closing_time: 9,
    distance: 300.120,
    coordinates: {
      latitude: 49.1699726074677,
      longitude: -123.071153154144
    },
    is_closed: false
  },
  {
    id: "dX6y4zA-1AtWsYnT4AZXNg",
    alias: "revolver-vancouver",
    name: "Revolver",
    image_url: "https://s3-media4.fl.yelpcdn.com/bphoto/CAExZOlAizC-yyLZrZt4xQ/o.jpg",
    tags: ['folk music', 'white noice', 'relaxing'],
    closing_time: 10,
    distance: 1.6,
    coordinates: {
      latitude: 49.1799726074677,
      longitude: -123.007153154144
    }
  },
  {
    id: "zLQ9EQ8qAhEfXDc-f2AieVQ",
    alias: "catfe-vancouver-2",
    name: "Catfe",
    image_url: "https://s3-media2.fl.yelpcdn.com/bphoto/fBoz2g-b-DyuiSty_NCQkg/o.jpg",
    tags: ['quiet', 'free wifi', 'jazzy'],
    closing_time: 7,
    distance: 1.2
  },
  {
    id: "NUmZ89MwOx4nrtW7w5TfruQ",
    alias: "van-pet-yaletown-vancouver",
    name: "Van Pet Yaletown",
    image_url: "https://s3-media1.fl.yelpcdn.com/bphoto/xIdKo18QtipPdDPLbjQVsA/o.jpg",
    tags: ['laptop-friendly', 'authentic tea', 'hiphop music'],
    closing_time: 9,
    distance: 3
  },
  {
    id: "dX6y4zA-1AtWsYnT4fAZXNg",
    alias: "revolver-vancouver",
    name: "Revolver",
    image_url: "https://s3-media4.fl.yelpcdn.com/bphoto/CAExZOlAizC-yyLZrZt4xQ/o.jpg",
    tags: ['folk music', 'white noice', 'relaxing'],
    closing_time: 10,
    distance: 1.6
  }
]

const getBusinessByIdHelper = id => {
  let result = {}
  businesses.forEach(business => {
    if(business.id === id) {
      result = business
    }
  })
  return result
}

module.exports = {
  getViewedBusinessesByUserId (id) {
    return new Promise((res, rej) => {
      setTimeout(() => {
        res(businesses)
      }, 1000)
    })
  },

  getFavouriteBusinessesByUserId (id) {
    return new Promise((res, rej) => {
      setTimeout(() => {
        res(businesses)
      }, 1000)
    })
  },

  getBusinessById (id) {

    return new Promise((res, rej) => {
      setTimeout(() => {
        res(getBusinessByIdHelper(id))
      }, 1000)
    })
  },

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