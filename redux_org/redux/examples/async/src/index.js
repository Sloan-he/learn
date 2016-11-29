/**
 * Created by hesy on 2016/11/25.
 */
import {render} from 'react-dom'
import React from 'react'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import {applyMiddleware,createStore} from 'redux'
import reducer from './reducers'
import {fetchPostsIfNeed} from './actions'


const middleware = [ thunk ]
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger())
}

const store = createStore(
  reducer,
  applyMiddleware(...middleware)
)

//store.subscribe(() => console.log('store:',store.getState()))



store.dispatch(fetchPostsIfNeed('reactjs'))
