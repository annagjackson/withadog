import React from 'react'
import { Link } from 'react-router'

export default React.createClass({

  render () {
    return (

      <div className='categories'>
        <ul>
          <li className='selected'><Link to='/listing'>Wombles</Link></li>
          {this.props.categories.map(category => {
            <li><Link to='#'
              className={this.props.selected ? 'selected' : ''}
              onClick={() => this.props.navigateTo(category)}>category</Link></li>
          })}
        </ul>
      </div>
    )
  }
})
