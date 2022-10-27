import React, { useState, lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import { Header } from './components/Header';
import Main from './pages/Main';

import './scss/main.scss';

const Search = lazy(() => import(/* webpackChunkName: "Basket" */ './pages/Search'));

function App() {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <main className="main">
      <Header setMenuActive={setMenuActive} />
      <Routes>
        <Route path="/" element={<Main menuActive={menuActive} setMenuActive={setMenuActive} />} />
        <Route
          path="/search"
          element={
            <Suspense fallback={<div>Загрузка...</div>}>
              <Search menuActive={menuActive} setMenuActive={setMenuActive} />
            </Suspense>
          }
        />
      </Routes>
    </main>
  );
}

export default App;
