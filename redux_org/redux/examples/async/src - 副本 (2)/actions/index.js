/**
 * Created by hesy on 2016/11/25.
 */

export const REQUEST_POSTS = 'REQUEST_POSTS'

const requestPosts = reddit =>({
  type:REQUEST_POSTS,
  reddit
})

export const fetchPostsIfNeed = reddit => (dispatch,getState) => {
  if(shouldFetchsPosts(getState(),reddit)){
  }
}

const shouldFetchsPosts = (state,reddit) =>{
  const posts = state.postsByReddit[reddit]
  if(!posts){
    return true
  }
  if(posts.isFetching){
    return false
  }
  return posts.didInvalidate
}

const fetchPosts = reddit = dispatch =>{
  dispatch(requestPosts(reddit));
}





