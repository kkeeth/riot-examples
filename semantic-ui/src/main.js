import '@riotjs/hot-reload'
import {component} from 'riot'
import 'semantic-ui-riot'
import App from './app.riot'

component(App)(document.getElementById('app'), {
  message: 'Semantic UI Riot Demo'
})
