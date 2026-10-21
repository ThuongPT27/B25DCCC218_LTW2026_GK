import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav style={{ padding: '10px', borderBottom: '1px solid #ccc', marginBottom: '20px' }}>
      <NavLink to="/" end style={{ marginRight: '15px' }}>Trang chủ</NavLink>
      <NavLink to="/books" end style={{ marginRight: '15px' }}>Danh sách</NavLink>
      <NavLink to="/books/new" end>Thêm mới</NavLink>
    </nav>
  );
};

export default NavBar;