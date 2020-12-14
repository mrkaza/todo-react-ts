import { orderTodos } from 'modules/todo';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const OrderBy: React.FC = () => {
  const [order, setOrder] = useState<string>('');
  const dispatch = useDispatch();

  const handleChange = (e: { target: { value: string } }) => {
    setOrder(e.target.value);
  };
  const orderBy = () => {
    dispatch(orderTodos(order));
  };

  return (
    <div className="col s12 m4 order-by">
      <form className="col s10">
        <label htmlFor="orderBy">Order By:</label>
        <select
          value={order}
          name="orderBy"
          id="orderBy"
          onChange={handleChange}
        >
          <option value="created.asc">Created at .asc</option>
          <option value="created.desc">Created at .desc</option>
          <option value="completed">Completed</option>
          <option value="not-completed">Not completed</option>
        </select>
      </form>
      <div className="col s2">
        <button
          className="z-depth-0 btn-floating btn-small grey"
          onClick={orderBy}
        >
          <i className="material-icons">filter_list</i>
        </button>
      </div>
    </div>
  );
};

export default OrderBy;
