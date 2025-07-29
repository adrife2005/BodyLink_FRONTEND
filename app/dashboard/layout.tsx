"use client"

import { useState, useEffect, type ReactNode } from "react"
import { AppSidebar } from "@/components/app-sidebar"
import { 
  SidebarProvider,
  SidebarInset, 
  SidebarTrigger
} from "@/components/ui/sidebar"
import { ModeToggle } from "@/components/ui/toggle-mode"
import { Button } from "@/components/ui/button"
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Bell, User, Settings, CreditCard, Keyboard, LifeBuoy, LogOut } from "lucide-react"

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
          <header className="flex h-16 shrink-0 items-center justify-between gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 sticky top-0 z-10 bg-sidebar-background border-b border-border min-w-0">
            <div className="flex items-center gap-2 px-4">
              <SidebarTrigger className="-ml-1" />
            </div>
            <div className="flex items-center gap-2 px-4">
              <ModeToggle />
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Bell className="h-4 w-4" />
                <span className="sr-only">Notificaciones</span>
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/avatars/01.png" alt="@usuario" />
                      <AvatarFallback>U</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">Usuario</p>
                      <p className="text-xs leading-none text-muted-foreground">
                        usuario@ejemplo.com
                      </p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <User className="mr-2 h-4 w-4" />
                    <span>Perfil</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <CreditCard className="mr-2 h-4 w-4" />
                    <span>Facturación</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Configuración</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Keyboard className="mr-2 h-4 w-4" />
                    <span>Atajos</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <LifeBuoy className="mr-2 h-4 w-4" />
                    <span>Soporte</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-destructive focus:text-foreground focus:bg-destructive">
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Cerrar sesión</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </header>
          <div className="overflow-auto">
            <main className="msm:p-12 p-4 min-w-0">{children}</main>
          </div>
        </SidebarInset>
    </SidebarProvider>
  )
}