interface SuccessResponseProps<T> {
  data: T
  message: string
  success: boolean
}

interface ErrorResponseProps {
  errorCode: string
  message: string
  success: boolean
}

export type { SuccessResponseProps, ErrorResponseProps }
