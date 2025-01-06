import styles from './Label.module.css'
import { getIcon } from '@/utils/getIcons'

interface Props {
  text: string
  color?: string
  icon?: string
}

export function Label({ text, color = '#fff', icon = '' }: Props) {
  return (
    <>
      <div className={styles.label}>
        <p> {text} </p>
        {getIcon(icon, color)}
      </div>
    </>
  )
}
