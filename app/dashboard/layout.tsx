"use client"

import { useState, useEffect, type ReactNode } from "react"
import { AppSidebar } from "@/components/app-sidebar"
import { 
  SidebarProvider,
  SidebarInset, 
  SidebarTrigger
} from "@/components/ui/sidebar"
import { ModeToggle } from "@/components/ui/toggle-mode"

interface DashboardLayoutProps {
  children: ReactNode 
}



export default function DashboardRootLayout({ children }: DashboardLayoutProps) {
  // Usar localStorage para los datos
  const [defaultOpen, setDefaultOpen] = useState(true)

  useEffect(() => {
    // Get sidebar state from cookie after hydration
    const sidebarState = document.cookie
      .split('; ')
      .find(row => row.startsWith('sidebar_state='))
      ?.split('=')[1]
    
    // If cookie exists, use its value, otherwise default to true (expanded)
    if (sidebarState !== undefined) {
      setDefaultOpen(sidebarState === 'true')
    }
  }, [])

  return (
    <SidebarProvider defaultOpen={defaultOpen}>

        <AppSidebar />
        <SidebarInset>
          <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 sticky top-0 z-10 bg-sidebar-background border-b border-border min-w-0">
            <div className="flex items-center gap-2 px-4">
              <SidebarTrigger className="-ml-1" />
            </div>
              <ModeToggle />
          </header>
          <div className="overflow-auto">
            <main className="msm:p-4 p-0 min-w-0">{children}</main>
          </div>
        </SidebarInset>
    </SidebarProvider>
  )
}