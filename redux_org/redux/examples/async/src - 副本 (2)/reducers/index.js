import {
  REQUEST_POSTS
} from '../actions'




const postsByReddit = (state = { },action) =>{
  switch (action.type){
    case REQUEST_POSTS:
      return {
        ...state
      }
    default:
      return state
  }
}


