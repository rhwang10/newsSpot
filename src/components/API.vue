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
    async getNationalTopArticles (section) {
      let response = await axios.get(config.nyTimesTopStories + section + '.json?api-key=' + config.nytimesTopStoriesAPIKey)
      return response
    },

    async getRelatedRedditThreads (query) {
      let response = await axios.get(config.redditSearchURL + query + '&limit=5')
      return response
    }
  }
}
</script>
