import {
  ErrorResponseProps,
  SuccessResponseProps,
} from '@/types/handleResponses'

const handleHttpPostRequest = async <T>(
  endpoint: string,
  options: RequestInit
): Promise<SuccessResponseProps<T> | ErrorResponseProps> => {
  try {
    const response = await fetch(
      `https://bodylink-backend.onrender.com/bodylink-api/v1${endpoint}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: options.body || '{}',
        credentials: options.credentials,
      }
    )

    const json: SuccessResponseProps<T> | ErrorResponseProps =
      await response.json()

    if (!response.ok) {
      const { errorCode, message, success } = json as ErrorResponseProps

      return {
        message: message || 'Unknown error',
        errorCode: errorCode || 'Unknown ErrorCode',
        success: success,
      }
    }

    const { data, message, success } = json as SuccessResponseProps<T>

    return {
      data,
      message,
      success,
    }
  } catch (error) {
    if (error instanceof Error) {
      return {
        message: `Network or server error: ${error.message}`,
        errorCode: 'Unknown ErrorCode',
        success: false,
      }
    } else {
      return {
        message: 'An error occurred',
        errorCode: 'Unknown ErrorCode',
        success: false,
      }
    }
  }
}

export default handleHttpPostRequest
