import styles from './AdContainer.module.scss';
import imgTourAlps from '../../../shared/assets/images/AdContainer/imgTourAlps.png';
import { Link } from 'react-router-dom';
import iconSportec from '../../../shared/assets/icons/IconSportec.svg';

const AdContainer: React.FC<{ isMobile: boolean }> = ({ isMobile }) => {
  return (
    <Link to="./AdLinkUrl">
      <div
        className={`${styles.AdContainer} ${isMobile ? '' : ''}`}
        style={{ backgroundImage: `url(${imgTourAlps})` }}
      >
        <div className={styles.AdContainerTextImgWrapper}>
          <div className={styles.AdContainerTextImgWrapperPic}>
            <div className={styles.AdContainerTextImgWrapperPicContainer}>
              <img src={iconSportec} />
            </div>
            <span className={styles.AdContainerTextImgWrapperPicType}>Велоспорт</span>
            <span className={styles.AdContainerTextImgWrapperPicPlaceDate}>
              Москва <span>2024</span>
            </span>
          </div>
          <div className={styles.AdContainerTitle}> Тур Альп-2024 Этап-3</div>
        </div>
      </div>
    </Link>
  );
};

export default AdContainer;
