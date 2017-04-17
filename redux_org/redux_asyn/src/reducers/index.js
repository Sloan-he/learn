/**
 * Created by hesy on 2016/11/10.
 */

import {combineReducers} from  'redux'

//import {
//  SELECT_SUBREDDIT,
//  INVALIDATE_SUBREDDIT,
//  RECEIVE_POSTS,
//  REQUEST_POSTS
//} from '../actions'

//const selectedSubreddit = (state = 'reactjs',action) =>{
//  switch(action.type){
//    case SELECT_SUBREDDIT:
//      return action.subreddit
//    default:
//      return state
//  }
//}
//
//let postsState = {isFetching:false,didInvalidate:false,items:[]}
//const posts = (state = postsState,action) =>{
//  switch (action.type){
//    case INVALIDATE_SUBREDDIT:
//      return Object.assign({},state,{
//        didInvalidate:true
//      })
//    case REQUEST_POSTS:
//      return Object.assign({},state,{
//        isFetching:true,
//        didInvalidate:false
//      })
//    case RECEIVE_POSTS:
//      return Object.assign({},state,{
//        isFetching:false,
//        didInvalidate:false,
//        items:action.posts,
//        lastUpdated:action.receiveAt
//      })
//    default:
//      return state
//  }
//}

//const postsBySubreddit = (state = {}, action) => {
//  switch (action.type) {
//    case INVALIDATE_SUBREDDIT:
//    case RECEIVE_POSTS:
//    case REQUEST_POSTS:
//      return Object.assign({}, state, {
//        [action.subreddit]: posts(state[action.subreddit], action)
//      })
//    default:
//      return state
//  }
//}

const TodoList = (state = [{id:1,text:'11'},{id:2,text:'22'}],action) =>{
  switch (action.type){
    case 'ADD_TODO':
      return [
        ...state,
        {
          id:action.id,
          text:action.text,
          meta:action.meta
        }
      ]
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  TodoList
})

export default rootReducer