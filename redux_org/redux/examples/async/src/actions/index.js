/**
 * Created by hesy on 2016/11/25.
 */

export const REQUEST_POSTS = 'REQUEST_POSTS'

const requestPosts = reddit =>({
  type:REQUEST_POSTS,
  reddit
})

const shouldFetchsPosts = (state,reddit) =>{
  console.log(111)
  const posts = state.postsByReddit[reddit]
  if(!posts){
    return true
  }
  if(posts.isFetching){
    return false
  }
  return posts.didInvalidate
}

const fetchPosts = reddit => dispatch =>{
  console.log(2222)
  dispatch(requestPosts(reddit));
}

export const fetchPostsIfNeed = reddit => (dispatch,getState) => {
  console.log(reddit)
  console.log(dispatch)
  console.log(getState)
  if(shouldFetchsPosts(getState(),reddit)){
    console.log(reddit)
    dispatch(fetchPosts(reddit))
  }
}










