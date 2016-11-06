/**
 * Created by hesy on 2016/11/3.
 */

import React,{Component,PropTypes} from 'react'

class Todo extends Component{
  componentDidMount(){
    const {todoEdit} = this.props;
    console.log(this.refs.editEl.id)
    this.refs.editEl.addeventlistener('click',function(){
      alert(1);
    });
  }
  render() {
    const {completed,text,toggleClick,deleteClick} = this.props
    return (
      <li>
        <a style={{
          textDecoration:completed ? 'line-through' : 'none'
        }}>{text}</a>&nbsp;
        <span onClick={toggleClick}>{completed ? '点击进入待办' : '点击完成'}</span>&nbsp;
        <span onClick={deleteClick}>删除</span>&nbsp;
        <span ref="editEl" id='vl'>修改</span>
      </li>
    )
  }
}

Todo.propTypes = {
  text:PropTypes.string.isRequired,
  completed:PropTypes.bool.isRequired,
  toggleClick:PropTypes.func.isRequired,
  deleteClick:PropTypes.func.isRequired,
  todoEdit:PropTypes.func.isRequired
}

export default Todo
