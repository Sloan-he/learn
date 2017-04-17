/**
 * Created by hesy on 2016/11/25.
 */
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import React from 'react'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import {applyMiddleware,createStore} from 'redux'
import reducer from './reducers'
import App from './containers/App'


const middleware = [ thunk ]
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger())
}

const store = createStore(
  reducer,
  applyMiddleware(...middleware)
)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)



