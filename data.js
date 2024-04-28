export var calendarData = [
    {
        name: 'Uklidit ložnici',
        type: 'task',
        timeSlot: {
            day: 3,
            time: {
                hours: 9,
                minutes: 0
            }
        },
        done: true
    },
    {
        name: 'Zavolat doktorovi',
        type: 'task',
        timeSlot: {
            day: 1,
            time: {
                hours: 12,
                minutes: 30
            }
        },
        done: false
    },
    {
        name: 'Zalít kytky',
        type: 'task',
        timeSlot: {
            day: 6,
            time: {
                hours: 11,
                minutes: 30
            }
        },
        done: false
    },
    {
        name: 'Lekce TypeScriptu',
        type: 'event',
        timeSlot: {
            day: 2,
            time: {
                hours: 18,
                minutes: 0
            }
        },
        duration: {
            hours: 2,
            minutes: 0
        }
    },
    {
        name: 'Oběd s kolegou',
        type: 'event',
        timeSlot: {
            day: 4,
            time: {
                hours: 12,
                minutes: 0
            }
        },
        duration: {
            hours: 1,
            minutes: 0
        }
    },
    {
        name: 'Narozeninová oslava',
        type: 'event',
        timeSlot: {
            day: 5,
            time: {
                hours: 20,
                minutes: 0
            }
        },
        duration: {
            hours: 3,
            minutes: 0
        }
    }
];
