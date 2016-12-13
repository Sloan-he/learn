import React,{Component,PropTypes} from 'react'
import { Link } from 'react-router'

class FootLink extends Component{
	render(){
		const {filter,content} = this.props
		if(filter === content){
			return (
				<Link activeStyle={{color:'red',textDecoration:'none'}}>{content}</Link>
			)
		}
		return (
			<Link to={content}>{content}</Link>
		)
	}
}

FootLink.propTypes = {
	filter:PropTypes.string.isRequired,
	content:PropTypes.string.isRequired
}


export default FootLink