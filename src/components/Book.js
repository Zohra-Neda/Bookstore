import PropTypes from 'prop-types';

function Book({ book, deleteBook }) {
  return (
    <div>
      <li>
        <div>
          <span>Title:</span>
          {book.title}
        </div>
        <div>
          <span>Author:</span>
          {book.author}
        </div>
        <div>
          <span>Category:</span>
          {book.category}
        </div>
        <button type="button" onClick={() => deleteBook(book.id)}>Delete Book</button>
      </li>
    </div>
  );
}

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
  deleteBook: PropTypes.func.isRequired,
};

export default Book;
