import React from 'react'
import {render} from 'react-dom'
import App from './components/App'
import reducer from './reducers'
import {createStore} from 'redux'
import {Provider} from 'react-redux'

const store = createStore(reducer)

store.subscribe(() => console.log('store:',store.getState()))

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
