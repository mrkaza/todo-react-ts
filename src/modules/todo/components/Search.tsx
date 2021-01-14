import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Input } from 'components';
import { useSearch } from 'modules/todo';
import React from 'react';

const Search: React.FC = () => {
  const [{ search }, { handleSubmit, setSearch }] = useSearch();

  return (
    <form
      className="todo__search f f-justify-between f-align-items-center"
      onSubmit={handleSubmit}
    >
      <Input
        className="input input--transparent input--medium"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search todos.."
      />
      <div>
        <Button
          className="button button--text button--circle button--light ml-sm"
          type="submit"
        >
          <FontAwesomeIcon icon={faSearch} size="lg" />
        </Button>
      </div>
    </form>
  );
};

export default Search;
