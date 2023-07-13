import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <header>
        <h1>Bookstore</h1>
        <nav>
          <Link to="/">BOOKS</Link>
          <Link to="categories">CATEGORIES</Link>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
