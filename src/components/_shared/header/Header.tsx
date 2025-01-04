import styles from './Header.module.css';
import { Sun, Bell, ChevronDown, ChevronRight } from 'lucide-react';
import { useLocation } from 'react-router-dom';

export function Header() {
  const location = useLocation();
  const locationName = location.pathname.replace('/', '');
  const formatingLocation = locationName
    .charAt(0)
    .toUpperCase()
    .concat(locationName.slice(1));

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        {/* This will change */}
        Inicio <ChevronRight /> {locationName && `${formatingLocation}`}
      </div>
      <div className={styles.right}>
        <Sun />
        <Bell />
        <button type='button'>
          Dr. Carlos
          <ChevronDown />
        </button>
      </div>
    </div>
  );
}
