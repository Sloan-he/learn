/**
 * Created by hesy on 2016/10/11.
 */

import {createStore,combineReducers} from 'redux'

var userReducer = function(state = {},action){
  console.log('userReducer state',state,'action',action);
  switch (action.type) {
    // etc.
    default:
      return state;
  }
}

var itemsReducer = function (state = [], action) {
  console.log('itemsReducer was called with state', state, 'and action', action)

  switch (action.type) {
    // etc.
    default:
      return state;
  }
}

var reducer = combineReducers({
  user:userReducer,
  items:itemsReducer
})

var store_0 = createStore(reducer)
console.log('store_0:',store_0.getState())