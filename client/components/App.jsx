import React from 'react'
import { Link } from 'react-router'

import Header from './Header'
import Categories from './Categories'
// import Content from './Content'
// import Nav from './Nav'
import Footer from './Footer'

export default React.createClass({
  render () {
    // const pageState = {
    //   activePage: 'home',
    //   selectedCategory: '',
    //   selectedProduct: ''
    // }

    // const products = {
    //   categories: []
    // }

    const categories = []

    return (
      <div className='app'>
        <Header />
        <Categories categories={categories} />
        <Link to='/listing'>Go to listing</Link>
        <Link to='/'>Go to home</Link>
        <Link to='/details'>Go to listing</Link>
        

        {this.props.children}
        <Footer />
      </div>
    )
  }
})

// <Content pageState={pageState} products={products} />
