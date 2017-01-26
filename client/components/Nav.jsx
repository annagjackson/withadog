import React from 'react'
import { Link } from 'react-router'

const Nav = () => (
  <div className='nav'>
  <div className='nav-link'><Link to='/'> Home </Link></div>
  <div className='nav-link'><Link to='/About'> About  </Link></div>
  <div className='nav-link'><Link to='/Blog'> Blog </Link></div>
  <div className='nav-link'><Link to='/Contact'> Contact </Link></div>
  </div>
    )
export default Nav
