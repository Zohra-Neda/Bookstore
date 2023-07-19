import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/booksSlice';

function Form() {
  const dispatch = useDispatch();
  const [bookData, setBookData] = useState({
    title: '',
    author: '',
    category: '',
  });

  const { title, author, category } = bookData;

  const handleInputChange = ({ target: { name, value } }) => {
    setBookData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title !== '' && author !== '' && category !== '') {
      const newBook = {
        item_id: uuidv4(),
        ...bookData,
      };

      dispatch(addBook(newBook));
      setBookData({
        title: '',
        author: '',
        category: '',
      });
    }
  };
  return (
    <div>
      <h2 className="form-title">ADD NEW BOOK</h2>
      <form className="form-container">
        <hr />
        <div className="form-content">
          <input type="text" name="title" placeholder="Book title" id="title" value={title} onChange={handleInputChange} />
          <input type="text" name="author" placeholder="Book author" id="author" value={author} onChange={handleInputChange} />
          <select name="category" value={category} onChange={handleInputChange}>
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
        </div>
      </form>
    </div>
  );
}

export default Form;
