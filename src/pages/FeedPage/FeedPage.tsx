import React, { useState } from 'react';
import Carousel from '../../widgets/FeedPage/Carousel/Carousel';
import styles from './FeedPage.module.scss';
import { useMediaQuery, useTheme } from '@mui/material';
import PostFilter from '../../widgets/FeedPage/PostFilter/PostFilter';
import AdContainer from '../../widgets/FeedPage/AdContainer/AdContainer';
import Post from '../../widgets/FeedPage/Post/Post';
import Image1 from './PostFakeData/1.png';
import Image2 from './PostFakeData/2.png';
import Image3 from './PostFakeData/3.png';
import Image4 from './PostFakeData/4.png';
import Image5 from './PostFakeData/5.png';
import Image6 from './PostFakeData/6.png';
import Image7 from './PostFakeData/7.png';
import Image8 from './PostFakeData/8.png';
import Image9 from './PostFakeData/9.png';
const posts = [
  {
    UserName: 'Спортивная Борьба',
    nameDate: '12 марта, 2024 в 16:03',
    title: 'Илья Бессонов дал интервью для телеканала Россия-1',
    text: 'Илья Бессонов дал интервью после большого перерыва, где поделился секретом своего успеха и рассказал о методиках своих тренировок. Спортсмен сделал заявление, что возвращается в спорт иИлья Бессонов дал интервью после большого перерыва, где поделился секретом своего успеха и рассказал о методиках своих тренировок. Спортсмен сделал заявление, что возвращается в спорт и',
    images: [Image1, Image2, Image3, Image4, Image5, Image6],
    views: 123,
    commentsCount: 45,
    comments: [
      {
        name: 'Вадим Давыдов',
        text: 'Наконец-то! Рад, что он вернулся в спорт',
        date: '12 марта, 2024 в 16:03',
        replies: [
          {
            name: 'Jane Smith',
            text: ', согласен! Уже давно ждал интервью!',
            date: '12 марта, 2024 в 16:10',
          },
        ],
      },
      {
        name: 'Alice Johnson',
        text: 'Very informative.',
        date: '12 марта, 2024 в 17:00',
      },
    ],
  },
  {
    UserName: 'Велоспорт',
    nameDate: '2 февраля, 2024 в 23:09',
    title: 'Этапы Тура Альп-2024',
    text: 'Фото с соревнований',
    images: [Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8, Image9],

    views: 200,
    commentsCount: 100,
    comments: [
      {
        name: 'Eve Adams',
        text: 'Awesome match!',
        date: '14 июля, 2024 в 12:05',
      },
      {
        name: 'Michael Brown',
        text: 'The game was intense!',
        date: '14 июля, 2024 в 12:15',
      },
    ],
  },
];

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
        <Carousel isMobile={isMobile} text={['', '', '', '', '']} onClose={handleCloseCarousel} />
      )}

      {!isMobile && (
        <div className={`${styles.containerWrapper} ${styles.desktop}`}>
          <div className={styles.leftSide}>
            {posts.map((post, index) => (
              <Post
                key={index}
                UserName={post.UserName}
                nameDate={post.nameDate}
                title={post.title}
                text={post.text}
                images={post.images}
                views={post.views}
                commentsCount={post.commentsCount}
                comments={post.comments}
              />
            ))}
          </div>
          <div className={styles.rightSide}>
            <PostFilter isMobile={isMobile} />
            <AdContainer isMobile={isMobile} />
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
            <Carousel
              isMobile={isMobile}
              text={['', '', '', '', '']}
              onClose={handleCloseCarousel}
            />
          )}

          {posts.map((post, index) => (
            <Post
              key={index}
              UserName={post.UserName}
              nameDate={post.nameDate}
              title={post.title}
              text={post.text}
              images={post.images}
              views={post.views}
              commentsCount={post.commentsCount}
              comments={post.comments}
            />
          ))}
          <AdContainer isMobile={isMobile} />
          <div className={styles.item}>Settings</div>
          <div className={styles.item}>Settings</div>
        </div>
      )}
    </div>
  );
}

export default FeedPage;
