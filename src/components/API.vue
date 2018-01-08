<template>
</template>

<script>
import axios from 'axios'
import config from '../../config/config.js'

export default {

  data: function () {
    return {
    }
  },

  methods: {
    getNationalTopArticles (callback) {
      axios.get(config.nytimesTopNationalJsonURL + config.nytimesTopStoriesAPIKey)
      .then(response => {
        callback(response)
      })
      .catch(e => {
        console.log('Error in getNationalTopArticles in API.vue')
      })
    },

    async getRelatedRedditThreads (query, callback) {
      let response = await axios.get(config.redditSearchURL + query + '&limit=5')
      return response
      // .then(response => {
        // callback(response)
      // })
      // .catch(e => {
      //   console.log('Error in getRelatedRedditThreads in API.vue')
      // })
    }
  }
}
</script>
