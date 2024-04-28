import { calendarData } from "./data.js";
var renderGrid = function () {
    var gridElement = document.querySelector('.grid');
    var count = 7 * 24;
    for (var i = 0; i < count; i++) {
        var cell = document.createElement('div');
        cell.classList.add('cell');
        gridElement.appendChild(cell);
    }
};
var renderCalendar = function (calendarItems) {
    calendarItems.forEach(function (item) {
        var day = document.getElementById("day".concat(item.timeSlot.day));
        var startTime = item.timeSlot.time.hours * 60 + item.timeSlot.time.minutes;
        var calendarItem = document.createElement('div');
        calendarItem.classList.add('calendar-item', "item-".concat(item.type));
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
