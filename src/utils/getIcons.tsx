import {
  LayoutGrid,
  UsersRound,
  CalendarDays,
  ChartColumnDecreasing,
  MessageSquare,
  Newspaper,
} from 'lucide-react';
import { type ReactElement } from 'react';

interface Icons {
  [index: string]: ReactElement
}

const icons: Icons = {
  'LayoutGrid': <LayoutGrid />,
  'UsersRound': <UsersRound />,
  'CalendarDays': <CalendarDays />,
  'ChartColumnDecreasing': <ChartColumnDecreasing />,
  'MessageSquare': <MessageSquare />,
  'Newspaper': <Newspaper />,
}

const getIcon = (icon: string): ReactElement => icons[icon];

export default getIcon;
