/**
 * Created by hesy on 2016/10/12.
 */

import {createStore,combineReducers} from 'redux'

var reducer = combineReducers({
  speaker:function(state = {},action){
    console.log('speaker state:',state,'action:',action)
    switch (action.type){

    }
  }
})