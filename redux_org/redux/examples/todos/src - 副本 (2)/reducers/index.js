/**
 * Created by hesy on 2016/11/3.
 */

import {combineReducers} from 'redux'
import todos from './todos'
import visibleTodoList from './visibleTodoList'

const todoApp = combineReducers({
  todos,
  visibleTodoList
})

export default todoApp
