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
			datatest-id="customButton"
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
