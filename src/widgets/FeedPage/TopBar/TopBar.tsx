import React from 'react';
import { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useMediaQuery, useTheme } from '@mui/material';
import { MenuItems } from './menuitems';

import NavigationButton from '../TopBar/NavigationButton/NavigationButton';
import LangDrop from '../TopBar/LangDrop/LangDrop';
import ArrowDown from '../../../shared/assets/images/Lang/ArrowDown.svg';
import styles from './TopBar.module.scss';
import logo from '../../../shared/assets/images/logo.svg';
import burgerIcon from '../../../shared/assets/images/Burger.svg';
import crossIcon from '../../../shared/assets/images/cross.svg';
import profileIcon from '../../../shared/assets/images/profileIcon.svg';
import Button from '../../shared/Button/Button';
import Notification from '../../../shared/assets/images/notification_ico.svg';

import profilepic from '../../../shared/assets/images/profilepic_1.png';

const name: string = 'Михаил Зубов';

const TopBar: React.FC = () => {
  const { pathname: currentPath } = useLocation();

  const getInitialLoginState = () => {
    const loggedInStatus = localStorage.getItem('isLoggedIn');
    return loggedInStatus === 'true';
  };

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(getInitialLoginState);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));

  useEffect(() => {
    const loggedInStatus = localStorage.getItem('isLoggedIn');
    if (loggedInStatus === 'true') {
      setIsLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('isLoggedIn', isLoggedIn.toString());
  }, [isLoggedIn]);

  const handleMenuToggle = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const handleLogin = () => {
    setIsLoggedIn((prev) => !prev);
  };

  const RenderNavigationMenu = () =>
    MenuItems.map((item) => (
      <NavigationButton
        key={item.id}
        to={item.to}
        title={item.text}
        imgSrc={item.imgSrc}
        isActive={currentPath === item.to}
        isMobile={isMobile}
      />
    ));

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        {isMobile && <div className={styles.spacer}></div>}

        <div className={`${styles.logo} ${isMobile ? styles.mobile : ''}`}>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        {!isMobile ? (
          <>
            <div className={`${styles.MenuItems} ${isLoggedIn ? styles.logedin : ''}`}>
              {RenderNavigationMenu()}
            </div>
            <div className={styles.langDrop}>
              <LangDrop isMobile={isMobile} />
            </div>
          </>
        ) : (
          <>
            <div className={styles.BurgerIcon}>
              <img
                src={isMenuOpen ? crossIcon : burgerIcon}
                alt="Menu"
                className={styles.menuIcon}
                onClick={handleMenuToggle}
              />
            </div>
            {isMenuOpen && (
              <div className={styles.burgerMenu}>
                <div className={styles.burgerMenuFlex}>
                  <div className={styles.NavLang}>
                    {isLoggedIn ? (
                      <Link to="" onClick={handleLogin} className={styles.noUnderline}>
                        <div className={styles.Profile_button}>
                          <div className={styles.PfpName}>
                            <img src={profilepic} alt="Profile" className={styles.profilePic} />
                            <span>{name}</span>
                          </div>
                          <div className={styles.arrow}>
                            <img
                              src={ArrowDown}
                              alt="Arrow"
                              className={`${styles.arrow_icon} ${isMenuOpen ? styles.open : ''}`}
                            />
                          </div>
                        </div>
                      </Link>
                    ) : (
                      ''
                    )}
                    {RenderNavigationMenu()}
                    <LangDrop isMobile={isMobile} />
                  </div>
                  {!isLoggedIn ? (
                    <div className={styles.buttonContainer}>
                      <Button color={'dark'} text="Зарегистрироваться" onClick={handleLogin} />
                      <Button color={'light'} text="Войти" onClick={handleLogin} />
                    </div>
                  ) : (
                    ''
                  )}
                </div>
              </div>
            )}
          </>
        )}

        {!isMobile &&
          (isLoggedIn ? (
            <Link to="" onClick={handleLogin}>
              <div className={styles.profileMenu}>
                <div className={styles.notification}>
                  <img
                    src={Notification}
                    alt="Notifications"
                    className={`${styles.notification_icon} ${isMenuOpen ? styles.open : ''}`}
                  />
                </div>

                <img src={profilepic} alt="Profile" className={styles.profilePic} />
                <div className={styles.arrow}>
                  <img
                    src={ArrowDown}
                    alt="Arrow"
                    className={`${styles.arrow_icon} ${isMenuOpen ? styles.open : ''}`}
                  />
                </div>
              </div>
            </Link>
          ) : (
            <Link to="" onClick={handleLogin}>
              <div className={`${styles.profileIconContainer}`}>
                <img src={profileIcon} alt="Profile" />
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default TopBar;
