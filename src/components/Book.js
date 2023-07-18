import PropTypes from 'prop-types';
import React from 'react';

function Book({ book, deleteBook }) {
  const {
    category, title, author, chapter, id,
  } = book[0];

  const renderBook = () => (
    <div>
      <div>
        <p>{category}</p>
        <h3>{title}</h3>
        <p>{author}</p>
        <div>
          <button type="button">Comment</button>
          <div>
            <button
              type="button"
              onClick={() => deleteBook(id)}
            >
              Remove
            </button>
          </div>
          <button type="button">Edit</button>
        </div>
      </div>
      <div>
        <h4>75%</h4>
        <div>Completed</div>
      </div>
      <div>
        <h3>Current Chapter</h3>
        <p>{chapter}</p>
        <button type="button">Update Progress</button>
      </div>
    </div>
  );

  return (
    <div key={id}>
      {renderBook()}
    </div>
  );
}

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    chapter: PropTypes.string.isRequired,
  }).isRequired,
  deleteBook: PropTypes.func.isRequired,
};

export default Book;
