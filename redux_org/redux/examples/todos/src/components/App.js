/**
 * Created by hesy on 2016/11/3.
 */

import React,{Component} from 'react'
import AddTodo from './AddTodo'
import TodoList from './TodoList'
import Foot from './Foot'
import Dialog from './Dialog'


class App extends Component{

  handleVaule(){
  	console.log('editId:',arguments[0]);
  }
  render(){
    return (
      <div>
        <AddTodo />
        <TodoList editVaule={this.handleVaule} />
        <Foot />
       	<Dialog />	
      </div>
    )
  }
}

export default App
