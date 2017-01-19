import React from 'react'

import Header from './Header'
import Home from './Home'
import Footer from './Footer'

export default React.createClass({
  render () {
    return (
      <div className='container'>
        <Header />
        <Home />
        <Footer />
      </div>
    )
  }
})
