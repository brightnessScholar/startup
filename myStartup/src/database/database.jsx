import React from 'react'
import './database.css';

export function Database() {

    $(document).ready(function() {
        // Initialize FullCalendar v5
        $('#calendar').fullCalendar({
            // Enable events to be editable
            editable: true,
            
            // Display events and allow users to click on a date to add an event
            events: [
                {
                    title: 'Sample Event',
                    start: '2024-11-10',
                    allDay: true
                }
            ],

            // Allow adding events by clicking on a day
            dateClick: function(info) {
                var title = prompt("Enter Event Title");
                if (title) {
                    $('#calendar').fullCalendar('addEventSource', [{
                        title: title,
                        start: info.dateStr,
                        allDay: true
                    }]);
                }
            },

            // Allow event deletion by clicking on an event
            eventClick: function(info) {
                var deleteEvent = confirm("Do you want to delete this event?");
                if (deleteEvent) {
                    info.event.remove(); // Remove the event from the calendar
                }
            }
        });
    });

    document.addEventListener('DOMContentLoaded', function() {
        var calendarEl = document.getElementById('calendar');

        var calendar = new FullCalendar.Calendar(calendarEl, {
            initialView: 'dayGridMonth', // Default view
            headerToolbar: {
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek,timeGridDay'
            },
            events: [
                // Add your events here
                { title: 'Event 1', start: '2023-10-01' },
                { title: 'Event 2', start: '2023-10-05', end: '2023-10-07' },
            ]
        });

        calendar.render();
    });

return (    
<div>
<head>
    <title>Class Schedule</title>
    <link href='https://cdn.jsdelivr.net/npm/fullcalendar@5.10.1/main.min.css' rel='stylesheet' />
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src='https://cdn.jsdelivr.net/npm/fullcalendar@5.10.1/main.min.js'></script>  

</head>
    <body>

        <div id="calendar"></div>

        <div>
        <h2>My Classes</h2>
        <form id="item-form">
            <input type="text" id="item-input" placeholder="Add a new item" required/>
            <button type="submit">Add</button>
        </form>
        <ul id="item-list"></ul>
        </div>

    </body>
</div>
);
}
