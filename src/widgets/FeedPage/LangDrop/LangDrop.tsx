import { useState, useEffect, useRef } from 'react';
import ArrowDown from '../../../shared/assets/images/Lang/ArrowDown.svg';
import RU from '../../../shared/assets/images/Lang/RU.svg';
import FR from '../../../shared/assets/images/Lang/FR.svg';
import UK from '../../../shared/assets/images/Lang/UK.svg';
import styles from './LangDrop.module.scss';

interface LangItem {
  text: string;
  imgSrc: string;
}

const LangItems: LangItem[] = [
  { text: 'RU', imgSrc: RU },
  { text: 'FR', imgSrc: FR },
  { text: 'UK', imgSrc: UK },
];

const getInitialLang = (): LangItem => {
  const storedLang = localStorage.getItem('selectedLang');
  if (storedLang) {
    return JSON.parse(storedLang);
  }
  return LangItems.find((item) => item.text === 'RU')!;
};

const LangDrop: React.FC<{ isMobile: boolean }> = ({ isMobile }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState<LangItem>(getInitialLang);

  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    localStorage.setItem('selectedLang', JSON.stringify(selectedLang));
  }, [selectedLang]);

  const handleClick = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleLangChange = (lang: LangItem) => {
    setSelectedLang(lang);
    setMenuOpen(false);
  };

  return (
    <div className={`${styles.container} ${isMobile ? styles.mobile : ''}`}>
      <button
        ref={buttonRef}
        onClick={handleClick}
        className={`${styles.iconButton} ${isMobile ? styles.mobile : ''}`}
      >
        <div className={styles.iconContent}>
          <img src={selectedLang.imgSrc} alt={selectedLang.text} className={styles.languageIcon} />
          <span className={styles.languageText}>{selectedLang.text}</span>
        </div>
        <img
          src={ArrowDown}
          alt="Arrow"
          className={`${styles.arrow} ${isMenuOpen ? styles.open : ''}`}
        />
      </button>
      {isMenuOpen && (
        <div ref={menuRef} className={`${styles.menu} ${isMobile ? styles.mobile : ''}`}>
          {LangItems.map((item) => (
            <div
              key={item.text}
              onClick={() => handleLangChange(item)}
              className={`${styles.menuItem} ${item.text === selectedLang.text ? styles.selected : ''} ${isMobile ? styles.mobile : ''}`}
            >
              <img src={item.imgSrc} alt={item.text} className={styles.menuItemIcon} />
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LangDrop;
