/**
 * Created by hesy on 2016/11/10.
 */

//import thunkMiddleware from 'redux-thunk'
//import createLogger from 'redux-logger'
import {createStore} from 'redux'
import dispatch from 'react-redux'
import {addTodo} from './actions'
import rootReduer from './reducers'

//const loggerMiddleware = createLogger()
const store = createStore(rootReduer);





//store.dispatch(selectSubreddit('reactjs'))
//store.dispatch(fetchPosts('reactjs')).then(() =>
  //console.log(store.getState())
//)



//console.log(store.getState());
function logger(store){
  let next = store.dispatch
  return function dispatchAndLog(action){
    console.log('prev state',store.getState());
    console.log('dispatch',action);
    let result = next(action);
    console.log('next state',store.getState());
  }
}

function crashReporter(store){
  let next = store.dispatch
  return function dispatchAndReportErrors(action) {
    try{
      console.log('try action');
      return next(action)
    }catch(err){
      console.error('异常:',err);
    }
  }
}

function applyMiddlewareByMonkeypatching(store,middlewares){
  middlewares = middlewares.slice()
  middlewares.reverse()
  middlewares.forEach(middleware =>
    store.dispatch = middleware(store)
  )
}
applyMiddlewareByMonkeypatching(store,[logger,crashReporter])