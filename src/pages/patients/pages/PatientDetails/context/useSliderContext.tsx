import { useContext } from 'react'
import { SliderContext } from './SliderContext'

export const useSliderContext = () => {
  return useContext(SliderContext)
}
