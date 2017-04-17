/**
 * Created by hesy on 2016/11/30.
 */
import React,{Component,PropTypes} from 'react'
import {connect} from 'react-redux'
import {fetchPostsIfNeed,selectPosts} from '../actions'
import Posts from '../components/posts'
import Picker from '../components/picker'


class App extends Component{
  constructor(props){
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.handleRefresh = this.handleRefresh.bind(this)
  }
  componentDidMount(){
    const {dispatch} = this.props
    dispatch(fetchPostsIfNeed('reactjs'))
  }
  componentWillReceiveProps(nextProps){
    if(nextProps.selectReddit !== this.props.selectReddit){
      const {dispatch} = this.props
      dispatch(fetchPostsIfNeed(nextProps.selectReddit))
    }
  }
  handleChange = reddit =>{
    this.props.dispatch(selectPosts(reddit))
  }
  handleRefresh = e =>{
    e.preventDefault()
    console.log(11)
    const {dispatch,selectReddit} = this.props
    dispatch(fetchPostsIfNeed(selectReddit))
  }
  render(){
    const {postsByReddit,selectReddit} = this.props
    return(
      <div>
        <h1>{selectReddit}</h1>
        <Picker refresh={this.handleRefresh} reddit={selectReddit} options={['reactjs','frontend']} lastUpdated={postsByReddit.lastUpdated || 0} isFetching={postsByReddit.isFetching} onChange={this.handleChange} />
        {postsByReddit.item.length > 0
          ? <Posts posts={postsByReddit.item} /> : (postsByReddit.isFetching ? <h2>Loading...</h2> : <h2>Empty</h2>)
        }
      </div>
    )
  }
}

const mapStateToProps = state =>{
  const {postsByReddit,selectReddit} = state
  return {
    postsByReddit:postsByReddit[selectReddit] || {item:[],isFetching:false},
    selectReddit:selectReddit
  }
}

App.propsTypes = {
  postsByReddit:PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  selectReddit:PropTypes.string.isRequired
}

App = connect(mapStateToProps)(App)

export default App
