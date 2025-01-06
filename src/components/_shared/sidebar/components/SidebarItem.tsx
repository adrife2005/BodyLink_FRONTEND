import styles from './SidebarItem.module.css'
import { Link } from 'react-router-dom'
import { SidebarItemProps } from '../../../../types'

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
