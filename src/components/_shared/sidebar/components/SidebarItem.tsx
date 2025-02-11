import { SidebarItemProps } from '@/types/components/sidebaritem'
import styles from './SidebarItem.module.css'
import { Link } from 'react-router-dom'

export function SidebarItem({
  children,
  href,
  active,
  title,
  isCompact = false,
}: SidebarItemProps) {
  return (
    <Link
      to={href}
      className={
        isCompact ?
          `${styles['sidebarItem-compact']} ${active && styles.isActive}`
        : `${styles.sidebarItem} ${active && styles.isActive}`
      }
    >
      {isCompact && <span className={styles['tooltip']}>{title}</span>}
      {children}
    </Link>
  )
}
