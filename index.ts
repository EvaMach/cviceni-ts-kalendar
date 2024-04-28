import { calendarData } from "./data.js";
import { CalendarItem } from "./model.js";

const renderGrid = (): void => {
  const gridElement = document.querySelector('.grid')!;
  const count = 7 * 24;
  for (let i = 0; i < count; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    gridElement.appendChild(cell);
  }
};


const renderCalendar = (calendarItems: CalendarItem[]): void => {
  calendarItems.forEach((item) => {
    const day = document.getElementById(`day${item.timeSlot.day}`) as HTMLDivElement;
    const startTime = item.timeSlot.time.hours * 60 + item.timeSlot.time.minutes;
    const calendarItem = document.createElement('div');
    calendarItem.classList.add('calendar-item', `item-${item.type}`);
    calendarItem.style.marginTop = String(startTime) + 'px';
    calendarItem.innerText = item.name;
    if (item.type === 'event') {
      calendarItem.style.height = String(item.duration.hours * 60 + item.duration.minutes) + 'px';
    }
    else {
      calendarItem.style.height = 'auto';
      calendarItem.classList.toggle('task-done', item.done);
    }
    day.appendChild(calendarItem);
  });
};

renderGrid();
renderCalendar(calendarData);
