/**
 * Created by hesy on 2016/11/25.
 */

export const REQUEST_POSTS = 'REQUEST_POSTS'

export const fetchPosts = reddit => (dispatch,getState) => {
  if(shouldFetchsPosts(getState(),action)){

  }
}

const shouldFetchsPosts = (state,action) =>{
  const posts = state.postsByReddit[reddit]
  if(!posts){
    return true
  }
  if(posts.isFetching){
    return false
  }
  return posts.didInvalidate
}





