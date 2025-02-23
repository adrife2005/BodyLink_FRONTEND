interface SuccessResponseProps<T> {
  data: T
  message: string
  success: true
}

interface ErrorResponseProps {
  errorCode: string
  message: string
  success: false
}

interface ServiceResult<T> {
  data?: T | null
  message: string | null
  success: boolean
  errorCode?: string | null
}

export type { SuccessResponseProps, ErrorResponseProps, ServiceResult }
