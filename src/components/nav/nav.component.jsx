import React from 'react';
import {Link} from 'react-router-dom';

import './nav.style.scss';

const Nav = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          {' '}
          <Link to='/shop'>Shop</Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
