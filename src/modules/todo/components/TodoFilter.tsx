import React from 'react';

import OrderBy from './OrderBy';
import Search from './Search';

const TodoFilter: React.FC = () => {
  return (
    <div className="col s12 filters">
      <Search />
      <OrderBy />
    </div>
  );
};

export default TodoFilter;
