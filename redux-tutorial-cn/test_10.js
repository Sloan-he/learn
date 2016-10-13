import {createStore,combineReducers} from 'redux'

var itemsReducer = function(state = [],action){
	switch(action.type){
		case 'ADD_ITEM':
			return [
				...state,
				action.item
			]
		default:return state;
	}
}

var reducer = combineReducers({
	item:itemsReducer
})

var store_0 = createStore(reducer)

