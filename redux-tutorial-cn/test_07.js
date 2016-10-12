import {createStore,combineReducers} from 'redux'

var reducer = combineReducers({
  speaker:function(state = {},action){
    console.log('speaker state:',state,'action:',action)
    switch (action.type){
    	case 'SAY':
    		return {
    			...state,
    			message:action.message
    		}
    	default:return state;
    }
  }
})

var store_0 = createStore(reducer);

var sayActionCreator = function(mesasge){
	return {
		type:'SAY',
		mesasge
	}
}

store_0.dispatch(sayActionCreator('Hi'))
console.log('store_0 state after action SAY:', store_0.getState())

//-------------------------------------------------------------------

var ansncSayActionCreator_0 = function(message){
	return function(dispatch){
		setTimeout(function(){
			return dispatch({
				type:'SAY',
				message
			})
		},2000)
	}
}