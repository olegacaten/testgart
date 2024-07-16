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
import ProfilePic from '../../shared/assets/images/profilepic_1.png';
const posts = [
  {
    PostType: 'Videos',
    UserName: 'Спортивная Борьба',
    nameDate: '12 марта, 2024 в 16:03',
    title: 'Илья Бессонов дал интервью для телеканала Россия-1',
    text: 'Илья Бессонов дал интервью после большого перерыва, где поделился секретом своего успеха и рассказал о методиках своих тренировок. Спортсмен сделал заявление, что возвращается в спорт иИлья Бессонов дал интервью после большого перерыва, где поделился секретом своего успеха и рассказал о методиках своих тренировок. Спортсмен сделал заявление, что возвращается в спорт и',
    images: [Image1, Image2, Image3, Image4, Image5, Image6],
    views: 123,
    commentsCount: 45,
    comments: [
      {
        profilepic: ProfilePic,
        name: 'Вадим Давыдов',
        verification: false,
        text: 'Наконец-то! Рад, что он вернулся в спорт👍',
        date: '15 минут назад',
        replies: [
          {
            profilepic: ProfilePic,
            name: 'Артем Еременко',
            verification: true,
            text: `Вадим, согласен! Уже давно ждал интервью!`,
            date: '30 секунд назад',
          }
        ],
      },
      {
        profilepic: ProfilePic,
        name: 'Константин Романов',
        verification: false,
        text: 'Похоже на шутку. В его возвращении нет ничего плохого, но лучше бои местного маштаба, уверен соперники найдутся, Кудряшов например или Романов, на крайняк Тищенко.',
        date: '30 секунд назад',
      },
      {
        profilepic: ProfilePic,
        name: 'Романов Молодец',
        verification: true,
        text: 'Похоже на шутку. В его возвращении нет ничего плохого, но лучше бои местного маштаба, уверен соперники найдутся, Кудряшов например или Романов, на крайняк Тищенко.',
        date: '30 секунд назад',
      },
      {
        profilepic: ProfilePic,
        name: 'Вадим Давыдов',
        verification: false,
        text: 'Романов Молодец 👍!',
        date: '20 минут назад',
      },
      {
        profilepic: ProfilePic,
        name: 'Константин Романов',
        verification: true,
        text: 'Похоже на шутку. В его возвращении нет ничего плохого, но лучше бои местного маштаба, уверен соперники найдутся, Кудряшов например или Романов, на крайняк Тищенко.',
        date: '30 секунд назад',
      },
      {
        profilepic: ProfilePic,
        name: 'Романов Молодец',
        verification: false,
        text: 'Похоже на шутку. В его возвращении нет ничего плохого, но лучше бои местного маштаба, уверен соперники найдутся, Кудряшов например или Романов, на крайняк Тищенко.',
        date: '30 секунд назад',
      },
      {
        profilepic: ProfilePic,
        name: 'Вадим Давыдов',
        verification: false,
        text: 'Романов Молодец 👍!',
        date: '20 минут назад',
      },
      {
        profilepic: ProfilePic,
        name: 'Константин Романов',
        verification: false,
        text: 'Похоже на шутку. В его возвращении нет ничего плохого, но лучше бои местного маштаба, уверен соперники найдутся, Кудряшов например или Романов, на крайняк Тищенко.',
        date: '30 секунд назад',
      },
      {
        profilepic: ProfilePic,
        name: 'Романов Молодец',
        verification: true,
        text: 'Похоже на шутку. В его возвращении нет ничего плохого, но лучше бои местного маштаба, уверен соперники найдутся, Кудряшов например или Романов, на крайняк Тищенко.',
        date: '30 секунд назад',
      },
     
    ],
  },
  { PostType: 'Result',
    UserName: 'Велоспорт',
    nameDate: '2 февраля, 2024 в 23:09',
    title: 'Этапы Тура Альп-2024',
    text: 'Фото с соревнований',
    images: [Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8, Image9],

    views: 200,
    commentsCount: 100,
    comments: [
      {
        profilepic: ProfilePic,
        name: 'Вадим Давыдов',
        verification: false,
        text: 'Романов Молодец 👍!',
        date: '20 минут назад',
      },
      {
        profilepic: ProfilePic,
        name: 'Вадим Давыдов',
        verification: true,
        text: 'Романов Молодец 👍!',
        date: '20 минут назад',
      },
    ],
  },
];

export function FeedPage() {
  const [isCarouselVisible, setCarouselVisible] = useState(true);
  const [filter, setFilter] = useState<string>('Все');

  const handleFilterChange = (selectedFilter: string): string => {
    setFilter(selectedFilter);
    return `Filter set to: ${selectedFilter}`;
  };
  const filteredPosts = posts.filter(post => {
    if (filter === 'Все') return true;
    if (filter === 'Результаты соревнований') return post.PostType === 'Result';
    if (filter === 'Видео') return post.PostType === 'Videos';
    if (filter === 'Достижения') return post.PostType === 'Achievements';
    return false;
  });

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
            {filteredPosts.map((post, index) => (
              <Post
                key={index}
                PostType={post.UserName}  
                UserName={post.UserName}
                nameDate={post.nameDate}
                title={post.title}
                text={post.text}
                images={post.images}
                views={post.views}
                comments={post.comments}             />
            ))}
          </div>
          <div className={styles.rightSide}>
            <PostFilter isMobile={isMobile} onFilterChange={handleFilterChange}/>
            <AdContainer isMobile={isMobile} />
            <div className={styles.item}>Settings 3</div>
            <div className={styles.item}>Settings 4</div>
          </div>
        </div>
      )}

      {isMobile && (
        <div className={`${styles.containerWrapper} ${styles.mobile}`}>
          <PostFilter isMobile={isMobile} onFilterChange={handleFilterChange}/>
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
             PostType={post.UserName}  
             UserName={post.UserName}
             nameDate={post.nameDate}
             title={post.title}
             text={post.text}
             images={post.images}
             views={post.views}
             comments={post.comments}             />
      
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
