import {combineReducers} from 'redux'
import {
  REQUEST_POSTS
} from '../actions'




const postsByReddit = (state = { },action) =>{
  switch (action.type){
    case REQUEST_POSTS:
      return {
        ...state,
        [action.reddit]:posts(state[action.reddit],action)
      }
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
    default:
      return state
  }
}

const reducer =  combineReducers({
  postsByReddit
})

export default reducer
