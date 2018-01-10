<template>
  <div id="app">
    <h1>newsSpot</h1>
    <h2>Connect top news articles with corresponding Reddit threads!</h2>

    <select v-model='section'>
      <option disabled value=''>Select a section</option>
      <option v-for='section in sections' v-bind:value='section'>{{section}}</option>
    </select>

    <button v-on:click='NationalTopArticles(section)'>Get Top National NY Times articles</button>
    <ul id="cards" v-if="NatTopData">
      <li id="card" v-for="article in NatTopData.data.results">
        <NYTimesCard v-bind="article"></NYTimesCard>
      </li>
    </ul>
  </div>
</template>

<script>
import NYTimesCard from './components/NYTimesCard.vue'
import api from './components/API.vue'

export default {
  name: 'app',
  data () {
    return {
      NatTopData: null,
      sections: ['home', 'opinion', 'world', 'national', 'politics', 'upshot',
      'nyregion', 'business', 'technology', 'science', 'health', 'sports', 'arts',
      'books', 'movies', 'theater', 'sundayreview', 'fashion', 'tmagazine', 'food',
      'travel', 'magazine', 'realestate', 'automobiles', 'obituaries', 'insider'],
      section: ''
    }
  },

  components: {
    NYTimesCard
  },

  methods: {
    NationalTopArticles (section) {
      api.methods.getNationalTopArticles(section).then(response => {
        this.NatTopData = response
      })
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
