import { ReactNode } from 'react';
import style from './MainLayout.module.scss';
import { useMediaQuery, useTheme } from '@mui/material';
import React from 'react';

const MainLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));

  return (
    <div className={style.Container}>
      <div className={`${style.Container__layout} ${isMobile ? style.mobile : ''}`}>{children}</div>{' '}
    </div>
  );
};

export default MainLayout;
