/**
 * Created by hesy on 2016/10/10.
 */
import {createStore} from 'redux'

var store0 = createStore(() =>{})

var reducer = function(...args){
  console.log('Reducer was called with args',args)
}

var store1 = createStore(reducer)

console.log();