import { NavLink } from 'react-router-dom';

import React, { useState } from 'react';
import Heart from 'react-heart';

import classes from './MainNavigation.module.css';

const MainNavigation = () => {
  const [active, setActive] = useState(false);

  return (
    <header className={classes.header}>
      <div className={classes.logo}>Quotes</div>
      <div style={{ width: '2rem' }}>
        <Heart isActive={active} onClick={() => setActive(!active)} />
      </div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to='/quotes' activeClassName={classes.active}>
              All Quotes
            </NavLink>
          </li>
          <li>
            <NavLink to='/new-quote' activeClassName={classes.active}>
              Add a Quote
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
