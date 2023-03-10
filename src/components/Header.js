import React,{ useContext } from 'react';
import { ReactComponent as ToggleIcon } from '../assets/toggle.svg';
import { ReactComponent as SearchIcon } from '../assets/search.svg';
import { ReactComponent as CartIcon } from '../assets/cart.svg';
import { ReactComponent as MoonIcon } from '../assets/moon.svg';
import { ReactComponent as SunIcon } from '../assets/sun.svg';
import { ReactComponent as LogoIcon } from '../assets/logo.svg';
import { ThemeContext } from './store/ThemeContext';


const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const handleThemeChange = () => {
    
    const isCurrentDark = theme === 'dark-mode';
    setTheme(isCurrentDark ? 'light-mode' : 'dark-mode');
  };
  return (
    <header className="site-header">
      <div className="header-container mx-auto">
        <input id="navbar-toggle" className="navbar-toggle" type="checkbox" />
        <label htmlFor="navbar-toggle" className="burger-container">
          <ToggleIcon className="icon-toggle cursor-point" />
        </label>
        <nav className="navbar-menu">
          <ul className="nav-list site-menu-list mr-auto">
            <li className="nav-item">
              <a className="nav-link" >
                男款
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link">
                女款
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link">
                最新消息
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link">
                客製商品
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link">
                聯絡我們
              </a>
            </li>
          </ul>
          <ul className="nav-list site-action-list">
            <li className="nav-item">
              <SearchIcon className="nav-icon cursor-point" />
            </li>
            <li className="nav-item">
              <CartIcon className="nav-icon cursor-point" />
            </li>
            <li id="theme-toggle" className="nav-item" onClick={handleThemeChange}>
              <MoonIcon className="nav-icon cursor-point" />
              <SunIcon className="nav-icon cursor-point d-none" />
            </li>
          </ul>
        </nav>
        <a className="header-logo-container" href="#">
          <LogoIcon className="icon-logo cursor-point" />
        </a>
      </div>
    </header>
  )
};

export default Header;