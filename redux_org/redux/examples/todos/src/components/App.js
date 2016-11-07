/**
 * Created by hesy on 2016/11/3.
 */

import React,{Component} from 'react'
import AddTodo from './AddTodo'
import TodoList from './TodoList'
import Foot from './Foot'
import Dialog from './Dialog'


class App extends Component{
  constructor(props){
    super(props)
    this.state = {editId:null,editText:''}
  }
  editTodo = function(id,text){
  	this.setState({editId:id,editText:text})
  }
  render(){
    return (
      <div>
        <AddTodo />
        <TodoList editTodo={this.editTodo.bind(this)} />
        <Foot />
       	<Dialog editId={this.state.editId} editText={this.state.editText} />
      </div>
    )
  }
}

export default App
