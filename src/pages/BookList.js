import React from 'react';
import BookTable from '../components/BookTable';

const BookList = ({ books, onDelete, onToggleStatus }) => {
  return (
    <div>
      <h2>Danh sách sách</h2>
      <BookTable books={books} onDelete={onDelete} onToggleStatus={onToggleStatus} />
    </div>
  );
};

export default BookList;