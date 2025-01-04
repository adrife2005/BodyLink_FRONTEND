import styles from './SidebarItems.module.css';
import { Link } from 'react-router-dom';

type SidebarItemsProps = {
  children: React.ReactNode;
  href: string;
  active?: boolean;
};

export function SidebarItems({ children, href, active }: SidebarItemsProps) {
  return (
    <Link
      to={href}
      className={active ? styles.sidebarItemsActive : styles.sidebarItems}
    >
      {children}
    </Link>
  );
}
