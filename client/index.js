import React from 'react'
import ReactDOM from 'react-dom'
import { hashHistory, IndexRoute, Route, Router } from 'react-router'

import App from './components/App'
import Home from './components/Home'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Router history={hashHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={Home} />
      </Route>
    </Router>,
    document.getElementById('app')
  )
})
