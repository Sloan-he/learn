/**
 * Created by hesy on 2016/11/9.
 */

export const SELECT_SUBREDDIT = 'SELECT_SUBREDDIT'

export selectSureddit = (subreddit) =>{
  return {
    type:SELECT_SUBREDDIT,
    subreddit
  }
}


export const INVALTIDTE_SUBREDDIT = 'INVALTIDTE_SUBREDDIT'

export invalidatesubreddit(subreddit){
  return {
    type:INVALTIDTE_SUBREDDIT,
    subreddit
  }
}

export const REQUEST_POSTS = 'REQUEST_POSTS'

export requestPosts = (subreddit) =>{
  return {
    type:REQUEST_POSTS,
    subreddit
  }
}

export const RECEIVE_POSTS = 'RECEIVE_POSTS'

export receivePosts = (subreddit,json) =>{
  return {
    type:RECEIVE_POSTS,
    subreddit,
    posts:json.data.children.map(child => child.data),
    receivedAt:Date.now()
  }
}