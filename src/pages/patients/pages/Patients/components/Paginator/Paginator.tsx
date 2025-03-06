import { ChevronRight, ChevronLeft } from 'lucide-react'
import styles from './Paginator.module.css'

interface Props {
  length: number
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>
  currentPage: number
}

export default function Paginator({
  length,
  setCurrentPage,
  currentPage,
}: Props) {
  const array = Array.from({ length: length + 1 }, (_, i) => i)
  delete array[0]

  const goToPage = (page: number) => {
    if (page < 1 || page > length) return
    setCurrentPage(page)
  }

  return (
    <div data-testid='paginator' className={styles.paginator}>
      <div onClick={() => goToPage(currentPage - 1)}>
        <ChevronLeft />
      </div>
      <div>
        {array.map((el, i) => (
          <p className={el === currentPage ? styles.active : ''} key={i}>
            {' '}
            {el}{' '}
          </p>
        ))}
      </div>
      <div onClick={() => goToPage(currentPage + 1)}>
        <ChevronRight />
      </div>
    </div>
  )
}
