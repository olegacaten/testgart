import React, { useState, useEffect } from 'react';
import styles from './Carousel.module.scss';
import CloseIcon from '../../../shared/assets/images/Carousel/cross_white.svg';
import Sportec_text_png from '../../../shared/assets/images/SPORTEC_text_carousel.svg';
import Button from '../../shared/Button/Button';
import LeftImage from '../../../shared/assets/images/Carousel/leftimageccarousel.svg';
import RightImage from '../../../shared/assets/images/Carousel/rightimageccarousel.svg';
import RU from '../../../shared/assets/images/Carousel/RU_Curosel.svg';
import KZ from '../../../shared/assets/images/Carousel/KZ_Curosel.svg';
import icon_live from '../../../shared/assets/images/Carousel/Icon_live.svg';

interface CarouselProps {
  text: string[];
  onClose: () => void;
  isMobile: boolean;
}

const Carousel: React.FC<CarouselProps> = ({ text, onClose, isMobile }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleClickWithLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  const handleClose = () => {
    onClose();
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % text.length);
    }, 2000);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentIndex, text.length]);

  return (
    <div className={styles.carouselContainer}>
      <div className={`${styles.carouselImageContainer} ${isMobile ? styles.mobile : ''}`}>
        {!isMobile && (
          <div className={styles.rightImage}>
            <img src={LeftImage} alt="Left Image" />
          </div>
        )}

        {!isMobile && (
          <div className={styles.leftImage}>
            <img src={RightImage} alt="Right Image" />
          </div>
        )}

        <div className={`${styles.eventInfoContainer} ${isMobile ? styles.mobile : ''}`}>
          <div className={styles.eventHeader}>
            <div className={`${styles.eventHeaderCenter} ${isMobile ? styles.mobile : ''}`}>
              <div className={`${styles.eventHeaderCenterImage} ${isMobile ? styles.mobile : ''}`}>
                <img src={icon_live} alt="Live" />
              </div>
              <span className={styles.eventName}>LIVE</span>
            </div>
          </div>

          <div className={styles.matchInfo}>
            <div className={`${styles.team} ${isMobile ? styles.mobile : ''}`}>
              <img src={RU} alt="Матвеев" />
              <span className={styles.personName}>Матвеев</span>
            </div>

            <span className={styles.vs}>vs</span>

            <div className={`${styles.team} ${isMobile ? styles.mobile : ''}`}>
              <span className={styles.personName}>Романов</span>
              <img src={KZ} alt="Романов" />
            </div>
          </div>

          <div className={`${styles.eventTitle} ${isMobile ? styles.mobile : ''}`}>
            <span> Финальный матч - вольная борьба</span>
          </div>
        </div>

        <button className={styles.crossButton} onClick={handleClose}>
          <img src={CloseIcon} alt="Close" />
        </button>
        <div className={`${styles.sportecText} ${isMobile ? styles.mobile : ''}`}>
          <img src={Sportec_text_png} />
        </div>
        <div className={styles.centerButtonContainer}>
          <Button
            color="light"
            text="Смотреть трансляцию"
            onClick={handleClickWithLoading}
            loading={loading}
          />
        </div>
      </div>

      <div className={styles.paginationContainer}>
        {text.map((_, index) => (
          <div
            key={index}
            className={`${styles.paginationDot} ${index === currentIndex ? styles.active : ''}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
