import '@riotjs/hot-reload'
import { component } from 'riot'
import App from './src/app.riot' // with animatejs
// import App from './src/list.riot'  // with animore
// import App from './src/list-sample.riot'

component(App)(document.getElementById('root'), {
  title: 'Riot.js with Anime.js!'
})
