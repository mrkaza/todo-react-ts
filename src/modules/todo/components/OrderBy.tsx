import { faSort } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'components';
import { useOrderBy } from 'modules/todo';
import React from 'react';

const OrderBy: React.FC = () => {
  const [{ order }, { handleChange, orderBy }] = useOrderBy();

  return (
    <div className="todo__filters__items">
      <form className="order-todos">
        <label htmlFor="orderBy" className="label">
          Order By:
        </label>
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
      <Button
        className="button button--neutral button--circle ml-sm"
        onClick={orderBy}
      >
        <FontAwesomeIcon icon={faSort} />
      </Button>
    </div>
  );
};

export default OrderBy;
