const visibilityFilter = (state = 'SHOW_ALL', action) => {
  console.log('visibilityFilter state:',state,'action:',action)
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    default:
      return state
  }
}

export default visibilityFilter
