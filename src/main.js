import Vue from 'vue'
import Home from './Home.vue'
import App from './App.vue'
import routes from './routes'
new Vue({
  el: '#app',
  render: h => h(App)
})


// new Vue({
//   el: '#app',
//
//   data: {
//     currentRoute: window.location.pathname
//   },
//
//   computed: {
//     ViewComponent () {
//       return routes[this.currentRoute] || RouteNotFound
//     }
//   },
//   render: h => h(this.ViewComponent)
// })

// const app = new Vue({
//   el: '#app',
//
//   data: {
//     curRoute: window.location.pathname
//   },
//
//   computed: {
//     ViewComponent () {
//       const matchView = routes[this.curRoute]
//       return matchView
//     }
//   },
//
//   render: h => h(this.ViewComponent)
// })
//
// window.addEventListener('popstate', () => {
//   app.curRoute = window.location.pathname
// })
