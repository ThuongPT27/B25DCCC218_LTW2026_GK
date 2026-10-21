import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CATEGORIES } from '../data';

const AddBook = ({ books, onAddBook }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [year, setYear] = useState('');
  const [category, setCategory] = useState(CATEGORIES[0]);
  const [errorMsg, setErrorMsg] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !author.trim() || !year) {
      setErrorMsg('Vui lòng nhập đầy đủ thông tin phía dưới form');
      return;
    }

    const maxId = books.length > 0 ? Math.max(...books.map((b) => b.id)) : 0;
    const newBook = {
      id: maxId + 1,
      title,
      author,
      year: Number(year),
      category,
      available: true,
    };

    onAddBook(newBook);
    navigate('/books', { replace: true });
  };

  return (
    <div>
      <h2>Thêm mới sách</h2>
      {errorMsg && <p style={{ color: 'red' }}>{errorMsg}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Tên sách</label><br />
          <input 
            id="title" 
            type="text" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
          />
        </div>
        <div>
          <label htmlFor="author">Tác giả</label><br />
          <input 
            id="author" 
            type="text" 
            value={author} 
            onChange={(e) => setAuthor(e.target.value)} 
          />
        </div>
        <div>
          <label htmlFor="year">Năm xuất bản</label><br />
          <input 
            id="year" 
            type="number" 
            value={year} 
            onChange={(e) => setYear(e.target.value)} 
          />
        </div>
        <div>
          <label htmlFor="category">Thể loại</label><br />
          <select 
            id="category" 
            value={category} 
            onChange={(e) => setCategory(e.target.value)}
          >
            {CATEGORIES.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
        <br />
        <button type="submit">Thêm</button>
      </form>
    </div>
  );
};

export default AddBook;