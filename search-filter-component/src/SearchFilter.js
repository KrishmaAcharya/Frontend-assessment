// src/SearchFilter.js
import React, { useState } from 'react';

const SearchFilter = ({ items }) => {
  const [query, setQuery] = useState('');

  const filteredItems = items.filter(item =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Search..."
        className="p-2 border rounded"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <ul className="mt-2">
        {filteredItems.map((item, index) => (
          <li key={index} className="p-1 border-b">{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchFilter;
