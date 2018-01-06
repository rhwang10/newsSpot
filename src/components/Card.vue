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

export default {
  data: function () {
    return {
      threads: null,
      redditBase: 'https://www.reddit.com'
    }
  },

  props: ['multimedia', 'title', 'abstract', 'url'],

  methods: {
    relatedRedditThreads () {
      api.methods.getRelatedRedditThreads(this.title, searchObject => {
        this.threads = searchObject.data.data.children
        console.log(this.threads)
      })
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
