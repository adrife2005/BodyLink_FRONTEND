import { CSSProperties } from "react"

export type ButtonProps = {
  children: React.ReactNode
  className: CSSProperties
  type?:  'button' | 'submit' | 'reset'
}