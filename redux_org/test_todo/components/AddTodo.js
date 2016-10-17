/**
 * Created by hesy on 2016/10/17.
 */

import React,{Component,PropsTypes} from 'react'
export default class AddTodo extends Component{
  render(){
    return (
      <div>
        <input type="text" ref="input"/>
        <button onClick={(e) => this.handleClick(e)}>ADD</button>
      </div>
    )
  }
  //拿到输入后的内容
  //发送action
  handleClick(e){
    const node = this.refs.input
    const text = node.value.trim()
    this.props.onAddClick(text)
    node.value = ''
  }
}

AddTodo.propTypes = {
  onADDClick:PropsTypes.func.isRequired
}