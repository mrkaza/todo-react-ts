import { Button } from 'components';
import { searchTodo } from 'modules/todo';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const Search: React.FC = () => {
  const [search, setSearch] = useState<string>('');
  const dispatch = useDispatch();

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    dispatch(searchTodo(search));
  };

  return (
    <div className="col s12 m8">
      <form className="col s12 search-form" onSubmit={handleSubmit}>
        <div className="col s10 input-field">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search todos.."
          />
        </div>
        <div className="col s2">
          <Button
            className="z-depth-0 btn-floating btn-small grey"
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
