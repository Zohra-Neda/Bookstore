import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <header>
        <h1>Bookstore CMS</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">BOOKS</Link>
            </li>
            <li>
              <Link to="/categories">CATEGORIES</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
