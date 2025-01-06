import { ReactNode } from 'react'
import styles from './SectionHeader.module.css'

interface Props {
  icon: ReactNode
  title: string
  description: string
}
export function SectionHeader({ icon, title, description }: Props) {
  return (
    <div data-testid='section-header' className={styles.header}>
      <div className={styles.icon}> {icon} </div>
      <div className={styles.info}>
        <h1 data-testid='section-header-title'>{title}</h1>
        <p data-testid='section-header-description'>{description}</p>
      </div>
    </div>
  )
}
