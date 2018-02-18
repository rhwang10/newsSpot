import Vue from 'vue'
import Home from './Home.vue'
import NYTimesApp from './NYTimes.vue'

// new Vue({
//   el: '#app',
//   render: h => h(App)
// })

const routes = {
  '/': Home,
  '/nytimes': NYTimesApp
}

new Vue({
  el: '#app',
  data: {
    route: window.location.pathname
  },

  computed: {
    ViewComponent() {
      return routes[this.route] || NotFound
    }
  },
  render (h) {return h(this.ViewComponent)}
})
