import React, { FC } from 'react';

import Nav from '../components/Nav';
import { SearchForm } from '../components/SearchForm';

//types
interface SearchProps {
  menuActive: boolean;
  setMenuActive: (menuActive: boolean) => void;
}

const Search: FC<SearchProps> = ({ menuActive, setMenuActive }) => {
  return (
    <section>
      <div className="container">
        <Nav menuActive={menuActive} setMenuActive={setMenuActive} />
        <SearchForm />
      </div>
    </section>
  );
};

export default Search;
