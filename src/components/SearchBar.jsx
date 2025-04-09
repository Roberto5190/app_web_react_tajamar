import React, { useState } from 'react';

export default function SearchBar({ onSearch }) {
    const [query, setQuery] = useState('');

    const handleChange = (event) => {
      const value = event.target.value;
      setQuery(value);
      onSearch(value); // le pasa el valor escrito al componente padre
    };
  
    return (
      <input
        type="text"
        placeholder="Buscar gatos..."
        value={query}
        onChange={handleChange}
        className="bg-gray-200 rounded-full px-4 py-1 text-gray-900 mb-4"
      />
    );
}
