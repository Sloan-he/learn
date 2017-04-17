import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import reducer from './reducers'

const store = createStore(reducer,{todos:[{id:1,text:'hesy',completed:false}]})

store.subscribe(() =>{
  console.log(store.getState());
})



render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
