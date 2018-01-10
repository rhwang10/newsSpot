<template>
  <div id="app">
    <h1>newsSpot</h1>
    <button v-on:click='NationalTopArticles()'>Get Top National NY Times articles</button>
    <ul id="cards" v-if="NatTopData">
      <li id="card" v-for="article in NatTopData.data.results">
        <cards v-bind="article"></cards>
      </li>
    </ul>
  </div>
</template>

<script>
import Cards from './components/Card.vue'
import api from './components/API.vue'

export default {
  name: 'app',
  data () {
    return {
      NatTopData: null
    }
  },

  components: {
    Cards
  },

  methods: {
    NationalTopArticles () {
      api.methods.getNationalTopArticles().then(response => {
        this.NatTopData = response
        console.log(this.NatTopData.data.results)
      })
      // console.log(this.NatTopData)
      // api.methods.getNationalTopArticles(information => {
      //   this.NatTopData = information
      //   console.log(this.NatTopData)
      // })
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
