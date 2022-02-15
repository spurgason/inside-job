import React, { Component } from 'react'
import "./search-bar.scss"

class SearchBar extends Component {
  render() {
    return (
        <input className="search-bar form-control form-control-lg" type="text" placeholder="Search Location..." aria-label="location search bar" />
    )
  }
}

export default SearchBar;