import React from 'react'
import Nav from './Nav'

export default React.createClass({

  render () {
    return (
      <div className='product-listing'>
        <Nav history={['home']} />
        <h2>Wombles</h2>
        <p>Select a creature in the list below to see its details.</p>
        <ul>
          {this.props.products.map(product => {
            return <li><a href='#'
              onClick={() => this.props.navigateTo('details', product.category)}>{product.name}</a></li>
          })}
        </ul>
      </div>

    )
  }
})
