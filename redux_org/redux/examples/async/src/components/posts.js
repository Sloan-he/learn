/**
 * Created by hesy on 2016/12/1.
 */
import React,{PropTypes,Component} from 'react'

export default class Posts extends Component{
  render() {
    const {posts} = this.props
    return(
      <ul>
        {posts.map((item,i) => <li key={i}>{item.title}</li>)}
      </ul>
    )
  }
}

Posts.propTypes = {
  posts:PropTypes.array.isRequired
}
