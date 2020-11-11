import React from 'react';
import Search from './Search';
import OrderBy from './OrderBy'

const TodoFilter = () => {
    return (
            <div className="col s12 filters">
                <Search />
                <OrderBy />
            </div>
    )
}

export default TodoFilter;