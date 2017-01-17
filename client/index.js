import React from 'react'
import ReactDOM from 'react-dom'
import { hashHistory, IndexRoute, Route, Router } from 'react-router'

import App from './components/App'
import Home from './components/Home'
import ProductListing from './components/ProductListing'
import ProductDetails from './components/ProductDetails'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Router history={hashHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={Home} />
        <Route path='listing' component={ProductListing} />
        <Route path='details ' component={ProductDetails} />
      </Route>
    </Router>,
    document.getElementById('app')
  )
})
