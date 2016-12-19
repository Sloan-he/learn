/**
 * Created by hesy on 2016/11/3.
 */

import React,{Component,PropTypes} from 'react'

class Todo extends Component{
  propsEditTodo = () =>{
    const {id,editTodo,text} = this.props
    editTodo(id,text)
  }

  render() {
    const {completed,text,toggleClick,deleteClick,ll} = this.props
    console.log(ll)
    return (
      <li>
        <a style={{
          textDecoration:completed ? 'line-through' : 'none'
        }}>{text}</a>&nbsp;
        <span onClick={toggleClick}>{completed ? '点击进入待办' : '点击完成'}</span>&nbsp;
        <span onClick={deleteClick}>删除</span>&nbsp;
        {completed ? '' : <span onClick={this.propsEditTodo}>修改</span>}
      </li>
    )
  }
}

Todo.propTypes = {
  text:PropTypes.string.isRequired,
  completed:PropTypes.bool.isRequired,
  toggleClick:PropTypes.func.isRequired,
  deleteClick:PropTypes.func.isRequired,
  editTodo:PropTypes.func.isRequired
}

export default Todo
