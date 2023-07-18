import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBooks, removeBook } from '../redux/books/booksSlice';
import Book from './Book';
import Form from './Form';

function BookList() {
  const { books, isLoading, error } = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(removeBook(id));
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Could not fetch data.</p>;
  }

  if (!books) {
    return null;
  }

  return (
    <div>
      {Object.values(books).map((book) => (
        <Book key={book.id} book={book} deleteBook={handleDelete} />
      ))}
      <Form />
    </div>
  );
}

export default BookList;
