import { Sidebar } from '@/components/_shared/sidebar/Sidebar'
import { Header } from '@/components/_shared/header/Header'
import { Outlet } from 'react-router-dom'
import styles from './DashBoardView.module.css'

export function DashBoardView() {
  return (
    <div className={styles.wrapper}>
      <Sidebar />
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  )
}
