import React, { useState, useRef } from 'react';
import { AddressSuggestions } from 'react-dadata';

import 'react-dadata/dist/react-dadata.css';
//images
import { ReactComponent as LoopWhite } from '../assets/img/loop-white.svg';

export const SearchForm = () => {
  return (
    <div className="search">
      <div className="search__title">Поиск адресов</div>
      <div className="search__info">Введите интересующий вас адрес</div>
      <form className="search__form" action="">
        <AddressSuggestions
          token="2788a34c7b313cfc87b32c860232bd54d680d732"
          minChars={3}
          inputProps={{ placeholder: 'Введите интересующий вас адрес' }}
          suggestionClassName="search__li"
        />

        <button className="search__button">
          <LoopWhite className="search__svg" />
          <span className="search__span">Найти</span>
        </button>
      </form>
    </div>
  );
};
