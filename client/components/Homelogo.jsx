import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render () {
    return (
      <div className='home-logo'>
        <Link to='/'>Home</Link>
      </div>

    )
  }
})
