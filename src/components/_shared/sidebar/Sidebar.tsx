import { SidebarItem } from './components/SidebarItem'
import { useLocation } from 'react-router-dom'

import styles from './Sidebar.module.css'
import items from './SidebarMenuItems.json'
import { getIcon } from '@/utils/getIcons'
import { PanelLeftOpen, PanelRightOpen } from 'lucide-react'
import { useState } from 'react'
import {
  getSidebarStorage,
  setSidebarStorage,
} from '@/localStorage/sidebar.storage'

export function Sidebar() {
  const location = useLocation()
  const isActive = (path: string): boolean => location.pathname === path
  const [sidebarCompact, setSidebarCompact] =
    useState<boolean>(getSidebarStorage())

  const handleCloseSidebarCompact = () => {
    setSidebarCompact(false)
    setSidebarStorage('false')
  }

  const handleOpenSidebarCompact = () => {
    setSidebarCompact(true)
    setSidebarStorage('true')
  }

  return (
    <>
      {sidebarCompact ?
        <div data-testid='sidebard' className={styles['sidebar-compact']}>
          <div className={styles.sidebarContent}>
            <h1 className={styles['logo-compact']}>
              BD
              <PanelLeftOpen
                className={styles['toggle-compact']}
                onClick={handleCloseSidebarCompact}
              />
            </h1>
            <div>
              {items.map((item, index) => (
                <SidebarItem
                  isCompact={true}
                  active={isActive(item.path)}
                  key={index}
                  href={item.path}
                  title={item.title}
                >
                  {getIcon(item.icon)}
                </SidebarItem>
              ))}
            </div>
          </div>
        </div>
      : <div data-testid='sidebard' className={styles.sidebar}>
          <div className={styles.sidebarContent}>
            <h1 className={styles.logo}>
              BD <span>Body Link</span>
              <PanelRightOpen
                className={styles.toggle}
                onClick={handleOpenSidebarCompact}
              />
            </h1>
            <div>
              {items.map((item, index) => (
                <SidebarItem
                  active={isActive(item.path)}
                  key={index}
                  href={item.path}
                >
                  {getIcon(item.icon)}
                  {item.title}
                </SidebarItem>
              ))}
            </div>
          </div>
        </div>
      }
    </>
  )
}
