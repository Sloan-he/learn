/**
 * Created by hesy on 2016/11/3.
 */



const todos = (state = [],action) =>{
  switch (action.type){
    case 'ADD_TODO':
      return [
        ...state,
        {
          id:action.id,
          text:action.text,
          completed:false
        }
      ]
    case 'TOGGLE_TODO':
      return state.map(t => {
        if(t.id === action.id){
          return {
            ...t,
            completed:action.text ? t.completed : !t.completed,
            text:action.text ? action.text : t.text
          }
        }
        return t
      })
    case 'DELETE_TODO':
      return state.filter((t) =>{
        return t.id !== action.id
      })
    default:
      return state
  }
}

export default todos
