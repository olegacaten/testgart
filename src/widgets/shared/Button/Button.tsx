import React from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
  color: 'dark' | 'light';
  onClick?: () => void;
  text?: string;
  icon?: React.ReactNode;
  disabled?: boolean;
  loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  color,
  onClick,
  text,
  icon,
  disabled = false,
  loading = false,
}) => {
  const buttonClass = `${styles.button} ${styles[color]} ${loading ? styles.loading : ''} ${disabled ? styles.disabled : ''}`;

  return (
    <button
      className={buttonClass}
      onClick={disabled || loading ? undefined : onClick}
      disabled={disabled || loading}
    >
      {loading && <div className={styles.spinner}></div>}
      {icon && <span className={styles.icon}>{icon}</span>}

      {text && <span className={styles.text}>{text}</span>}
    </button>
  );
};

export default Button;
