# newsSpot

Welcome to newsSpot! This is an application developed in Vue.js, that I created to automagically link news articles from various sources to corresponding Reddit threads. This project is still in development. I will continue to add more functionality. See the notes below on how to setup the development environment. Those instructions will give you a copy of the project, and you can add features and continue to develop the web application. I started out with npm, but have since migrated over to yarn.

# Getting Started

``` bash
# install dependencies
yarn install

# serve with hot reload at localhost:8080
yarn run dev

# build for production with minification
yarn run build
```

Make sure to to configure the configuration file correctly. This is mainly plugging in your API keys for each of the APIs. You will see a list of the APIs used below, so you know which keys to get. Make the appropriate changes to:
```bash
config/config.js
```
Using the template found in
```bash
config/config.js.dist
```

APIs used in this project:
* [NYTimes Top Stories](https://developer.nytimes.com/top_stories_v2.json)
* [Reddit Search](https://www.reddit.com/dev/api/)

# Built with

* [Axios](https://github.com/axios/axios)
* [Vue Material](https://vuematerial.io/getting-started)

```bash
yarn add axios

yarn add vue-material@beta --save

```

# License

This project is licensed under the MIT License.
