import React, { Component } from 'react';
import PropTypes from 'prop-types'

export default class AddShelfButton extends Component {

  render () {

  const { currentBook, handleChange } = this.props

  AddShelfButton.propTypes = {
    currentBook: PropTypes.object.isRequired,
    handleChange: PropTypes.func.isRequired
  }

  /* ======== check if book already has some shelf, if so, store shelf name in name variable, else store none ======== */
  const name = currentBook.shelf ? currentBook.shelf : 'none'

    return (
      <div className="book-shelf-changer">

        <select
          onChange={ (event) => {handleChange(currentBook, event.target.value)} }
          value={name}>
          <option value="move" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>

      </div>
    )
  }
}
