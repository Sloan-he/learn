/**
 * Created by hesy on 2016/11/10.
 */

import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import {createStore,applyMiddleware} from 'redux'
import {selectSubreddit,fetchPosts} from './src/actions'
import rootReduer from './src/reducers'

const loggerMiddleware = createLogger()
const store = createStore(
  rootReduer,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  )
)

store.dispatch(selectSubreddit('reactjs'))
store.dispatch(fetchPosts('reactjs')).then(() =>
  console.log(store.getState())
)



