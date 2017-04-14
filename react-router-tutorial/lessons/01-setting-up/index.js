import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory  } from 'react-router'
import App from './modules/App'
import About from './modules/About'
import Repos from './modules/Repos'
import Repo from './modules/Repo'
import AboutMessage from './modules/About/Message'
import Message from './modules/Message'

render((
  <Router history={browserHistory }>
    <Route path="/" component={App}>
      <IndexRoute component={App} />
      <Route path="/repos" component={Repos}/>
      <Route path="/repos/:userName/:repoName" component={Repo}/>  
      <Route path="/about" component={About}>
      	<Route path="/abmessage/:id" component={AboutMessage} />
      </Route>
    </Route>
    <Route path="/message" component={Message} />
	  <Route path="/message2" component={Message} />
  </Router>
), document.getElementById('app'))
