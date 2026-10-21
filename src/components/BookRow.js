import React from 'react';
import { Link } from 'react-router-dom';

const BookRow = ({ book, onDelete, onToggleStatus }) => {
  const { id, title, author, year, category, available } = book;

  return (
    <tr style={{ backgroundColor: available ? 'transparent' : '#f0f0f0' }}>
      <td>
        <Link to={`/books/${id}`}>{title}</Link>
      </td>
      <td>{author}</td>
      <td>{year}</td>
      <td>{category}</td>
      <td>{available ? 'Có sẵn' : 'Đang mượn'}</td>
      <td>
        <button onClick={() => onToggleStatus(id)} style={{ marginRight: '5px' }}>
          {available ? 'Cho mượn' : 'Nhận trả'}
        </button>
        <button onClick={() => onDelete(id)}>Xóa</button>
      </td>
    </tr>
  );
};

export default BookRow;