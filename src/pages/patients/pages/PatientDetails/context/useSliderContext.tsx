import { useContext } from 'react'
import { SliderContext } from './SliderContext'

export const useSliderContext = () => {
  const context = useContext(SliderContext)

  if (!context) {
    throw new Error('useSliderContext must be used within a SliderProvider')
  }

  return context
}
