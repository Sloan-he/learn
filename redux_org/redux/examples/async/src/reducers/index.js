import {combineReducers} from 'redux'
import {
  REQUEST_POSTS,
  RECEIVE_POSTS
} from '../actions'



const posts = (state = {
  isFetching:false,
  didInvalidate:false,
  item:[]
},action) =>{
  switch (action.type){
    case REQUEST_POSTS:
      console.log('REQUEST_POSTS')
      return {
        ...state,
        isFetching:true
      }
    case RECEIVE_POSTS:
      return {
        ...state,
        item:action.posts,
        isFetching:false,
        lastUpdated: action.receivedAt
      }
    default:
      return state
  }
}

const postsByReddit = (state = { },action) =>{
  switch (action.type){
    case REQUEST_POSTS:
    case RECEIVE_POSTS:
      return {
        ...state,
        [action.reddit]:posts(state[action.reddit],action)
      }
    default:
      return state
  }
}

const reducer =  combineReducers({
  postsByReddit
})

export default reducer
