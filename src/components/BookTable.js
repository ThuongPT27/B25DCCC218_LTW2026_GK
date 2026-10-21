import React from 'react';
import BookRow from './BookRow';

const BookTable = ({ books, onDelete, onToggleStatus }) => {
  return (
    <table border="1" cellPadding="8" style={{ width: '100%', borderCollapse: 'collapse' }}>
      <thead>
        <tr>
          <th>Tên sách</th>
          <th>Tác giả</th>
          <th>Năm</th>
          <th>Thể loại</th>
          <th>Trạng thái</th>
          <th>Thao tác</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book) => (
          <BookRow 
            key={book.id} 
            book={book} 
            onDelete={onDelete} 
            onToggleStatus={onToggleStatus} 
          />
        ))}
      </tbody>
    </table>
  );
};

export default BookTable;