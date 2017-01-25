import React from 'react'

import About from './About'
import Home from './Home'

export default React.createClass({
  render () {
    return (
      <div className='content'>
        {this.props.children}
      </div>
    )
  }
})
