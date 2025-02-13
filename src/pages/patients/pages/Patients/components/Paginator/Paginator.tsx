import { ChevronRight, ChevronLeft } from 'lucide-react'
import styles from './Paginator.module.css'

interface Props {
  length?: number
}

export default function Paginator({ length = 4 }: Props) {
  const array = Array.from({ length: length + 1 }, (_, i) => i)
  delete array[0]

  return (
    <div data-testid='paginator' className={styles.paginator}>
      <div>
        <ChevronLeft />
      </div>
      <div>
        {array.map((el, i) => (
          <p key={i}> {el} </p>
        ))}
      </div>
      <div>
        <ChevronRight />
      </div>
    </div>
  )
}
