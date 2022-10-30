import React, { FC } from 'react';

import Nav from '../components/Nav';
import News from '../components/News';

//types
interface MainProps {
  menuActive: boolean;
  setMenuActive: (menuActive: boolean) => void;
}

const Main: FC<MainProps> = ({ menuActive, setMenuActive }) => {
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
