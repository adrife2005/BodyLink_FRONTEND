const getPagePerView = (): number => {
  const page = localStorage.getItem('pagePerView')

  if (!page) return 5

  return Number(page)
}

const setPagePerView = (value: string) => {
  localStorage.setItem('pagePerView', value)
}

export { getPagePerView, setPagePerView }
