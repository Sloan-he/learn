/**
 * Created by hesy on 2016/11/3.
 */

import React,{Component,PropTypes} from 'react'
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
    const {params} = this.props
    return (
      <div>
        <AddTodo />
        <TodoList editTodo={this.editTodo.bind(this)} filter={params.filter || 'All'} />
        <Foot filter={params.filter || 'All'}/>
       	<Dialog editId={this.state.editId} editText={this.state.editText} />
      </div>
    )
  }
}


App.PropsTypes = {
  params:PropTypes.isRequired
}

export default App
