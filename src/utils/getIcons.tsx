import {
  LayoutGrid,
  UsersRound,
  CalendarDays,
  ChartColumnDecreasing,
  MessageSquare,
  Newspaper,
  X,
  LucideProps,
  Search,
} from 'lucide-react'
import {
  type ForwardRefExoticComponent,
  type RefAttributes,
  type ReactElement,
} from 'react'

interface Icons {
  [index: string]: ForwardRefExoticComponent<
    Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>
  >
}

interface Props {
  color?: string
}

const icons: Icons = {
  LayoutGrid,
  UsersRound,
  CalendarDays,
  ChartColumnDecreasing,
  MessageSquare,
  Newspaper,
  X,
<<<<<<< HEAD
  Search,
}

/**
 * Returns SVG icons from lucide-react library based on the icon name.
 *
 * @param iconName
 * @param props
 * @returns ReactElement
 */
export const getIcon = (iconName: string, props?: Props): ReactElement => {
  const SVGComp = icons[iconName]

  return SVGComp && <SVGComp aria-label={iconName} {...props} />
=======
}

export const getIcon = (icon: string, props?: Props): ReactElement => {
  const SVGComp = icons[icon]

  return SVGComp && <SVGComp {...props} />
>>>>>>> 1927a10 (refactor: getIcons is more dynamic, accepting props)
}
