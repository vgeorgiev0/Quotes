import { Link, useHistory, NavLink } from 'react-router-dom';

import React, { useState, useContext } from 'react';
import Heart from 'react-heart';
import AuthContext from '../../store/auth-context';

import classes from './MainNavigation.module.css';

const MainNavigation = () => {
  const [active, setActive] = useState(false);

  const authCtx = useContext(AuthContext);
  const history = useHistory();

  const isLoggedIn = authCtx.isLoggedIn;

  const logoutHandler = () => {
    authCtx.logout();
    history.replace('/');
  };

  return (
    <header className={classes.header}>
      <Link to='/'>
        <div className={classes.logo}>Quotes</div>
      </Link>
      <div style={{ width: '2rem' }}>
        <Heart isActive={active} onClick={() => setActive(!active)} />
      </div>
      <nav className={classes.nav}>
        <ul>
          {!isLoggedIn && (
            <li>
              <Link to='/auth'>Login</Link>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <NavLink to='/quotes' activeClassName={classes.active}>
                All Quotes
              </NavLink>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <NavLink to='/new-quote' activeClassName={classes.active}>
                Add a Quote
              </NavLink>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
