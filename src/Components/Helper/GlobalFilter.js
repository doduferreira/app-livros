import React from 'react';
import Input from '../Forms/Input';

const GlobalFilter = ({ filter, setFilter, placeholder }) => {
  return (
    <span>
      {/* Search:{' '} */}
      <Input
        value={filter || ''}
        onChange={(e) => setFilter(e.target.value)}
        placeholder={placeholder}
      ></Input>
    </span>
  );
};

export default GlobalFilter;
