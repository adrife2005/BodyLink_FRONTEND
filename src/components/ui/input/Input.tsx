import styles from './Input.module.css'
import { getIcon } from '@/utils/getIcons'

interface Props {
  icon: string
  type: string
  placeholder?: string
}

export function Input(props: Props) {
  const { icon, ...inputProps } = props

  return (
    <div className={styles.searchBar}>
      <div>{getIcon(icon)}</div>
      <input {...inputProps} />
    </div>
  )
}
