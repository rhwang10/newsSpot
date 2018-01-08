<template>
  <md-card>
    <md-card-media>
      <img :src='multimedia[4].url'>
    </md-card-media>

    <md-card-header>
      <div class='md-title'>{{title}}</div>
      <div class='md-subhead'>{{abstract}}</div>
    </md-card-header>

    <md-card-expand>
      <md-card-actions md-alignment="space-between">
        <div>
          <md-button class='md-raised' :href='url' target='_blank' :md-ripple='false'>Link</md-button>
        </div>

        <md-card-expand-trigger>
          <md-button v-on:click.native='relatedRedditThreads()'>Reddit threads</md-button>
        </md-card-expand-trigger>
      </md-card-actions>

      <md-card-expand-content>
        <md-card-content>
          <li v-for='thread in threads'>
            <md-button class='md-raised' :href='redditBase + thread.data.permalink' target='_blank'>{{thread.data.subreddit}}</md-button>
          </li>
        </md-card-content>
      </md-card-expand-content>
    </md-card-expand>
  </md-card>
</template>

<script>
import Vue from 'vue'
import {MdCard, MdButton} from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
import api from './API.vue'

Vue.use(MdCard)
Vue.use(MdButton)

const levenshtein = require('js-levenshtein');

export default {
  data: function () {
    return {
      threads: [],
      redditBase: 'https://www.reddit.com',
      numResults: 0
    }
  },

  props: ['multimedia', 'title', 'abstract', 'url'],

  methods: {
    relatedRedditThreads () {
      api.methods.getRelatedRedditThreads(this.title).then( searchObject => {

        for (var i = 0; i < searchObject.data.data.children.length; i++) {
          if (this.LevenshteinDistance(this.title, searchObject.data.data.children[i].data.title) === true) {
            if (!(searchObject.data.data.children[i] in this.threads)) {
              this.threads.push(searchObject.data.data.children[i])
            }
          }
        }
        // this.threads = searchObject.data.data.children
        // this.numResults = searchObject.data.data.children.length
        // console.log(this.threads)
      })
    },

    LevenshteinDistance (title1, title2) {
      var distance = levenshtein(title1.toLowerCase(), title2.toLowerCase())
      if (distance < 25) {
        return true
      } else {
        // console.log(title1)
        // console.log(title2)
        // console.log(distance)
        return false
      }
    }
  }
}
</script>

<style>

.md-card {
  width: 300px;
  margin: 5px;
  display: inline-block;
  vertical-align: top;
}
</style>
