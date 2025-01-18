import styles from './Input.module.css'
import { getIcon } from '@/utils/getIcons'

interface Props {
  icon: string
  type: string
  label?: string

  property?: string
  width: string
  placeholder?: string
}

export function Input(props: Props) {
  const { icon, width, label, property, type, placeholder } = props

  return (
    <div
      data-testid='inputSection'
      className={styles['input-section']}
      style={{ width }}
    >
      {label && <span>{label}</span>}
      <div className={styles['labeled-input']}>
        <div>{getIcon(icon)}</div>
        <label htmlFor={property}>
          {type !== 'select' && (
            <input name={property} type={type} placeholder={placeholder} />
          )}
          {type === 'select' && (
            <select name={property}>
              <option>{placeholder}</option>
              <option value='male'>Masculino</option>
              <option value='female'>Femenino</option>
            </select>
          )}
        </label>
      </div>
    </div>
  )
}
