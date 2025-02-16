import { Check, ChevronLeft, ChevronRight } from 'lucide-react'
import styles from './PatientSlider.module.css'
import { useSliderContext } from '../../context/useSliderContext'
import { useEffect, useRef, useState } from 'react'

const sliderSteps: { step: number; title: string }[] = [
  {
    step: 1,
    title: 'Datos Personales',
  },
  {
    step: 2,
    title: 'Datos Generales',
  },
  {
    step: 3,
    title: 'Mediciones',
  },
  {
    step: 4,
    title: 'Plan de alimentación',
  },
  {
    step: 5,
    title: 'Plan Físico',
  },
  {
    step: 6,
    title: 'Análisis',
  },
  {
    step: 7,
    title: 'Entregables',
  },
  {
    step: 8,
    title: 'Agendar Cita',
  },
]

const stepWith = 245

const PatientSlider = () => {
  const { currentStep, setCurrentStep, finishedStep, setIncc, setDecc } =
    useSliderContext()
  const sliderContainerRef = useRef<HTMLDivElement>(null)
  const [visibleSteps, setVisibleSteps] = useState<number>(0)

  const getCurrentStep = (step: number): string => {
    if (currentStep === step) {
      return '-active'
    } else if (finishedStep.includes(step)) {
      return '-finished'
    } else {
      return ''
    }
  }

  const updateVisibleSteps = () => {
    if (sliderContainerRef.current) {
      const containerWith = sliderContainerRef.current.offsetWidth
      setVisibleSteps(Math.floor(containerWith / stepWith))
    }
  }

  useEffect(() => {
    updateVisibleSteps()
    window.addEventListener('resize', updateVisibleSteps)

    return () => window.removeEventListener('resize', updateVisibleSteps)
  }, [])

  const maxTranslateX = (sliderSteps.length - visibleSteps) * stepWith
  const translateX = Math.min((currentStep - 1) * stepWith, maxTranslateX)

  return (
    <div className={styles.slider}>
      <div className={styles.slider_content_wrapper}>
        {currentStep !== 1 && (
          <button type='button' onClick={() => setDecc()}>
            <ChevronLeft />
          </button>
        )}
        <div
          className={styles.slider_wrapper}
          ref={sliderContainerRef}
          style={{
            transform: `translateX(-${translateX}px)`,
            transition: 'transform 0.5s ease-in-out',
          }}
        >
          {sliderSteps.map(({ title, step }) => (
            <div className={styles.slider_content} key={step}>
              <div>
                <span>0{step}</span>
                <span>{title}</span>
              </div>
              <div
                className={styles.slider_container}
                onClick={() => setCurrentStep(step)}
              >
                <div className={styles[`circle${getCurrentStep(step)}`]}>
                  {getCurrentStep(step) === '-finished' && <Check size={20} />}
                </div>
                <div className={styles[`line${getCurrentStep(step)}`]}></div>
              </div>
            </div>
          ))}
        </div>
        {currentStep !== 8 && (
          <button type='button' onClick={() => setIncc()}>
            <ChevronRight />
          </button>
        )}
      </div>
    </div>
  )
}

export default PatientSlider
