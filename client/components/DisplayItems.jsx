import React from 'react'
import { Link } from 'react-router'

import { items } from '../../public/things'

export default React.createClass({
  getInitialState () {
    return {
      items: []
    }
  },

  componentDidMount () {
    this.setState({
      items: items
    })
  },

  render () {
    const filteredItems = this.state.items.filter(item => {
      return item.categoryId === Number(this.props.params.id)
    })
    const filteredUsersItems = this.state.items.filter(item => {
      return item.userId === Number(this.props.params.id)
    })
    return (
      <div>
                <div className="card-deck content">
                {filteredItems.map(item => {
                  return (
                    <div key={item.id} className="card">
                        <div className="card-block">
                            <p className="card-text">{item.name}</p>
                        </div>
                        <img src={item.image} alt="Card image" width='250px' />
                      </div>

                  )
                })}
                </div>
            </div>
          )
        }
      })
