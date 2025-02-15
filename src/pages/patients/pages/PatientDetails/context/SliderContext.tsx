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

const SliderContext = createContext<SliderProps>({
  currentStep: 1,
  setCurrentStep: () => {},
  finishedStep: [],
  setFinishedStep: () => {},
  setDecc: () => {},
  setIncc: () => {},
})

const SliderProvider = ({ children }: { children: ReactNode }) => {
  const [currentStep, setCurrentStep] = useState<number>(1)
  const [finishedStep, setFinishedStep] = useState<number[]>([])

  const setIncc = () => {
    return setCurrentStep(prev => prev + 1)
  }

  const setDecc = () => {
    return setCurrentStep(prev => prev - 1)
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
