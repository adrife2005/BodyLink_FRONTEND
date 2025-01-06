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
    <div data-testid='inputSection' className={styles.inputSection}>
      <div>{getIcon(icon)}</div>
      <label htmlFor='customInput'>
        <input id='customInput' {...inputProps} />
      </label>
    </div>
  )
}
