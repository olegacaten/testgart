import React, { useState, useEffect } from 'react';
import styles from './Carousel.module.scss';
import CloseIcon from '../../../shared/assets/images/cross.svg';
import Button from '../../shared/Button/Button';

interface CarouselProps {
  images: string[];
  onClose: () => void;
}

const Carousel: React.FC<CarouselProps> = ({ images, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);


  const handleClose = () => {
    onClose();
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentIndex, images.length]);

  return (
    <div className={styles.carouselContainer}>
      <img
        className={styles.carouselImage}
        src={images[currentIndex]}
        alt={`Carousel image ${currentIndex}`}
      />

      <button className={styles.crossButton} onClick={handleClose}>
        <img src={CloseIcon} alt="Close" />
      </button>

      <div className={styles.centerButtonContainer}>
        <Button color="light" text="Смотреть трансляцию" />
      </div>

      <div className={styles.paginationContainer}>
        {images.map((_, index) => (
          <div
            key={index}
            className={`${styles.paginationDot} ${index === currentIndex ? styles.activeDot : ''}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
