import React, { useRef } from 'react';
import { useWindowResize, useThrottledFn } from 'beautiful-react-hooks';
import { Link } from 'react-router-dom';
import styles from './navbar.module.sass';
import logoImg from './burritoart_black_logo.png';

const Navbar = ({ setTopPadding, activeMenuItem }) => {
  const navRef = useRef(null);

  useWindowResize(useThrottledFn(() => {
    if (navRef && navRef.current && navRef.current.offsetHeight) {
      setTopPadding(navRef.current.offsetHeight + 32);
    }
  }));

  return (
    <nav ref={navRef} id={styles.primaryNav} className="navbar is-transparent is-fixed-top" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link className="navbar-item" to="/">
          <img src={logoImg} alt="BurritoArt Logo" />
        </Link>
      </div>
      <div className="navbar-menu">
        <div className="navbar-start">
          <Link className={`${activeMenuItem.toLowerCase().indexOf('/about') === 0 ? 'is-active ' : ''}navbar-item`} to="/about">
            About
          </Link>
          <Link className={`${activeMenuItem.toLowerCase().indexOf('/store') === 0 ? 'is-active ' : ''}navbar-item`} to="/store">
            Store
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;