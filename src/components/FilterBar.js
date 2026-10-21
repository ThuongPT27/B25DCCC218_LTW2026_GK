import React from 'react';
import { CATEGORIES } from '../data';

const FilterBar = ({ keyword, onKeywordChange, selectedCategory, onCategoryChange, isSearching }) => {
  return (
    <div style={{ marginBottom: '15px', display: 'flex', gap: '20px', alignItems: 'center' }}>
      <div>
        <label htmlFor="searchKeyword" style={{ marginRight: '5px' }}>Tìm kiếm</label>
        <input 
          id="searchKeyword" 
          type="text" 
          value={keyword} 
          onChange={(e) => onKeywordChange(e.target.value)} 
          placeholder="Nhập tên sách..."
        />
        {isSearching && <span style={{ marginLeft: '10px', fontStyle: 'italic', color: '#666' }}>Đang tìm...</span>}
      </div>

      <div>
        <label htmlFor="filterCategory" style={{ marginRight: '5px' }}>Thể loại</label>
        <select 
          id="filterCategory" 
          value={selectedCategory} 
          onChange={(e) => onCategoryChange(e.target.value)}
        >
          <option value="Tất cả">Tất cả</option>
          {CATEGORIES.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default FilterBar;
