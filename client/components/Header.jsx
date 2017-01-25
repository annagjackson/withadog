import React from 'react'
import Nav from './Nav'
import { Link } from 'react-router'

const Header = () => (
  <div className='header'>
    <div className='container'>
      <div className='row'>
          <div className='col-sm-9'>
            <div className='header-text'>
            <h1>WITH A DOG</h1>
          <h2>Do stuff with your pooch</h2>
          </div>
            </div>
          <div className='col-sm-3' >
              <Nav/>
                </div>
            </div>
        </div>
    </div>

)

export default Header
