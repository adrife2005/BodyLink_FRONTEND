import { SidebarItemProps } from '@/types/components/sidebaritem'
import styles from './SidebarItem.module.css'
import { Link } from 'react-router-dom'

export function SidebarItem({ children, href, active }: SidebarItemProps) {
  return (
    <Link
      to={href}
      className={`${styles.sidebarItem} ${active && styles.isActive}`}
    >
      {children}
    </Link>
  )
}
