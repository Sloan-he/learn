/**
 * Created by hesy on 2016/11/25.
 */

export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const SELECT_POSTS = 'SELECT_POSTS'


export const selectPosts = reddit =>({
  type:SELECT_POSTS,
  reddit
})

const requestPosts = reddit =>({
  type:REQUEST_POSTS,
  reddit
})

const receivePosts = (reddit,json) =>({
  type:RECEIVE_POSTS,
  reddit,
  posts:json.data.children.map(item => item.data),
  receivedAt:Date.now()
})


const shouldFetchsPosts = (state,reddit) =>{
  const posts = state.postsByReddit[reddit]
  if(!posts){
    console.log(1)
    return true
  }
  if(posts.isFetching){
    console.log(2)
    return false
  }
  return true
}

const fetchPosts = reddit => dispatch =>{
  dispatch(requestPosts(reddit));
  return fetch(`https://www.reddit.com/r/${reddit}.json`)
            .then(response => response.json())
            .then(json => dispatch(receivePosts(reddit,json)))
}

export const fetchPostsIfNeed = reddit => (dispatch,getState) => {
  if(shouldFetchsPosts(getState(),reddit)){
    dispatch(fetchPosts(reddit))
  }
}










