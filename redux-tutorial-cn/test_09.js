import {createStore,combineReducers,applyMiddleware} from 'redux'


var thunkMiddleware = function({dispatch,getState}){
	return function(next){
		//console.log('Function "next" provided:', next);
		return function(action){
			//console.log('thunkMiddleware action:',action);
			console.log(dispatch,'\n',getState);
			return typeof action === 'function' ?
				action(dispatch,getState):
				next(action)
		}
	}
}

var finalCreateStore = applyMiddleware(thunkMiddleware)(createStore)

var reducer = combineReducers({
    speaker: function (state = {}, action) {
        //console.log('speaker was called with state', state, 'and action', action)
        switch (action.type) {
            case 'SAY':
                return {
                    ...state,
                    message: action.message
                }
            default:
                return state;
        }
    }
})
var store_0 = finalCreateStore(reducer)

var asynSayActionCreator_1 = function(message){
	return function(dispatch){
		// setTimeout(function(){
			//console.log(new Date(), 'Dispatch action now:')
			dispatch({
				type:'SAY',
				message
			})
		// },2000)
	}
}

//console.log("\n", new Date(), 'Running our async action creator:', "\n")

store_0.dispatch(asynSayActionCreator_1('HI'))