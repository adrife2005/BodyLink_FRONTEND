import { ReactNode } from 'react'
import styles from './GenericModal.module.css'
import { X } from 'lucide-react'

interface Props {
  title: string
  children: ReactNode
  blur: boolean
  close: () => void
}

export default function GenericModal({ title, children, blur, close }: Props) {
  return (
    <>
      {blur && <div className={styles.blur}></div>}
<<<<<<< HEAD
<<<<<<< HEAD
      <div data-testid='genericModal' className={styles['generic-modal']}>
        <div>
          <h1> {title}</h1>
          <X data-testid='modalCloseButton' onClick={close} />
=======
      <div className={styles['generic-modal']}>
        <div>
          <h1> {title}</h1>
          <X onClick={close} />
>>>>>>> 3bdae39 (feat: added generic modal and register modal)
=======
      <div data-testid='genericModal' className={styles['generic-modal']}>
        <div>
          <h1> {title}</h1>
          <X data-testid='modalCloseButton' onClick={close} />
>>>>>>> 0921ba3 (feat: added register modal tests)
        </div>
        <div>{children}</div>
      </div>
    </>
  )
}
