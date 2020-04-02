import { install } from 'riot'
import observable from '@riotjs/observable'
import {
  createStore,
  createQuery,
  enableAkitaProdMode
} from '@datorama/akita'

if (process.env.ENV === "production") {
  enableAkitaProdMode();
}

const store = createStore({
  isLoggedIn: false
}, { name: 'session' })

const query = createQuery(store)

install(componentAPI => {
  const component = observable(componentAPI)

  component.store = store
  component.query = query

  return component
})

