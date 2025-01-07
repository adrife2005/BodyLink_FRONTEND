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
      <div data-testid='genericModal' className={styles['generic-modal']}>
        <div>
          <h1> {title}</h1>
          <X data-testid='modalCloseButton' onClick={close} />
        </div>
        <div>{children}</div>
      </div>
    </>
  )
}
