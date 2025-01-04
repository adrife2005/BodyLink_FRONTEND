import styles from './Sidebar.module.css';
import { SidebarItems } from './components/SidebarItems';
import items from './SidebarMenuItems.json';
import getIcon from '../../../utils/getIcons';
import { useLocation } from 'react-router-dom';

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
            <SidebarItems
              active={isActive(item.path)}
              key={index}
              href={item.path}
            >
              {getIcon(item.icon)}
              {item.key}
            </SidebarItems>
          ))}
        </div>
      </div>
    </div>
  );
}
