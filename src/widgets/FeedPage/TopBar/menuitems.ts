import feedIcon from '../../../shared/assets/images/feed-icon.svg';
import marketplaceIcon from '../../../shared/assets/images/shop-icon.svg';
import ratingsIcon from '../../../shared/assets/images/cup-icon.svg';
import competitionsIcon from '../../../shared/assets/images/friends-icon.svg';
import organizationsIcon from '../../../shared/assets/images/org-icon.svg';
import liveIcon from '../../../shared/assets/images/live-Icon.svg';

interface MenuItem {
  id: string;
  text: string;
  to: string;
  imgSrc: string;
}

export const MenuItems: MenuItem[] = [
  { id: 'feed', text: 'Лента', to: '/', imgSrc: feedIcon },
  { id: 'marketplace', text: 'Маркетплейс', to: '/marketplace', imgSrc: marketplaceIcon },
  { id: 'ratings', text: 'Рейтинги', to: '/ratings', imgSrc: ratingsIcon },
  { id: 'competitions', text: 'Соревнования', to: '/competitions', imgSrc: competitionsIcon },
  { id: 'organizations', text: 'Организации', to: '/organizations', imgSrc: organizationsIcon },
  { id: 'Live', text: 'Live', to: '/live', imgSrc: liveIcon },
];
