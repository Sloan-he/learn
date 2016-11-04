/**
 * Created by hesy on 2016/11/3.
 */

import React,{Component,PropTypes} from 'react'
import {connect} from 'react-redux'
import Todo from './Todo'
import {toggleTodo,deleteTodo} from '../actions'

class TodoList extends Component{
  render() {
    const {todos,dispatch} = this.props;
    return (
      <div>
        <ul>
          {todos.map((todo,key) =>{
            console.log('遍历todos',key,todo);
            return <Todo key={key} {...todo} toggleClick={() => dispatch(toggleTodo(todo.id))} />
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
  }).isRequired).isRequired
}

const mapStateToProps = (state) => ({
  todos:state.todos
})

TodoList = connect(mapStateToProps)(TodoList);

export default TodoList
