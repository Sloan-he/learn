/**
 * Created by hesy on 2016/10/11.
 */
import {createStore} from 'redux'
//reducer收到undefined的state时,给他一个默认状态
var reducer_1 = function(state,action){
  console.log('state:',state,'action:',action);
  if(typeof state === 'undefined'){
    return {}
  }
  return state;
}

var store_1 = createStore(reducer_1)
console.log('store_1 state:',store_1.getState())


//ES6
var reducer_2 = function (state = {},action){
  console.log('reducer_2 state:',state,'action:',action)
  return state;
}

var store_2 = createStore(reducer_2)
console.log('store_2 state:',store_2.getState());