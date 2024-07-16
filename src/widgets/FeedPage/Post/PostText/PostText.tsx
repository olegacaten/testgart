import React, { useState } from 'react';
import styles from './PostText.module.scss';

interface PostTextProps {
  text: string;
  maxLength: number;
}

const PostText: React.FC<PostTextProps> = ({ text, maxLength }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const truncatedText = text.length > maxLength ? text.slice(0, maxLength) + '...' : text;

  return (
    <div className={styles.postText}>
      <span
        className={`${styles.postText__content} ${!isExpanded && text.length > maxLength ? styles.postText__content__collapsed : ''}`}
      >
        {isExpanded ? text : truncatedText}
      </span>
      {text.length > maxLength && (
        <button className={styles.postText__toggle} onClick={handleToggle}>
          {isExpanded ? 'Свернуть' : 'Читать больше'}
        </button>
      )}
    </div>
  );
};

export default PostText;
