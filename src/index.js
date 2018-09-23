import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import bootstrap from './hooks/bootstrap'
import Container from './container'

import './index.css'

const rootEl = document.getElementById('index')
const store = configureStore()
bootstrap(store)()

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <Container />
    </Provider>,
    rootEl
  )
}

render()
