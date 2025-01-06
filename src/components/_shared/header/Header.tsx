import { CustomButton } from '@/components/ui/button/CustomButton'
import { btnPrimaryStyles } from '@/components/ui/button/customStyles/buttonStyles'
import { Sun, Bell, ChevronDown, ChevronRight } from 'lucide-react'
import styles from './Header.module.css'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'

export function Header() {
  const location = useLocation()
  const [usingDarkMode, setUsingDarkMode] = useState(true)
  const locationName = location.pathname.replace('/', '')
  const formatingLocation = locationName
    .charAt(0)
    .toUpperCase()
    .concat(locationName.slice(1))

  const toggleDarkMode = () => {
    document.body.className = usingDarkMode ? 'light' : 'dark'
    setUsingDarkMode(!usingDarkMode)
  }

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        {/* This will change */}
        Inicio <ChevronRight /> {locationName && `${formatingLocation}`}
      </div>
      <div className={styles.right}>
        <Sun onClick={toggleDarkMode} />
        <Bell />
        <CustomButton className={btnPrimaryStyles}>
          Dr. Carlos
          <ChevronDown />
        </CustomButton>
      </div>
    </div>
  )
}
