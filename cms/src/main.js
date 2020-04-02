import '@riotjs/hot-reload'
import {component} from 'riot'
import App from './app.riot'
import 'semantic-ui-riot'
import '../assets/js/libs'

component(App)(document.getElementById('app'), {
  title: 'Hello Riot.js!'
})
