import React from 'react';

import Nav from '../components/Nav';
import { SearchForm } from '../components/SearchForm';

const Search = ({ menuActive, setMenuActive }: any) => {
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
