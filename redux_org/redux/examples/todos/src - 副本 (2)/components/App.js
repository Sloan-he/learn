/**
 * Created by hesy on 2016/11/3.
 */

import React,{Component} from 'react'
import AddTodo from './AddTodo'
import TodoList from './TodoList'
import Foot from './Foot'


class App extends Component{
  render(){
    return (
      <div>
        <AddTodo />
        <TodoList />
        <Foot />
      </div>
    )
  }
}

export default App
