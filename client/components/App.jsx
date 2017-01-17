import React from 'react'

import Header from './Header'
//import Categories from './Categories'
import Content from './Content'
//import Nav from './Nav'
import Footer from './Footer'

export default React.createClass({
  render () {
    const pageState = {
      activePage: 'home',
      selectedCategory: '',
      selectedProduct: ''
    }

    const products = {
      categories: []
    }

    return (
      <div className='app'>
        <Header />
        <Content pageState={pageState} products={products} />
        <Footer />
      </div>
    )
  }
})
