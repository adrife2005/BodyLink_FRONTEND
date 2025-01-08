import styles from './Button.module.css'
import { ButtonProps } from '@/types/components/button'

export function CustomButton({
  children,
  className,
  type,
  onClick,
  disabled,
}: ButtonProps) {
  return (
    <button
      data-testid='customButton'
      type={type}
      className={styles.button}
      style={className}
      onClick={e => onClick && onClick(e)}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
