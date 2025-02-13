import { CustomButton } from '@/components/ui/button/CustomButton'
import { btnPrimaryStyles } from '@/components/ui/button/customStyles/buttonStyles'
import { Sun, Bell, ChevronDown } from 'lucide-react'
import styles from './Header.module.css'
import { useState } from 'react'

export function Header() {
  const [usingDarkMode, setUsingDarkMode] = useState(true)
  const isModifying = false

  const toggleDarkMode = () => {
    document.body.className = usingDarkMode ? 'light' : 'dark'
    setUsingDarkMode(!usingDarkMode)
  }

  return (
    <div className={styles.container}>
      <div className={styles.left}>{isModifying && 'Guardado en la nube'}</div>
      <div className={styles.right}>
        <Sun aria-label='toggleDarkMode' onClick={toggleDarkMode} />
        <Bell aria-label='notifications' />
        <CustomButton customStyle={btnPrimaryStyles}>
          Dr. Carlos
          <ChevronDown />
        </CustomButton>
      </div>
    </div>
  )
}
