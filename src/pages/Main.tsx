import React from 'react';

import Nav from '../components/Nav';
import News from '../components/News';

const Main = ({ menuActive, setMenuActive }: any) => {
  return (
    <section className="main">
      <div className="container">
        <Nav menuActive={menuActive} setMenuActive={setMenuActive} />
        <News />
      </div>
    </section>
  );
};

export default Main;
