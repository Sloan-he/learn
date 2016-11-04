import React,{Component,PropTypes} from 'react'
import { connect } from 'react-redux'
import {visibleTodoList} from '../actions'

class LinkComponent extends Component{
	render(){
		const {filter,content,active,setVisibleFilter} = this.props
		if(filter === active){
			return (
				<span>&nbsp;<span>{content}</span>&nbsp;</span>
			)
		}
		return (
			<span>&nbsp;<a href="#" onClick={setVisibleFilter}>{content}</a>&nbsp;</span>
		)
	}
}

LinkComponent.propTypes = {
	filter:PropTypes.string.isRequired,
	content:PropTypes.string.isRequired,
	active:PropTypes.string.isRequired,
	setVisibleFilter:PropTypes.func.isRequired
}

const mapStateToProps = (state) =>({
	active:state.visibleTodoList
})

const mapDispatchToProps = (dispatch,ownProps) =>({
	setVisibleFilter:(() => dispatch(visibleTodoList(ownProps.filter)))
})


const Link = connect(
  mapStateToProps,
  mapDispatchToProps
)(LinkComponent)


export default Link