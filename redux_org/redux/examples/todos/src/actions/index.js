let nextTodoId = 0


//新增计划
export const addTodo = (text) => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
})

//过滤计划
export const setVisibilityFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

//切换状态
export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  id
})
