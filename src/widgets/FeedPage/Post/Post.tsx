import styles from './Post.module.scss';
import PostText from './PostText/PostText';
import CommentAmountIcon from '../../../shared/assets/icons/Post/CommentAmountIcon.svg';
import ViewsAMountIcon from '../../../shared/assets/icons/Post/ViewsAMountIcon.svg';
import { useMediaQuery, useTheme } from '@mui/material';
import Button from '../../shared/Button/Button';
interface PostProps {
  UserName: string;
  nameDate: string;
  title: string;
  text: string;
  images: string[];
  views: number;
  comments: {
    profilepic: string;
    name: string;
    text: string;
    date: string;
    replies?: { profilepic: string; name: string; text: string; date: string }[];
  }[];
}

const Post: React.FC<PostProps> = ({
  UserName,
  nameDate,
  title,
  text,
  images,
  views,
  comments,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));
  const totalCommentCount =
    comments?.reduce((acc, comment) => {
      return acc + 1 + (comment.replies?.length || 0);
    }, 0) || 0;

  return (
    <div className={styles.post}>
      <div className={styles.post__nameDate}>
        <span style={{ marginRight: '4px' }}>{UserName}</span>
        <span style={{ fontSize: '9px' }}>&#9679;</span>
        <span style={{ marginLeft: '4px' }}>{nameDate}</span>
      </div>

      <p className={styles.post__title}>{title}</p>
      <PostText text={text} maxLength={185} />
      <div className={`${styles.post__imagesContainer} ${isMobile ? styles.mobile : ''}`}>
        {images.map((image, index) => (
          <div
            key={index}
            className={`${styles.post__imageWrapper} ${isMobile ? styles.mobileImageWrapper : ''} ${index === 8 && images.length >= 9 ? styles.blackened : ''}`}
            style={{
              width:
                images.length >= 6 && images.length <= 9
                  ? isMobile
                    ? 'calc(100% / 3 - 8px)'
                    : '235px'
                  : 'auto',
              height: isMobile ? '92px' : '200px',
            }}
          >
            <img src={image} alt={`image-${index}`} />
          </div>
        ))}
      </div>

      <div className={styles.post__viewsComments}>
        <div className={styles.post__viewsComments__views}>
          <span className={styles.post__icon}>
            <img src={ViewsAMountIcon} alt="Views:" />
          </span>
          <span>{views}</span>
        </div>
        <div className={styles.post__viewsComments__comments}>
          <span className={styles.post__icon}>
            <img src={CommentAmountIcon} alt="Comment:" />
          </span>
          <span>{totalCommentCount}</span>
        </div>
      </div>

      <div className={styles.post__commentsSection}>
        <div className={styles.post__commentsSection__line}></div>

        {comments.map((comment, index) => (
          <div key={index} className={styles.post__commentsSection__comment}>
            <div className={styles.post__commentsSection__comment__header}>
              <div className={styles.post__profilepic}>
                <img src={comment.profilepic} alt="" />
              </div>
              <div className={styles.post__commentsSection__comment__right}>
                <span className={styles.post__commentsSection__comment__name}>{comment.name}</span>
                <p className={styles.post__commentsSection__comment__text}>{comment.text}</p>
                <div className={styles.post__commentsSection__comment__date}>
                  {comment.date}
                  <span className={styles.post__commentsSection__comment__replyText}>Ответить</span>
                </div>
              </div>
            </div>
            {comment.replies &&
              comment.replies.map((reply, replyIndex) => (
                <div key={replyIndex} className={styles.post__commentsSection__comment__reply}>
                  <div className={styles.post__commentsSection__comment__header}>
                    <div className={styles.post__icon}>
                      <img src={reply.profilepic} alt="" />
                    </div>
                    <div className={styles.post__commentsSection__comment__right}>
                      <span className={styles.post__commentsSection__comment__name}>
                        {reply.name}
                      </span>
                      <p className={styles.post__commentsSection__comment__text}>{reply.text}</p>
                      <div className={styles.post__commentsSection__comment__date}>
                        {reply.date}
                        <span className={styles.post__commentsSection__comment__replyText}>
                          Ответить
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            <div className={styles.post__commentsSection__line}></div>
          </div>
        ))}
      </div>

      {comments.length > 3 && <Button color="light" text="Смотреть все комментарии" />}
    </div>
  );
};

export default Post;
