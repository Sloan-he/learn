/**
 * Created by hesy on 2016/10/11.
 */

import {createStore,combineReducers} from 'redux'

var userReducer = function (state ={},action){

  console.log('userReducer state:',state,'action:',action);
  switch (action.type){
    case 'SET_NAME':
      return {
        ...state,
        name:action.name
      }
    default:return state;
  }

}

var itemsReducer = function (state =[],action){

  console.log('itemsReducer state:',state,'action:',action);
  switch (action.type){
    case 'ADD_ITEM':
      return [
        ...state,
        action.item
      ]
    default:return state;
  }

}

var reducer = combineReducers({
  user:userReducer,
  items:itemsReducer
})

var store_0 = createStore(reducer)

//console.log('store_0:',store_0.getState())

//dispatch action
store_0.dispatch({
  type:'AN_ACTION'
})

//console.log('store_0 after AN_ACTION state:',store_0.getState());


//action creator
var setNameActionCreator = function (name){
  return {
    type:'SET_NAME',
    name:name
  }
}

store_0.dispatch(setNameActionCreator('bob'))

console.log('store_0 after SET_NAME state:',store_0.getState())