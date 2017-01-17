import React from 'react'

import Header from './Header'
import Categories from './Categories'
import Content from './Content'
import Nav from './Nav'
import Footer from './Footer'


export default React.createClass({
  pageState: {
    activePage: 'home',
    selectedCategory: '',
    selectedProduct: ''
  },
  render() {
    return (
        <div className='app'>
            <Header />
            <Content />
            <Footer />
        </div>
    )
  }
})
