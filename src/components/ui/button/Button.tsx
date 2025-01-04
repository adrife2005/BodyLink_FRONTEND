import styles from './Button.module.css';
import { ButtonProps } from '../../../types';

export function Button({ children, className, type }: ButtonProps) {
  return (
    <button type={type} className={styles.button} style={className}>
      {children}
    </button>
  );
}
