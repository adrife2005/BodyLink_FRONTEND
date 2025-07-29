"use client"

import * as React from "react"
import { type LucideIcon } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronRight } from "lucide-react"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  useSidebar,
} from "@/components/ui/sidebar"

export function NavMain({
  items,
}: {
  items: {
    title: string
    url: string
    icon: LucideIcon
    isActive?: boolean
    items?: {
      title: string
      url: string
      isActive?: boolean
    }[]
  }[]
}) {
  const { isMobile, setOpenMobile, state } = useSidebar()
  const isCollapsed = state === "collapsed"
  const pathname = usePathname()
  const [openPopovers, setOpenPopovers] = React.useState<Record<string, boolean>>({})
  
  // Cerrar todos los popovers cuando cambia la ruta
  React.useEffect(() => {
    setOpenPopovers({})
  }, [pathname])
  
  const handleLinkClick = () => {
    if (isMobile) {
      setOpenMobile(false)
    }
    // Cerrar todos los popovers al hacer clic en un enlace
    setOpenPopovers({})
  }
  
  const handlePopoverOpenChange = (itemTitle: string, open: boolean) => {
    setOpenPopovers(prev => ({
      ...prev,
      [itemTitle]: open
    }))
  }
  
  return (
    <SidebarMenu>
      {items.map((item) => {
        // Si el item tiene subitems, renderizar como collapsible o popover según el estado
        if (item.items && item.items.length > 0) {
          // Si está colapsado, usar popover
          if (isCollapsed) {
            return (
              <SidebarMenuItem key={item.title}>
                <Popover 
                  open={openPopovers[item.title] || false}
                  onOpenChange={(open) => handlePopoverOpenChange(item.title, open)}
                >
                  <PopoverTrigger asChild>
                    <div
                      onMouseEnter={() => handlePopoverOpenChange(item.title, true)}
                      onMouseLeave={(e) => {
                        // Solo cerrar si el mouse no se mueve hacia el popover
                        const rect = e.currentTarget.getBoundingClientRect()
                        const isMovingTowardsPopover = e.clientX > rect.right
                        if (!isMovingTowardsPopover) {
                          setTimeout(() => {
                            if (!openPopovers[item.title]) return
                            handlePopoverOpenChange(item.title, false)
                          }, 100)
                        }
                      }}
                    >
                      <SidebarMenuButton
                        isActive={item.isActive}
                        className="
                          text-sidebar-foreground
                          hover:bg-sidebar-accent
                          hover:text-sidebar-accent-foreground
                          data-[active=true]:bg-sidebar-primary
                          data-[active=true]:text-sidebar-primary-foreground
                          transition-all duration-300 ease-in-out
                          group-data-[collapsible=icon]:!p-2
                        "
                      >
                        <item.icon className="transition-all duration-300 ease-in-out group-data-[collapsible=icon]:ml-[3px]" />
                        <span className="transition-all duration-300 ease-in-out group-data-[collapsible=icon]:opacity-0 group-data-[collapsible=icon]:overflow-hidden">{item.title}</span>
                      </SidebarMenuButton>
                    </div>
                  </PopoverTrigger>
                  <PopoverContent 
                    side="right" 
                    align="start" 
                    className="w-48 p-2 border-border"
                    sideOffset={8}
                    onMouseEnter={() => handlePopoverOpenChange(item.title, true)}
                    onMouseLeave={() => {
                      setTimeout(() => {
                        handlePopoverOpenChange(item.title, false)
                      }, 100)
                    }}
                  >
                    <div className="space-y-1">
                      {item.items.map((subItem) => (
                        <Link
                          key={subItem.title}
                          href={subItem.url}
                          onClick={handleLinkClick}
                          className={`
                            block px-2 py-1.5 text-sm rounded-md transition-colors
                            hover:bg-accent hover:text-accent-foreground
                            ${subItem.isActive ? 'bg-primary text-primary-foreground' : 'text-foreground'}
                          `}
                        >
                          {subItem.title}
                        </Link>
                      ))}
                    </div>
                  </PopoverContent>
                </Popover>
              </SidebarMenuItem>
            )
          }
          
          // Si está expandido, usar collapsible normal
          return (
            <Collapsible
              key={item.title}
              defaultOpen
              className="group/collapsible"
            >
              <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton
                    tooltip={item.title}
                    isActive={item.isActive}
                    className="
                      text-sidebar-foreground
                      hover:bg-sidebar-accent
                      hover:text-sidebar-accent-foreground
                      data-[state=open]:bg-sidebar-accent
                      data-[state=open]:text-sidebar-accent-foreground
                      data-[active=true]:bg-sidebar-primary
                      data-[active=true]:text-sidebar-primary-foreground
                      transition-all duration-300 ease-in-out
                      group-data-[collapsible=icon]:!p-2
                    "
                  >
                    <item.icon className="transition-all duration-300 ease-in-out group-data-[collapsible=icon]:ml-[3px]" />
                    <span className="transition-all duration-300 ease-in-out group-data-[collapsible=icon]:opacity-0 group-data-[collapsible=icon]:overflow-hidden">{item.title}</span>
                    <ChevronRight className="ml-auto transition-all duration-300 ease-in-out group-data-[state=open]/collapsible:rotate-90 group-data-[collapsible=icon]:opacity-0 group-data-[collapsible=icon]:overflow-hidden" />
                  </SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <SidebarMenuSub>
                    {item.items.map((subItem) => (
                      <SidebarMenuSubItem key={subItem.title}>
                        <SidebarMenuSubButton
                          asChild
                          isActive={subItem.isActive}
                        >
                          <Link href={subItem.url} onClick={handleLinkClick}>
                            <span>{subItem.title}</span>
                          </Link>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                </CollapsibleContent>
              </SidebarMenuItem>
            </Collapsible>
          )
        }
        
        // Si no tiene subitems, renderizar como item normal
        return (
          <SidebarMenuItem key={item.title}>
            <SidebarMenuButton
              asChild
              tooltip={item.title}
              isActive={item.isActive}
              className="
                transition-all duration-300 ease-in-out
                group-data-[collapsible=icon]:!p-2
              "
            >
              <Link href={item.url} onClick={handleLinkClick}>
                <item.icon className="transition-all duration-300 ease-in-out group-data-[collapsible=icon]:ml-[3px]" />
                <span className="transition-all duration-300 ease-in-out group-data-[collapsible=icon]:opacity-0 group-data-[collapsible=icon]:overflow-hidden">{item.title}</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        )
      })}
    </SidebarMenu>
  )
}
