import styles from './Button.module.css'
import { ButtonProps } from '@/types/components/button'

export function CustomButton({
  children,
  customStyle,
  type,
  onClick,
  disabled,
}: ButtonProps) {
  return (
    <button
      data-testid='customButton'
      type={type}
      className={styles.button}
      style={customStyle}
      onClick={e => onClick && onClick(e)}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
