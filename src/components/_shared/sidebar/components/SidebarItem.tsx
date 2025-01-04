import styles from './SidebarItem.module.css';
import { Link } from 'react-router-dom';

type SidebarItemProps = {
  children: React.ReactNode;
  href: string;
  active: boolean;
};

export function SidebarItem({ children, href, active }: SidebarItemProps) {
  return (
    <Link
      to={href}
      className={`${styles.sidebarItem} ${active && styles.isActive}`}
    >
      {children}
    </Link>
  );
}
