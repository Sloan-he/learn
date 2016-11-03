/**
 * Created by hesy on 2016/11/3.
 */

import {combineReducers} from 'redux'
import todos from './todos'

const todoApp = combineReducers({
  todos
})

export default todoApp
