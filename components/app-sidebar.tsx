"use client"

import * as React from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import {
  Users,
  Calendar,
  Settings,
  FileText,
  Home,
  DollarSign,
  MessageSquare,
  Newspaper,
} from "lucide-react"
import { AvatarLogo } from "@/components/ui/avatar-logo"

import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  useSidebar,
} from "@/components/ui/sidebar"

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname()
  const { isMobile, setOpenMobile } = useSidebar()
  
  const handleLogoClick = () => {
    if (isMobile) {
      setOpenMobile(false)
    }
  }

  // Definir los datos del menú con la ruta actual
  const data = {
    user: {
      name: "Usuario Demo",
      email: "Ejemplo@demo.com",
      avatar: "/avatars/shadcn.jpg",
    },
    navMain: [
      {
        title: "Dashboard",
        url: "/dashboard",
        icon: Home,
        isActive: pathname === "/dashboard",
        items: [],
      },
      {
        title: "Pacientes",
        url: "/dashboard/patients",
        icon: Users,
        isActive: pathname.startsWith("/dashboard/patients"),
        items: [
          {
            title: "Ver Pacientes",
            url: "/dashboard/patients",
            isActive: pathname === "/dashboard/patients",
          },
          {
            title: "Nuevo Paciente",
            url: "/dashboard/patients/new",
            isActive: pathname.startsWith("/dashboard/patients/new"),
          },
        ],
      },
      {
        title: "Citas",
        url: "/dashboard/appointments",
        icon: Calendar,
        isActive: pathname.startsWith("/dashboard/appointments"),
        items: [
          {
            title: "Ver Citas",
            url: "/dashboard/appointments",
            isActive: pathname === "/dashboard/appointments",
          },
          {
            title: "Nueva Cita",
            url: "/dashboard/appointments/new",
            isActive: pathname.startsWith("/dashboard/appointments/new"),
          },
        ],
      },
      {
          title: "Planes Nutricionales",
          url: "/dashboard/nutrition-plans",
          icon: FileText,
          isActive: pathname.startsWith("/dashboard/nutrition-plans"),
          items: [],
        },
        {
          title: "Finanzas",
          url: "/dashboard/finances",
          icon: DollarSign,
          isActive: pathname.startsWith("/dashboard/finances"),
          items: [],
        },
        {
          title: "Mensajes",
          url: "/dashboard/messages",
          icon: MessageSquare,
          isActive: pathname.startsWith("/dashboard/messages"),
          items: [],
        },
        {
          title: "Noticias",
          url: "/dashboard/news",
          icon: Newspaper,
          isActive: pathname.startsWith("/dashboard/news"),
          items: [],
        },
        {
          title: "Configuración",
          url: "/dashboard/settings",
          icon: Settings,
          isActive: pathname.startsWith("/dashboard/settings"),
          items: [],
        },
    ],
  }

  return (
    <Sidebar
      variant="sidebar"
      collapsible="icon"
      style={{
        backgroundColor: "sidebar-background",
        color: "sidebar-foreground",
      }}
      {...props}
    >
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              size="lg"
              asChild
              style={{
                backgroundColor: "sidebar-background",
                color: "sidebar-foreground",
              }}
            >
              <Link href="/dashboard" className="transition-all duration-300 ease-in-out flex items-center px-1 py-2 w-full" onClick={handleLogoClick}>
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg text-sidebar-primary-foreground transition-all duration-300 ease-in-out">
                  <AvatarLogo size="sm" />
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <div className="hidden">
        <NavUser user={data.user} />
        </div>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
