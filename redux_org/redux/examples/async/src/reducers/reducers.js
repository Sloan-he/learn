import { combineReducers } from 'redux'
import {
	SELECT_SUBREDDIT,
	INVALTDATE_SUBREDDIT,
	REQUEST_POSTS,
	RECEIVE_POSTS
} from '../actions'


const selectedSubreddit = (state = 'reactjs',action) =>{
	switch (action.type){
		case SELECT_SUBREDDIT:
			return action.subreddit
		default:
			return state
	}
}