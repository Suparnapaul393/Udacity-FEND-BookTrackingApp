import React, { Component } from 'react';
import Book from './Book'
import PropTypes from 'prop-types'

export default class BookShelf extends Component {

  render () {

    const { shelfName, shelfKey, handleChange, allBooks} = this.props;

    BookShelf.propTypes = {
      shelfName: PropTypes.string.isRequired,
      shelfKey: PropTypes.string.isRequired,
      allBooks: PropTypes.array.isRequired,
      handleChange: PropTypes.func.isRequired
    }

    return (
      <div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">{shelfName}</h2>
          <div className="line"></div>
          <div className="bookshelf-books">
            <ol className="books-grid">
            {/* get all books and if they are assigned
            /* to a certain shelf (shelfKey),
            /* display books in that shelf */}
            {allBooks.filter(book => book.shelf === shelfKey).map(
              book => (
                <li key={book.id}>
                  <Book
                    allBooks={allBooks}
                    currentBook={book}
                    handleChange={handleChange}
                  />
                </li>
              )
            )}
            </ol>
          </div>
        </div>
      </div>
    )
  }
}
