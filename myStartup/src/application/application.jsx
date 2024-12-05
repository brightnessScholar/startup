import React from 'react'
import './application.css';
import Button from 'react-bootstrap/Button';
export function Application(props) {
    const [inputValue, setInputValue] = React.useState("")

    function Delete() {
        if (document.getElementById('jjj').checked) {
            document.getElementById('jjj').remove(); // Remove the list item when checked
        }
    }

    function Clicking() {
        const taskValue = inputValue;
        if (taskValue) {
            // Create a new list item
            const li = document.createElement('li');
            li.innerHTML = `<input type="checkbox"> ${taskValue}`;
            // Add an event listener to the checkbox
            


            // Append the new task to the task list
            document.getElementById('taskList').appendChild(li);

            // Clear the input
            taskInput.value = '';
                }
        }

       /* function updateClock() {
            const now = new Date();
            const hours = String(now.getHours()).padStart(2, '0');
            const minutes = String(now.getMinutes()).padStart(2, '0');
            const seconds = String(now.getSeconds()).padStart(2, '0');

            const timeString = `${hours}:${minutes}:${seconds}`;
            document.getElementById('clock').textContent = timeString;
        }

        updateClock();

        setInterval(updateClock, 1000);
        */
    
    
return (
    <body>
        <div class="taskList">
            <div class="image">
                <img src="https://i.postimg.cc/05p8hRvx/toDoList.webp" alt="toDoList"/>
            </div>
        
            <div class="right-column">
                <div id="clock" class="clock"></div>
                <script src="script.js"></script>

                <input className = 'form-control' type = 'text' value = {inputValue} onChange = {(e) => setInputValue(e.target.value)}  id="taskInput" placeholder="Add a new task..."/>
                <input type = 'checkbox' id = 'jjj' onChange = {()=> Delete()}/>

                <Button variant onClick={() =>Clicking()} id="addTaskButton">Add Task</Button>

                <ul id="taskList"></ul>

                <script src="script.js"></script>
            </div>
        </div>
    
    </body>
);

}