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
          <md-button>Reddit threads</md-button>
        </md-card-expand-trigger>
      </md-card-actions>

      <md-card-expand-content>
        <md-card-content>
        </md-card-content>
      </md-card-expand-content>
    </md-card-expand>
  </md-card>
</template>

<script>
import Vue from 'vue'
import {MdCard, MdButton} from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'

Vue.use(MdCard)
Vue.use(MdButton)

export default {
  data: function () {
    return {
    }
  },

  props: ['multimedia', 'title', 'abstract', 'url']
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
