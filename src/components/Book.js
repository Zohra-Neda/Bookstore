import React, { useState } from 'react';

function Book() {
  const [bookState, setBookState] = useState('');

  const handleDelete = () => {
    // Logic to delete the book
    setBookState('Book deleted');
  };

  return (
    <div>
      <p>
        Individual Book State:
        {bookState}
      </p>
      <button type="button" onClick={handleDelete}>Remove</button>
    </div>
  );
}

export default Book;
