import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';

import Layout from './components/Layout';
import Home from './pages/Home';
import BookList from './pages/BookList';
import AddBook from './pages/AddBook';
import BookDetail from './pages/BookDetail';

const App = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    
    axios.get('/data/books.json', { signal: controller.signal })
      .then((res) => {
        setBooks(res.data);
        setLoading(false);
      })
      .catch((err) => {
        if (!axios.isCancel(err)) {
          setError(true);
          setLoading(false);
        }
      });

    return () => {
      controller.abort();
    };
  }, []);

  const handleDelete = (id) => {
    setBooks(books.filter((b) => b.id !== id));
  };

  const handleToggleStatus = (id) => {
    setBooks(books.map((b) => (b.id === id ? { ...b, available: !b.available } : b)));
  };

  const handleAddBook = (newBook) => {
    setBooks([...books, newBook]);
  };

  if (loading) {
    return <div>Đang tải...</div>;
  }

  if (error) {
    return <div>Không tải được dữ liệu</div>;
  }

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route 
          path="books" 
          element={<BookList books={books} onDelete={handleDelete} onToggleStatus={handleToggleStatus} />} 
        />
        <Route 
          path="books/new" 
          element={<AddBook books={books} onAddBook={handleAddBook} />} 
        />
        <Route 
          path="books/:id" 
          element={<BookDetail books={books} />} 
        />
      </Route>
    </Routes>
  );
};

export default App;
