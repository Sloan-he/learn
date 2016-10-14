/**
 * Created by hesy on 2016/10/10.
 */

import {createStore} from 'redux'

//
//const store = createStore(reducer);
//
//const reducer = (state = 0,action) =>{
//  switch(action.type){
//    case 'ADD_TODO':
//      return state + action.payload
//    default:return state
//  }
//}
//
//
//
//const ADD_TODO = 'ADD_TODO'
//
//function addTodo(text){
//  return {
//    type: ADD_TODO,
//    text
//  }
//}
//
//store.dispatch(addTodo('Learn Redux'))

const createStore = (reducer) =>{
  let state;
  let listeners = [];

  //获取新的state方法
  const getState = () => state;

  const dispatch = (action) =>{
    state = reducer(state,action);
    listeners.forEach(listener => listener());
  };
  const subscribe = (listeners) =>{
    listeners.push(listener);
    return() => {
      listeners = listeners.filter(l => l !== listener);
    }
  };

  dispatch({});

  return {getState,dispatch,subscribe};
}
