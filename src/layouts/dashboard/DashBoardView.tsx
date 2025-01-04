import { Outlet } from 'react-router-dom';
import { Sidebar, Header } from '../../components';
import styles from './DashBoardView.module.css';

export function DashBoardView() {
  return (
    <div className={styles.wrapper}>
      <Sidebar />
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
}
