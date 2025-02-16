const getSidebarStorage = (): boolean => {
  const getSidebar = localStorage.getItem('sidebar') as 'true' | 'false' | null

  if (!getSidebar) return false

  return getSidebar === 'true' ? true : false
}

const setSidebarStorage = (value: 'true' | 'false') => {
  localStorage.setItem('sidebar', value)
}

export { getSidebarStorage, setSidebarStorage }
