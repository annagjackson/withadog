import React from 'react'
import Nav from './Nav'
import Homelogo from './Homelogo'

export default React.createClass({

  render () {
    return (
      <div>
        <Homelogo />
        <h1>WITH A DOG</h1>
        <Nav />
      </div>
    )
  }
})
