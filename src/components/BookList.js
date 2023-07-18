import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';
import Book from './Book';

function BookList() {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    // Logic to delete the book
    dispatch(removeBook({ id }));
  };
  return (
    <div>
      {books.map((book) => (
        <Book key={book.id} book={book} deleteBook={handleDelete} />
      ))}
    </div>
  );
}

export default BookList;
