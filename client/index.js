import React from 'react'
import ReactDOM from 'react-dom'
import {Router, IndexRoute, Route, hashHistory} from 'react-router'

import App from './components/App'
import Home from './components/Home'
import About from './components/About'
import DisplayItems from './components/DisplayItems'
import Content from './components/Content'
import ItemDetails from './components/ItemDetails'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    (<Router history={hashHistory}>
      <Route path='/' component = { App }>
          <Route component = { Content } >
            <IndexRoute component={ Home } />
          <Route path='about' component={ About } />
          <Route path='categories/:id' component={ DisplayItems }/>
          <Route path='details/:id' component={ ItemDetails} />
          </Route>
        </Route>
    </Router>
    ),
    document.getElementById('app')
  )
})
