import {
  LayoutGrid,
  UsersRound,
  CalendarDays,
  ChartColumnDecreasing,
  MessageSquare,
  Newspaper,
} from 'lucide-react';

const getIcon = (icon: string) => {
  switch (icon) {
    case 'LayoutGrid':
      return <LayoutGrid />;
    case 'UsersRound':
      return <UsersRound />;
    case 'CalendarDays':
      return <CalendarDays />;
    case 'ChartColumnDecreasing':
      return <ChartColumnDecreasing />;
    case 'MessageSquare':
      return <MessageSquare />;
    case 'Newspaper':
      return <Newspaper />;
    default:
      return null;
  }
};

export default getIcon;
