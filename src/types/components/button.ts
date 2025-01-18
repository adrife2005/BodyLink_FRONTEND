import { CSSProperties, MouseEvent } from 'react'

export type ButtonProps = {
  children: React.ReactNode
  customStyle: CSSProperties
  type?: 'button' | 'submit' | 'reset'
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void
  disabled?: boolean
}

export type ButtonStylesProps = {
  gap?: string
  padding: string
  borderRadius?: string
  backgroundColor: string
  fontSize?: string
  color?: string
  outline?: string
}
