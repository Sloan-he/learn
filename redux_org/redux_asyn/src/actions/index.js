/**
 * Created by hesy on 2016/11/9.
 */

//import fetch from 'isomorphic-fetch'


export const SELECT_SUBREDDIT = 'SELECT_SUBREDDIT'

export function selectSubreddit(subreddit) {
  return {
    type: SELECT_SUBREDDIT,
    subreddit
  }
}


export const INVALIDATE_SUBREDDIT = 'INVALIDATE_SUBREDDIT'

export function invalidatesubreddit(subreddit) {
  return {
    type: INVALIDATE_SUBREDDIT,
    subreddit
  }
}

export const REQUEST_POSTS = 'REQUEST_POSTS'

export function requestPosts(subreddit) {
  return {
    type: REQUEST_POSTS,
    subreddit
  }
}

export const RECEIVE_POSTS = 'RECEIVE_POSTS'

export function receivePosts(subreddit, json) {
  return {
    type: RECEIVE_POSTS,
    subreddit,
    posts: json.data.children.map(child => child.data),
    receivedAt: Date.now()
  }
}

export const fetchPosts =  subreddit =>{
  return dispatch =>{
    dispatch(requestPosts(subreddit));
    //return fetch(`http://www.subreddit.com/r/${subreddit}.json`)
    //  .then(response => response.json())
    //  .then(json => dispatch(receivePosts(subreddit,json)))
  }
}

export const shouldFetchPosts = (state,subreddit) =>{
  const posts = state.postsBySubreddit[subreddit]
  if(!posts){
    return true
  }else if(posts.isFetching){
    return false
  }else{
    return posts.didInvalidate
  }
}

export const fetchPostsIfNeeded = (subreddit) =>{
  return (dispatch,getState) =>{
    if(shouldFetchPosts(getState(),subreddit)){
      return dispatch(fetchPosts(subreddit))
    }else{
      return Promise.resolve();
    }
  }
}


export const addTodo = (text,id) =>{
  return {
    type:'ADD_TODO',
    text,
    id
  }
}

