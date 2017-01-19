import React from 'react'
import { Link } from 'react-router'

const Nav = () => (
  <div className='nav'>
    <Link to='/About'> About | </Link>
    <Link to='/Blog'> Blog | </Link>
    <Link to='/Contact'> Contact </Link>
  </div>
    )
export default Nav
