import '@riotjs/hot-reload'
import { component, install } from 'riot'
import App from './app.riot'

import Store from './store'

install(component => {
  component.store = Store.store

  return component
})

component(App)(document.getElementById('app'), {
  title: 'Riot.js with Redux'
})
