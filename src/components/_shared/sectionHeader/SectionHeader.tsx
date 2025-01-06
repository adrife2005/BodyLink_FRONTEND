import { ReactNode } from 'react'
import styles from './SectionHeader.module.css'

interface Props {
  icon: ReactNode
  title: string
  description: string
}
export function SectionHeader({ icon, title, description }: Props) {
  return (
    <div className={styles.header}>
      <div className={styles.icon}> {icon} </div>
      <div className={styles.info}>
        <h1> {title} </h1>
        <p> {description} </p>
      </div>
    </div>
  )
}
