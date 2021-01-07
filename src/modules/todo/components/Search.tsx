import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Input } from 'components';
import { useSearch } from 'modules/todo';
import React from 'react';

const Search: React.FC = () => {
  const [{ search }, { handleSubmit, setSearch }] = useSearch();

  return (
    <form className="todo__filters__items" onSubmit={handleSubmit}>
      <Input
        className="input input--secondary input--medium"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search todos.."
      />
      <div className="col s2">
        <Button className="button button--neutral button--circle" type="submit">
          <FontAwesomeIcon icon={faSearch} />
        </Button>
      </div>
    </form>
  );
};

export default Search;
