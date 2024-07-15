import React, { useCallback, useEffect, useRef, useState } from 'react';
import styles from './PostFilter.module.scss';

import iconAll from '../../../shared/assets/images/PostFilter/iconAll.svg';
import Arrow from '../../../shared/assets/images/Lang/ArrowDown.svg';
import iconResults from '../../../shared/assets/images/PostFilter/iconResults.svg';
import iconVideos from '../../../shared/assets/images/PostFilter/iconVideos.svg';
import iconAchievements from '../../../shared/assets/images/PostFilter/iconAchievements.svg';

const PostFilter: React.FC<{ isMobile: boolean }> = ({ isMobile }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const [isFixed, setIsFixed] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

  const handleButtonClick = (index: number) => {
    setActiveIndex(index);
  };

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const filterOptions = [
    { label: 'Все', image: iconAll },
    { label: 'Результаты соревнований', image: iconResults },
    { label: 'Видео', image: iconVideos },
    { label: 'Достижения', image: iconAchievements },
  ];

  const handleScroll = useCallback(() => {
    if (ref.current) {
      const offsetTop = ref.current.offsetTop;
      const scrollTop = window.scrollY;
      const tolerance = 5;

      if (scrollTop > offsetTop - tolerance && !isFixed) {
        setIsFixed(true);
      }

      if (scrollTop <= 0 && isFixed) {
        setIsFixed(false);
      }
    }
  }, [isFixed]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <div
      ref={ref}
      className={`${styles.postFilter} ${isMobile ? styles.mobile : ''} ${isFixed && isMobile ? styles.fixed : ''}`}
    >
      <div
        className={`${styles.header} ${isMobile ? styles.headerMobile : ''}`}
        onClick={isMobile ? toggleOptions : undefined}
      >
        <span className={styles.title}>Фильтр ленты</span>
        {isMobile && (
          <span
            className={`${styles.arrow} ${isMobile ? styles.arrowShow : ''} ${showOptions ? styles.arrowRotated : ''}`}
          >
            <img src={Arrow} alt="^" />
          </span>
        )}
      </div>

      <div className={`${styles.filterOptions} ${isMobile && !showOptions ? styles.hidden : ''}`}>
        {filterOptions.map((option, index) => (
          <button
            key={index}
            className={`${styles.button} ${index === activeIndex ? styles.active : ''}`}
            onClick={() => handleButtonClick(index)}
          >
            <div className={styles.icontextwrapper}>
              <img src={option.image} alt={option.label} className={styles.icon} />
              {option.label}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default PostFilter;
