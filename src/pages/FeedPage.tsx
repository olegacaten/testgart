import React, { useState } from 'react';
import Carousel from '../widgets/FeedPage/Carousel/Carousel';

import { useMediaQuery, useTheme } from '@mui/material';

const text: string[] = ["", "","", "",""];

export function FeedPage() {
  const [isCarouselVisible, setCarouselVisible] = useState(true);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));

  const handleCloseCarousel = () => {
    setCarouselVisible(false);
  };
  return (
    <div>
      {isCarouselVisible && (
        <Carousel isMobile={isMobile} text={text} onClose={handleCloseCarousel} />
      )}
    </div>
  );
}

export default FeedPage;
