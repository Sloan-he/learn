/**
 * Created by hesy on 2016/11/3.
 */

import React,{Component,PropTypes} from 'react'

class Todo extends Component{

  render() {
    const {completed,text,toggleClick,deleteClick} = this.props
    return (
      <li>
        <a style={{
          textDecoration:completed ? 'line-through' : 'none'
        }}>{text}</a>&nbsp;
        <span onClick={toggleClick}>修改</span>&nbsp;
        <span onClick={deleteClick}>删除</span>
      </li>
    )
  }
}

Todo.propTypes = {
  text:PropTypes.string.isRequired,
  completed:PropTypes.bool.isRequired,
  toggleClick:PropTypes.func.isRequired,
  deleteClick:PropTypes.func.isRequired
}

export default Todo
