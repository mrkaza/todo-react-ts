// import { faSort } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'components';
import { useOrderBy } from 'modules/todo';
import React from 'react';

const OrderBy: React.FC = () => {
  const [
    { order },
    { orderAsc, orderDesc, orderCompleted, orderNotCompleted, handleSubmit },
  ] = useOrderBy();

  return (
    <form
      onSubmit={handleSubmit}
      className="f f-justify-around f-align-items-center"
    >
      {' '}
      <Button
        type="submit"
        className={`button button--text order-by__item ${
          order === 'created.asc' ? 'order-by__item--active' : ''
        }`}
        onClick={orderAsc}
      >
        Asc
      </Button>
      <Button
        type="submit"
        className={`button button--text order-by__item ${
          order === 'created.desc' ? 'order-by__item--active' : ''
        }`}
        onClick={orderDesc}
      >
        Desc
      </Button>
      <Button
        type="submit"
        className={`button button--text order-by__item ${
          order === 'completed' ? 'order-by__item--active' : ''
        }`}
        onClick={orderCompleted}
      >
        Completed
      </Button>
      <Button
        type="submit"
        className={`button button--text order-by__item ${
          order === 'not-completed' ? 'order-by__item--active' : ''
        }`}
        onClick={orderNotCompleted}
      >
        Not completed
      </Button>
    </form>
  );
};

export default OrderBy;
