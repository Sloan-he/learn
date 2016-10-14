import {createStore,combineReducers} from 'redux'

var itemsReducer = function(state = [],action){
  console.log('itemsReducer was called with state', state, 'and action', action)
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

store_0.subscribe(function(){
  console.log('store_0 has been updated.state:',store_0.getState());
})

var addItemActionCreator = function(item){
  return {
    type:'ADD_ITEM',
    item:item
  }
}
store_0.dispatch(addItemActionCreator({id: 1234, description: 'anything'}))