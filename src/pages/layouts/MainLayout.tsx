import { ReactNode } from 'react';
import style from './MainLayout.module.scss';
import React from 'react';

const MainLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className={style.Container}>
      <div className={style.Container__layout}>{children}</div>{' '}
    </div>
  );
};

export default MainLayout;
