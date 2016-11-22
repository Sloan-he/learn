import fetch from 'isomorphic-fetch'

export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const SELECT_SUBREDDIT = 'SELECT_SUBREDDIT'
export const INVALIDATE_SUBREDDIT  = 'INVALIDATE_SUBREDDIT '


export const selectSubreddit = subreddit =>{
	return {
		type:SELECT_SUBREDDIT,
		subreddit
	}
}


export const invalidateSubreddit = subreddit =>{
	return {
		type:INVALIDATE_SUBREDDIT,
		subreddit
	}
}


const requestPosts = subreddit =>{
	return {
		type:REQUEST_POSTS,
		subreddit
	}
}

const receivePosts = subreddit =>{
	return {
		type:REQUEST_POSTS,
		subreddit,
		posts:json.data.children.map(child => child.data),
		receivedAt:Date.now()
	}
}


const fetchPosts = subreddit =>{
	return dispatch =>{
		dispatch(requestPosts(subreddit));
		return fetch(`http://www.reddit.com/r/${subreddit}.json`)
				.then(response => response.json)
				.then(json => dispatch(receivePosts(subreddit,json)))
	}
}

const shouldFetchPosts = (state,subreddit) =>{
	const posts = state.postsBySubreddit[subreddit]
}