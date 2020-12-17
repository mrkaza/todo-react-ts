import { Button } from 'components';
import { useOrderBy } from 'modules/todo';
import React from 'react';

const OrderBy: React.FC = () => {
  const [{ order }, { handleChange, orderBy }] = useOrderBy();

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
        <Button
          className="z-depth-0 btn-floating btn-small grey"
          onClick={orderBy}
        >
          <i className="material-icons">filter_list</i>
        </Button>
      </div>
    </div>
  );
};

export default OrderBy;
