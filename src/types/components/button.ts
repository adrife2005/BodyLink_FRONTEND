import { CSSProperties } from 'react'

export type ButtonProps = {
	children: React.ReactNode
	className: CSSProperties
	type?: 'button' | 'submit' | 'reset'
	onClick?: () => void
	disabled?: boolean
}

export type ButtonStylesProps = {
	gap?: string
	padding: string
	borderRadius?: string
	backgroundColor: string
	fontSize?: string
	color?: string
}
