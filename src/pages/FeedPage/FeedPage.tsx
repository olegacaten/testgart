import React, { useState } from 'react';
import Carousel from '../../widgets/FeedPage/Carousel/Carousel';
import styles from './FeedPage.module.scss';
import { useMediaQuery, useTheme } from '@mui/material';
import PostFilter from '../../widgets/FeedPage/PostFilter/PostFilter';
import AdContainer from '../../widgets/FeedPage/AdContainer/AdContainer';
const text: string[] = ['', '', '', '', ''];

export function FeedPage() {
  const [isCarouselVisible, setCarouselVisible] = useState(true);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));

  const handleCloseCarousel = () => {
    setCarouselVisible(false);
  };
  return (
    <div className={styles.feedPage}>
      {isCarouselVisible && !isMobile && (
        <Carousel isMobile={isMobile} text={text} onClose={handleCloseCarousel} />
      )}

      {!isMobile && (
        <div className={`${styles.containerWrapper} ${styles.desktop}`}>
          <div className={styles.leftSide}>
            <div className={styles.item}>Post 1</div>
            <div className={styles.item}>Post 2</div>
            <div className={styles.item}>Post 3</div>
            <div className={styles.item}>Post 4</div>
            <div className={styles.item}>Post 5</div>
            <div className={styles.item}>Post 6</div>
            <div className={styles.item}>Post 7</div>
            <div className={styles.item}>Post 8</div>
            <div className={styles.item}>Post 8</div>
            <div className={styles.item}>Post 8</div>
            <div className={styles.item}>Post 8</div>
            <div className={styles.item}>Post 8</div>
            <div className={styles.item}>Post 8</div>
            <div className={styles.item}>Post 8</div>
            <div className={styles.item}>Post 8</div>
            <div className={styles.item}>Post 8</div>
            <div className={styles.item}>Post 8</div>
            <div className={styles.item}>Post 8</div>
            <div className={styles.item}>Post 8</div>
            <div className={styles.item}>Post 8</div>
            <div className={styles.item}>Post 8</div>
            <div className={styles.item}>Post 8</div>
            <div className={styles.item}>Post 8</div>
            <div className={styles.item}>Post 8</div>
            <div className={styles.item}>Post 8</div>
            <div className={styles.item}>Post 8</div>
          </div>
          <div className={styles.rightSide}>
            <PostFilter isMobile={isMobile} />
            <AdContainer isMobile={isMobile}/>
            <div className={styles.item}>Settings 3</div>
            <div className={styles.item}>Settings 4</div>
            {isCarouselVisible && <div className={styles.item}>Carousel</div>}
          </div>
        </div>
      )}

      {isMobile && (
        <div className={`${styles.containerWrapper} ${styles.mobile}`}>
          <PostFilter isMobile={isMobile} />
          {isCarouselVisible && isMobile && (
            <Carousel isMobile={isMobile} text={text} onClose={handleCloseCarousel} />
          )}

          <div className={styles.item}>Post</div>
          <AdContainer isMobile={isMobile}/>
          <div className={styles.item}>Settings</div>
          <div className={styles.item}>Settings</div>
          <div className={styles.item}>Post</div>
          <div className={styles.item}>Post</div>
          <div className={styles.item}>Post</div>
          <div className={styles.item}>Post 1</div>
          <div className={styles.item}>Post 2</div>
          <div className={styles.item}>Post 3</div>
          <div className={styles.item}>Post 4</div>
          <div className={styles.item}>Post 5</div>
          <div className={styles.item}>Post 6</div>
          <div className={styles.item}>Post 7</div>
          <div className={styles.item}>Post 8</div>
          <div className={styles.item}>Post 8</div>
          <div className={styles.item}>Post 8</div>
          <div className={styles.item}>Post 8</div>
          <div className={styles.item}>Post 8</div>
          <div className={styles.item}>Post 8</div>
          <div className={styles.item}>Post 8</div>
          <div className={styles.item}>Post 8</div>
          <div className={styles.item}>Post 8</div>
          <div className={styles.item}>Post 8</div>
          <div className={styles.item}>Post 8</div>
          <div className={styles.item}>Post 8</div>
          <div className={styles.item}>Post 8</div>
          <div className={styles.item}>Post 8</div>
          <div className={styles.item}>Post 8</div>
          <div className={styles.item}>Post 8</div>
          <div className={styles.item}>Post 8</div>
          <div className={styles.item}>Post 8</div>
          <div className={styles.item}>Post 8</div>
        </div>
      )}
    </div>
  );
}

export default FeedPage;
