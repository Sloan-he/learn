import React from 'react'
import {render} from 'react-dom'
import App from './components/App'
import reducer from './reducers'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import {Router,Route,browserHistory} from 'react-router'

const store = createStore(reducer,{todos:[{id:100,completed:false,text:'100000'}]})

store.subscribe(() => console.log('store:',store.getState()))

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/(:filter)" component={App} />
    </Router>
  </Provider>,
  document.getElementById('root')
)
