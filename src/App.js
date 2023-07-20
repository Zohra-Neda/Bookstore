import { Routes, Route } from 'react-router-dom';
import './App.css';
import Book from './components/Book';
import Categories from './components/Categories';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <main className="top-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Book />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
