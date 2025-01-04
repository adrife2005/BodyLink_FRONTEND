import { SidebarItem } from './components/SidebarItem';
import { useLocation } from 'react-router-dom';

import styles from './Sidebar.module.css';
import items from './SidebarMenuItems.json';
import getIcon from '../../../utils/getIcons';

export function Sidebar() {
  const location = useLocation();
  const isActive = (path: string): boolean => location.pathname === path;

  return (
    <div data-testid='sidebard' className={styles.sidebar}>
      <div className={styles.sidebarWrapper}>
        <div>
          <h1 className={styles.logo}>
            BD <span>Body Link</span>
          </h1>
        </div>
        <div>
          {items.map((item, index) => (
            <SidebarItem
              active={isActive(item.path)}
              key={index}
              href={item.path}
            >
              {getIcon(item.icon)}
              {item.title}
            </SidebarItem>
          ))}
        </div>
      </div>
    </div>
  );
}
