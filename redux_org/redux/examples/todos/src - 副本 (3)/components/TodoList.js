/**
 * Created by hesy on 2016/11/3.
 */

import React,{Component,PropTypes} from 'react'
import {connect} from 'react-redux'
import Todo from './Todo'
import {toggleTodo,deleteTodo} from '../actions'

class TodoList extends Component{
  constructor(props) {
    super(props);
    this.state = {todoState: this.props.todos};
  }
  componentWillReceiveProps(nextProps){
    console.log('dd')
    this.setState({
      todoState:nextProps.todos
    })
  }
  render() {
    const {todos,dispatch,editTodo} = this.props;
    console.log(this.state.todoState)
    return (
      <div>
        <ul>
          {this.state.todoState.map((todo,key) =>{
            return <Todo key={key} ll={key} {...todo} toggleClick={() => dispatch(toggleTodo(todo.id))} deleteClick={() => dispatch(deleteTodo(todo.id))} editTodo={editTodo} />
          })}
        </ul>
      </div>
    )
  }
}

TodoList.propsTypes ={
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  editTodo:PropTypes.func.isRequired
}

let getVisibleTodo = (todos,filter) =>{
  switch(filter) {
    case 'Active':
      return todos.filter((t) => !t.completed)
    case 'Completed':
      return todos.filter((t) => t.completed)
    default:
    return todos
  }
}

const mapStateToProps = (state,ownProps) => ({
  todos:getVisibleTodo(state.todos,ownProps.filter)
})

TodoList = connect(mapStateToProps)(TodoList);

export default TodoList
