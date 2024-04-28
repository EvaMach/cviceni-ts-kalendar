interface BaseItem {
  name: string;
  timeSlot: Slot;
}

type DayOfTheWeek = 1 | 2 | 3 | 4 | 5 | 6 | 7;

interface Time {
  hours: number;
  minutes: number;
}

interface Slot {
  day: DayOfTheWeek;
  time: Time;
}

interface EventItem extends BaseItem {
  duration: Time;
  type: 'event';
}

interface TaskItem extends BaseItem {
  done: boolean;
  type: 'task';
}

export type CalendarItem = TaskItem | EventItem;