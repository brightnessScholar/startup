import React from 'react'
import './application.css';
export function Application() {


    function Clicking() {
        const taskInput = document.getElementById('taskInput');
        const taskValue = taskInput.value.trim();

        if (taskValue) {
            // Create a new list item
            const li = document.createElement('li');
            li.innerHTML = `<input type="checkbox"> ${taskValue}`;

            // Add an event listener to the checkbox
            const checkbox = li.querySelector('input[type="checkbox"]');
            checkbox.addEventListener('change', function() {
                if (this.checked) {
                    li.remove(); // Remove the list item when checked
                }
            });

            // Append the new task to the task list
            document.getElementById('taskList').appendChild(li);

            // Clear the input
            taskInput.value = '';
                }
        };

        function updateClock() {
            const now = new Date();
            const hours = String(now.getHours()).padStart(2, '0');
            const minutes = String(now.getMinutes()).padStart(2, '0');
            const seconds = String(now.getSeconds()).padStart(2, '0');

            const timeString = `${hours}:${minutes}:${seconds}`;
            document.getElementById('clock').textContent = timeString;
        }

        updateClock();

        setInterval(updateClock, 1000);
    
    
return (
    <body>
        <div class="navigationBar">
            <nav> 
                <ul>
                    <li style="float:right"><a class="active" href="application.html">Tasks</a></li>
                    <li><a href="database.html">Your Classes</a></li>
                    <li><a href="websocket.html">Help</a></li>
                    <li><a href="index.html">Home</a></li>
                </ul>
            </nav>
        </div>

        <div class="taskList">
            <div class="image">
                <img src="https://i.postimg.cc/05p8hRvx/toDoList.webp" alt="toDoList"/>
            </div>
        
            <div class="right-column">
                <div id="clock" class="clock"></div>
                <script src="script.js"></script>


                <input type="text" id="taskInput" placeholder="Add a new task..."/>
                <button onClick={Clicking()} id="addTaskButton">Add Task</button>

                <ul id="taskList"></ul>

                <script src="script.js"></script>
            </div>
        </div>
    
    </body>
);

}