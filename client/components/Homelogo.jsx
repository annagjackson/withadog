import React from 'react'
import { Link } from 'react-router'

const Homelogo = () => (
  <div className='home-logo'>
    <div>
      <p className='logo-image'></p>
      < Link to='/'><img src={'images/doglogo.png'}
    /> </ Link >
    <div className='logo-text'>
    <h1>WITH A DOG</h1>
    </div>
    </div>
  </div>
  )

export default Homelogo
