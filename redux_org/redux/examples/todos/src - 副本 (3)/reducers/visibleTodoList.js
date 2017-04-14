
// const visibleTodoList = (state = 'SHOW_ALL',action) => {
// 	switch(action.type){
// 		case 'SET_VISIBLE_FILTER':
// 			return action.filter
// 		default:
// 			return state			
// 	}
// }

function createReducer(initialState, handlers) {
  return function reducer(state = initialState, action) {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action);
    } else {
      return state;
    }
  }
}


const visibleTodoList = createReducer('SHOW_ALL',{
	['SET_VISIBLE_FILTER']:(state,action) =>{
		return action.filter
	}
})

export default visibleTodoList