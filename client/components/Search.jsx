import React from 'react'
import {Link} from 'react-router'

const Search = () => (
    <div className='search'>
        <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenu1">
                <a className="dropdown-item" href="/">Action</a>
                <a className="dropdown-item" href="/">Another action</a>
            </div>
        </div>
    </div>
)
export default Search

// <Link to='/About'> About | </Link>
// <Link to='/Blog'> Blog | </Link>
// <Link to='/Contact'> Contact </Link>
