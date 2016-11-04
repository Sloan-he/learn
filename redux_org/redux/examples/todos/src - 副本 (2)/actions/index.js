/**
 * Created by hesy on 2016/11/3.
 */

let nextId = 0;

export const addTodo = (text) =>({
  type:'ADD_TODO',
  id:nextId++,
  text
})

export const toggleTodo = (id) => ({
  type:'TOGGLE_TODO',
  id
})


export const deleteTodo = (id) =>({
  type:'DELETE_TODO',
  id
})

export const visibleTodoList = (filter) =>({
	type:'SET_VISIBLE_filter',
	filter
})