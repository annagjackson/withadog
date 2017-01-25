import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render () {
    return (
      <div className="categories">
        <h3>Things to do</h3>
        <nav className="d-flex flex-column">
         {this.props.categories.map( category => {
           return (<a className="p-2" key={category.id}><Link to = {`/categories/${category.id}`}>{category.name}</Link></a>)
         } )}
        </nav>
      </div>
    )
  }
})
