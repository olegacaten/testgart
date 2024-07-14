import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NavigationButton.module.scss';

interface NavigationButtonProps {
  to: string;
  title: string;
  imgSrc: string;
  isActive: boolean;
  isMobile: boolean;
}

const NavigationButton: React.FC<NavigationButtonProps> = ({
  to,
  title,
  imgSrc,
  isActive,
  isMobile,
}) => {
  return (
    <div className={` ${styles.buttoncontainer} ${isMobile ? styles.mobile : ''}`}>
      <Link
        to={to}
        className={`${styles.iconbutton} ${isActive ? `${styles.active}` : ''} ${isMobile ? styles.mobile : ''}`}
      >
        <div className={styles.icon}>
          <img src={imgSrc} alt="icon" />
        </div>
        {title}
      </Link>
    </div>
  );
};

export default NavigationButton;
