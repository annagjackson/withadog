import React from 'react'
import { Link } from 'react-router'

export default React.createClass({

  render () {
    return (
      <div className='nav'>
        <Link to='/About'> About </Link>
        <Link to='/Blog'>Blog</Link>
        <Link to='/Contact'>Contact</Link>
      </div>

    )
  }
})
