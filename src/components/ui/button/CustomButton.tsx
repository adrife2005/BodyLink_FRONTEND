import styles from './Button.module.css'
import { ButtonProps } from '../../../types'

export function CustomButton({
	children,
	className,
	type,
	onClick,
	disabled,
}: ButtonProps) {
	return (
		<button
			data-testid="customButton"
			type={type}
			className={styles.button}
			style={className}
			onClick={onClick}
			disabled={disabled}
		>
			{children}
		</button>
	)
}
