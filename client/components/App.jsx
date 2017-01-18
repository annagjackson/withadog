import React from 'react'
import { Link } from 'react-router'

import Header from './Header'
import Home from './Home'
import Footer from './Footer'

export default React.createClass({
  render () {
    return (
      <div>
        <Header />
        <Home />
        <Footer />
      </div>
    )
  }
})
