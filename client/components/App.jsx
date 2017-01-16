import React from 'react'

import Header from './Header'
import Categories from './Categories'
import Home from './Home'
import ProductListing from './ProductListing'
import ProductDetails from './ProductDetails'
import Nav from './Nav'
import Footer from './Footer'


export default React.createClass({
  render() {
    return (
    <div class="container-fluid">
    <div className="app">

        <div className="header">
        <Header />
        <h1>This is a header</h1>
        </div>



        <div className="row"

            <div className="categories">
            <Categories />
              <h3>Categories</h3>
            </div>

            <div className="home">
            <Home />
            <h3>home</h3>
            </div>

            <div className="product-listing">
            <ProductListing />
            <h3>Product Listing</h3>
            </div>

            <div className="product-details">
            <ProductDetails />
            <h3>Product Details</h3>
            </div>

        </div>

        <div className="nav">
        <Nav />
        <h3>Nav</h3>

        </div>

        <div className="footer">
        <Footer />
        <h3>This is a footer</h3>

        </div>

      </div>
      </div>
    )
  }
})
