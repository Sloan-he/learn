import {combineReducers} from 'redux'
import {
  REQUEST_POSTS,
  RECEIVE_POSTS,
  SELECT_POSTS
} from '../actions'


export const selectReddit = (state = 'reactjs',action) => {
  switch (action.type){
    case SELECT_POSTS:
      return action.reddit
    default:
      return state
  }
}

const posts = (state = {
  isFetching:false,
  didInvalidate:false,
  item:[]
},action) =>{
  switch (action.type){
    case REQUEST_POSTS:
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
  postsByReddit,
  selectReddit
})

export default reducer
