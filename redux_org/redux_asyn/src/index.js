/**
 * Created by hesy on 2016/11/10.
 */

//import thunkMiddleware from 'redux-thunk'
//import createLogger from 'redux-logger'
import {createStore} from 'redux'
//import dispatch from 'react-redux'
import {addTodo} from './actions'
import rootReduer from './reducers'

//const loggerMiddleware = createLogger()
const store = createStore(rootReduer);





//store.dispatch(selectSubreddit('reactjs'))
//store.dispatch(fetchPosts('reactjs')).then(() =>
//console.log(store.getState())
//)



//console.log(store.getState());
function logger(store) {
  return function wrapDispatchToAddLogging(next){
    console.log(2)
    console.log(next);
    return function dispatchAndLog(action){
      console.log(3);
      console.log(action)
      console.log('prev state', store.getState());
      console.log('dispatch', action);
      let result = next(action);
      console.log('next state', store.getState());
      return result;
    }
  }
}

function crashReporter(store){
  let next = store.dispatch
  store.dispatch = function dispatchAndReportErrors(action) {
    try {
      console.log('try')
      return next(action)
    } catch (err) {
      console.error('捕获一个异常!', err)
      throw err
    }
  }
}

function applyMiddlewareByMonkeypatching(store, middlewares) {
  middlewares = middlewares.slice()
  middlewares.reverse()

  // 在每一个 middleware 中变换 dispatch 方法。
  middlewares.forEach(middleware =>
    store.dispatch = middleware(store)
  )
}

applyMiddlewareByMonkeypatching(store, [ logger, crashReporter ])


store.dispatch(addTodo(3,33))
