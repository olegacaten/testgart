import React, { useState } from 'react';
import Carousel from '../widgets/FeedPage/Carousel/Carousel';
import carousel_img1 from '../shared/assets/images/carousel1.png';

import { useMediaQuery, useTheme } from '@mui/material';

const CarouselImages: string[] = [carousel_img1, carousel_img1, carousel_img1];

export function FeedPage() {
  const [isCarouselVisible, setCarouselVisible] = useState(true);


  
const theme = useTheme();
const isMobile = useMediaQuery(theme.breakpoints.down('lg'));

  const handleCloseCarousel = () => {
    setCarouselVisible(false);
  };
  return (
    <div>
      {isCarouselVisible && !isMobile && <Carousel images={CarouselImages} onClose={handleCloseCarousel} />}
    </div>
  );
}

export default FeedPage;
