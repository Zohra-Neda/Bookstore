import { Routes, Route } from 'react-router-dom';
import './App.css';
import BookList from './components/BookList';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<BookList />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
