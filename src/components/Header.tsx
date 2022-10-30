/* eslint-disable jsx-a11y/alt-text */
import React, { FC } from 'react';
import { Link } from 'react-router-dom';

//images
import { ReactComponent as Person } from '../assets/img/person.svg';
import logo from '../assets/img/logo.png';

interface SetMenuActive {
  setMenuActive: (prev: any) => void;
}

export const Header: FC<SetMenuActive> = ({ setMenuActive }) => {
  return (
    <header className="header">
      <Link to={'/panel'}>
        <img className="header__logo" src={logo} />
      </Link>
      <div className="header__burger" onClick={() => setMenuActive((prev: any) => !prev)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          fill="aqua"
          viewBox="0 0 24.75 24.75">
          <path
            d="M0,3.875c0-1.104,0.896-2,2-2h20.75c1.104,0,2,0.896,2,2s-0.896,2-2,2H2C0.896,5.875,0,4.979,0,3.875z M22.75,10.375H2
		c-1.104,0-2,0.896-2,2c0,1.104,0.896,2,2,2h20.75c1.104,0,2-0.896,2-2C24.75,11.271,23.855,10.375,22.75,10.375z M22.75,18.875H2
		c-1.104,0-2,0.896-2,2s0.896,2,2,2h20.75c1.104,0,2-0.896,2-2S23.855,18.875,22.75,18.875z"
          />
        </svg>
      </div>
      <div className="header__login">
        <Person className="header__svg" />
        <span className="header__firstname">Имя</span>
        <span className="header__lastname">Фамилия</span>
      </div>
    </header>
  );
};
