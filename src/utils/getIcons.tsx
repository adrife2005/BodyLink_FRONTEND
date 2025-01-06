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
  Search,
}

export const getIcon = (icon: string, props?: Props): ReactElement => {
  const SVGComp = icons[icon]

  return SVGComp && <SVGComp {...props} />
}
