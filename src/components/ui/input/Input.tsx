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
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 3bdae39 (feat: added generic modal and register modal)
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
              <option value=''>{placeholder}</option>
              <option value='male'>Masculino</option>
              <option value='female'>Femenino</option>
            </select>
          )}
        </label>
      </div>
<<<<<<< HEAD
=======
    <div data-testid='inputSection' className={styles['input-section']}>
      <div>{getIcon(icon)}</div>
      <label htmlFor='customInput'>
        <input name='customInput' {...inputProps} />
      </label>
>>>>>>> 156f761 (feat: added register patient button in the patient page)
=======
>>>>>>> 3bdae39 (feat: added generic modal and register modal)
    </div>
  )
}
