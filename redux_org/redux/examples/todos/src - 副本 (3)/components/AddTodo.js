/**
 * Created by hesy on 2016/11/3.
 */

import React,{Component} from 'react'
import {addTodo} from '../actions/index'
import {connect} from 'react-redux'

class AddTodo extends Component{
  render(){
    const {dispatch}  = this.props
    return (
      <div className="">
        <form onSubmit={e =>{
          e.preventDefault();
          if(this.refs.input.value.trim()){
            dispatch(addTodo(this.refs.input.value))
          }
          this.refs.input.value = ''
        }}>
          <input type="text" ref="input"/>
          <button type="submit">提交</button>
        </form>
      </div>
    )
  }
}

AddTodo = connect()(AddTodo)
export default AddTodo
