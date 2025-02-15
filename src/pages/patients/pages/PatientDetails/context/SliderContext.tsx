import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from 'react'

interface SliderProps {
  currentStep: number
  setCurrentStep: Dispatch<SetStateAction<number>>
  finishedStep: number[]
  setFinishedStep: Dispatch<SetStateAction<number[]>>
  setIncc: () => void
  setDecc: () => void
}

const SliderContext = createContext<SliderProps | null>(null)

const SliderProvider = ({ children }: { children: ReactNode }) => {
  const [currentStep, setCurrentStep] = useState<number>(1)
  const [finishedStep, setFinishedStep] = useState<number[]>([])

  const setIncc = () => {
    setCurrentStep(prev => Math.min(prev + 1, 8))
  }

  const setDecc = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1))
  }

  return (
    <SliderContext.Provider
      value={{
        currentStep,
        finishedStep,
        setCurrentStep,
        setFinishedStep,
        setDecc,
        setIncc,
      }}
    >
      {children}
    </SliderContext.Provider>
  )
}

export { SliderContext, SliderProvider }
