
import React,{Component,PropTypes} from 'react'
import {toggleTodo} from '../actions/index'
import {connect} from 'react-redux'

class Dialog extends Component{
   constructor(props){
   		super(props)
     	this.state = {editText:props.editText,editId:props.editId}
     	this.changeValue = this.changeValue.bind(this)
    }
    componentWillReceiveProps(nextProps){
    	this.setState({
    		editText:nextProps.editText,
    		editId:nextProps.editId
    	});
    }
    changeValue = () =>{
    	this.setState({editText:this.refs.input.value});
    }
	render(){
		const {dispatch} = this.props
		return (
			<div>
				<form onSubmit={(e) =>{
					e.preventDefault();
					if(this.state.editText.trim() && this.state.editId !== null){
						dispatch(toggleTodo(this.props.editId,this.state.editText))
					}
					this.setState({
						editId:null,
						editText:''
					})
				}}>
					<input type="text" ref="input" value={this.state.editText} onChange={this.changeValue} />
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

