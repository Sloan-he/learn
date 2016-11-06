
import React,{Component} from 'react'
import {addTodo} from '../actions/index'
import {connect} from 'react-redux'

class Dialog extends Component{
	render(){
		const {dispatch} = this.props
		return (
			<div>
				<p></p>
				<from onSubmit={(e) =>{
					e.preventDefault();
					if(this.refs.input.trim()){
						dispatch(addTodo(this.refs.input.value))
					}
				}}>
					<input type="text" ref="input" />
					<button>提交</button>
				</from>
			</div>	
		)
	}
}

Dialog = connect()(Dialog)


export default Dialog

