import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/booksSlice';

function Form() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const [bookData, setBookData] = useState([]);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = {
      id: uuidv4(),
      title,
      author,
      category,
    };
    dispatch(addBook(newBook));
    setBookData([...bookData, newBook]);
    setTitle('');
    setAuthor('');
    setCategory('');
  };
  return (
    <div className="form-container">
      <h2>ADD NEW BOOK</h2>
      <form>
        <input type="text" placeholder="Book title" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <input type="text" placeholder="Book author" id="author" value={author} onChange={(e) => setAuthor(e.target.value)} />
        <select name="category" value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Select Category</option>
          <option value="memoir">Memoir</option>
          <option value="science">Science</option>
          <option value="travel">Travel</option>
          <option value="business/Finance">Business/Finance</option>
          <option value="poetry">Poetry</option>
          <option value="science Fiction">Science Fiction</option>
          <option value="horror">Horror</option>
          <option value="comedy/Humor">Comedy/Humor</option>
          <option value="drama/Play">Drama/Play</option>
          <option value="novels/Comics">Novels/Comics</option>
          <option value="cookbooks">Cookbooks</option>
        </select>
        <button type="submit" id="add-new-book" onClick={handleSubmit}>ADD BOOK</button>
      </form>
    </div>
  );
}

export default Form;
