import React from 'react'
import ReactDOM from 'react-dom'
import { hashHistory, Route, IndexRoute, Router } from 'react-router'

import App from './components/App'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Blog from './components/Blog'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    (
      <Router history={hashHistory}>
        <Route path='/' component={App}>
          <IndexRoute component={Home} />
          <Route path='about' component={About} />
          <Route path='contact' component={Contact} />
          <Route path='blog' component={Blog} />
        </Route>
      </Router>
    ),
    document.getElementById('app')
  )
})
