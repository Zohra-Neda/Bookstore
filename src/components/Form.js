import React from 'react';

function Form() {
  return (
    <div className="form-container">
      <h2>ADD NEW BOOK</h2>
      <form>
        <input type="text" placeholder="Book title" id="title" />
        <input type="text" placeholder="Book author" id="author" />
        <input type="text" placeholder="Book category" id="category" />
        <button type="button" id="add-new-book">ADD BOOK</button>
      </form>
    </div>
  );
}

export default Form;
