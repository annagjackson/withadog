import React from 'react'
import { Link } from 'react-router'

import Search from './Search'
import Googlemap from './Googlemap'
import BlogCarousel from './BlogCarousel'

export default React.createClass({
  render () {
    return (
      <div>
        <Search />
        <Googlemap />
        <BlogCarousel />
      </div>
    )
  }
})
