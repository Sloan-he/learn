/**
 * Created by hesy on 2016/11/10.
 */

//import thunkMiddleware from 'redux-thunk'
//import createLogger from 'redux-logger'
import {createStore,applyMiddleware} from 'redux'
//import dispatch from 'react-redux'
import {addTodo} from './actions'
import rootReduer from './reducers'

//const loggerMiddleware = createLogger()
//store.dispatch(selectSubreddit('reactjs'))
//store.dispatch(fetchPosts('reactjs')).then(() =>
//console.log(store.getState())
//)


//console.log(store.getState());
const logger = store => next => action => {
  console.log('now time:',new Date())
  console.group(action.type)
  console.info('prev state',store.getState())
  console.info('dispatching',action)
  let result = next(action)
  console.log('next state', store.getState())
  console.groupEnd(action.type)
  return result
}





const crashReporter = store => next => action => {
  try {
    console.info('try action')
    return next(action)
  } catch (err) {
    console.error('捕获一个异常!', err)
    throw err
  }
}

const timeoutScheduler = store => next => action =>{
  console.log('now time:',new Date())
  if(!action.meta || !action.meta.delay){
    return next(action)
  }

  let timeoutId = setTimeout(() => next(action),action.meta.delay)

  return function cancel(){
    clearTimeout(timeoutId)
  }
}

const refScheduler = store => next =>{
  let queuedActions = []
  let frame = null

  function loop(){
    console.log('loop fuc')
    frame = null
    try{
      if(queuedActions.length){
        console.log('loop try true')
        next(queuedActions.shift())
      }
    }finally {
      console.log('finallu fuc')
      maybeRaf()
    }
  }

  function maybeRaf(){
    console.info('length',queuedActions.length)
    if(queuedActions.length && !frame){
      console.info('requestAnimationFrame')
      frame = requestAnimationFrame(loop)
    }
  }

  return action =>{
    console.log('refScheduler midd')
    if(!action.meta || !action.meta.raf){
      return next(action)
    }

    queuedActions.push(action)
    maybeRaf()

    return function cancel(){
      console.log('canel fuc')
      queuedActions = queuedActions.filter(a => a !== action)
    }
  }
}

const vanillaPromise = store => next => action =>{
  if(typeof action.then !== 'function'){
    return next(action)
  }
  return Promise.resolve(action).then(store.dispatch)
}





let createStoreWithMiddleware = applyMiddleware(
  refScheduler,
  timeoutScheduler,
  logger,
  crashReporter
)(createStore)
const store = createStoreWithMiddleware(rootReduer);



//function applyMiddleware(store, middlewares) {
//  middlewares = middlewares.slice()
//  middlewares.reverse()
//
//  // 在每一个 middleware 中变换 dispatch 方法。
//  let dispatch = store.dispatch
//  middlewares.forEach(middleware =>
//    dispatch = middleware(store)(dispatch)
//  )
//  return Object.assign({}, store,{dispatch})
//}

//applyMiddleware(store, [logger, crashReporter ])


store.dispatch(addTodo(33333,3))
