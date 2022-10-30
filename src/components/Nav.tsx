import React, { FC, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

//images
import { ReactComponent as Home } from '../assets/img/home.svg';
import { ReactComponent as Loop } from '../assets/img/loop.svg';
import { ReactComponent as Table } from '../assets/img/table.svg';
import { ReactComponent as Calendar } from '../assets/img/calendar.svg';
import { ReactComponent as Marker } from '../assets/img/marker.svg';
import { ReactComponent as Vidget } from '../assets/img/vidget.svg';
import { ReactComponent as Settings } from '../assets/img/settings.svg';
import { ReactComponent as User } from '../assets/img/user.svg';
import { ReactComponent as Finance } from '../assets/img/finance.svg';
import { ReactComponent as Exit } from '../assets/img/exit.svg';

//types
interface NavProps {
  menuActive: boolean;
  setMenuActive: (menuActive: boolean) => void;
}

const Nav: FC<NavProps> = ({ menuActive, setMenuActive }) => {
  const url = window.location.href;
  const showSettings = () => {
    const menu = document.querySelector('.nav__item.ul');
    menu?.classList.toggle('active');
  };

  return (
    <nav className={menuActive ? 'nav active' : 'nav'} onClick={(e) => e.stopPropagation()}>
      <div onClick={() => setMenuActive(false)} className="menu__close">
        <svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M6.22566 4.81096C5.83514 4.42044 5.20197 4.42044 4.81145 4.81096C4.42092 5.20148 4.42092 5.83465 4.81145 6.22517L10.5862 11.9999L4.81151 17.7746C4.42098 18.1651 4.42098 18.7983 4.81151 19.1888C5.20203 19.5793 5.8352 19.5793 6.22572 19.1888L12.0004 13.4141L17.7751 19.1888C18.1656 19.5793 18.7988 19.5793 19.1893 19.1888C19.5798 18.7983 19.5798 18.1651 19.1893 17.7746L13.4146 11.9999L19.1893 6.22517C19.5799 5.83465 19.5799 5.20148 19.1893 4.81096C18.7988 4.42044 18.1657 4.42044 17.7751 4.81096L12.0004 10.5857L6.22566 4.81096Z"
            fill="white"
          />
        </svg>
      </div>
      <ul className="nav__items">
        <li className="nav__item title">Меню</li>
        <Link to={`/panel`}>
          <li
            className={
              url === 'https://roman3333.github.io/panel' ? 'nav__item actives' : 'nav__item'
            }>
            <Home /> Главная
          </li>
        </Link>
        <Link to={`/search`}>
          <li
            className={
              url === 'https://roman3333.github.io/search' ? 'nav__item actives' : 'nav__item'
            }>
            <Loop /> Поиск адресов
          </li>
        </Link>
        <li className="nav__item">
          <Table /> Таблицы
        </li>
        <li className="nav__item">
          <Calendar /> Календарь
        </li>
        <li className="nav__item">
          <Marker /> Карты
        </li>
        <li className="nav__item">
          <Vidget /> Виджеты
        </li>
        <li className="nav__item ul active" onClick={showSettings}>
          <Settings /> Настройки
          <ul className="nav__item-ul" onClick={(e) => e.stopPropagation()}>
            <li className="nav__item-li">
              <User /> Настройки профиля
            </li>
            <li className="nav__item-li">
              <Finance /> Управление финансами
            </li>
          </ul>
        </li>
        <li className="nav__item">
          <Exit /> Выход
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
