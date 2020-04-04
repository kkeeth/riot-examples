import { install } from 'riot'
import observable from '@riotjs/observable'
import { router } from '@riotjs/route'
import {
  createStore,
  createQuery,
  enableAkitaProdMode
} from '@datorama/akita'
import service from './service.js'

if (process.env.ENV === "production") {
  enableAkitaProdMode();
}

const store = createStore({
  isLoggedIn: false
}, { name: 'session' })
const query = createQuery(store)
const serviceInstance = service(store)

install(componentAPI => {
  const component = observable(componentAPI)

  component.store = store
  component.query = query
  component.service = serviceInstance
  component.router = router
  return component
})

