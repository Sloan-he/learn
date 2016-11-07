
import React,{Component,PropTypes} from 'react'
import {toggleTodo} from '../actions/index'
import {connect} from 'react-redux'

class Dialog extends Component{
  constructor(props){
    super(props)
    this.state = {editId:props.editId}
  }
	render(){
		const {dispatch} = this.props
		return (
			<div>
				<form onSubmit={(e) =>{
					e.preventDefault();
					console.log(this.state.editId);
					if(true && this.state.editId !== null){
						dispatch(toggleTodo(this.props.editId,'000000000'))
					}
					//this.setState({editId:null})
				}}>
					<input type="text" ref="input" />
          {this.props.editId}
					<button type="submit">提交</button>
				</form>
			</div>
		)
	}
}

Dialog.propsTypes = {
  editId:PropTypes.isRequired,
  editText:PropTypes.string.isRequired
}



Dialog = connect()(Dialog)


export default Dialog

