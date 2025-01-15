import styles from './Label.module.css'
import { getIcon } from '@/utils/getIcons'

interface Props {
  text: string
  customStyle?: object
  color?: string
  icon?: string
}

export function Label({ text, customStyle, color = '#fff', icon = '' }: Props) {
  return (
    <>
      <div className={styles.label} style={customStyle}>
        <p> {text} </p>
        {getIcon(icon, { color })}
      </div>
    </>
  )
}
