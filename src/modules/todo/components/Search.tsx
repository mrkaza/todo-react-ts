import { Button, Input } from 'components';
import { useSearch } from 'modules/todo';
import React from 'react';

const Search: React.FC = () => {
  const [{ search }, { handleSubmit, setSearch }] = useSearch();

  return (
    <div className="col s12 m8">
      <form className="col s12 search-form" onSubmit={handleSubmit}>
        <Input
          className="col s10"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search todos.."
        />
        <div className="col s2">
          <Button
            className="button button--neutral button--circle"
            type="submit"
          >
            <i className="material-icons">search</i>
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Search;
