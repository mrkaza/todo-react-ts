import React from 'react';

import OrderBy from './OrderBy';
import Search from './Search';

const TodoFilter: React.FC = () => {
  return (
    <div className="todo__filters">
      <Search />
      <OrderBy />
    </div>
  );
};

export default TodoFilter;
