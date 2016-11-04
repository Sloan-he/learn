/**
 * Created by hesy on 2016/11/3.
 */

import React,{Component,PropTypes} from 'react'

class Todo extends Component{

  render() {
    const {completed,text,toggleClick} = this.props
    return (
      <li>
        <span style={{
          textDecoration:completed ? 'line-through' : 'none'
        }}>{text}</span>&nbsp;
        <span onClick={toggleClick}>修改状态</span>&nbsp;
      </li>
    )
  }
}

Todo.propTypes = {
  text:PropTypes.string.isRequired,
  completed:PropTypes.bool.isRequired,
  toggleClick:PropTypes.func.isRequired,
  deleteTodo:PropTypes.func
}

export default Todo
