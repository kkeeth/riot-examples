import '@riotjs/hot-reload'
import {component} from 'riot'
import App from './app.riot'
// import App from './list.riot'
// import App from './list-sample.riot'

component(App)(document.getElementById('app'), {
  title: 'Riot.js with Anime.js!'
})
