/**
 * Created by hesy on 2016/11/30.
 */
import React,{Component,PropTypes} from 'react'
import {connect} from 'react-redux'
import {fetchPostsIfNeed} from '../actions'


class App extends Component{
  componentDidMount(){
    const {dispatch} = this.props
    dispatch(fetchPostsIfNeed('reactjs'))
  }
  render(){
    const {postsByReddit} = this.props
    console.log(postsByReddit)
    return(
      <div>
      </div>
    )
  }
}

const mapStateToProps = state =>{
  return {
    postsByReddit:state.postsByReddit.reactjs
  }
}

App.PropsTypes = {
  postsByReddit:PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
}

App = connect(mapStateToProps)(App)

export default App
