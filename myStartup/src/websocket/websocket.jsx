import React from 'react'
import './websocket';

export function Websocket() {
    
return( 
    <div>
    <body>

        <h1>Submit Feedback Here</h1>
        <div>
        <form id="response-form" action="https://example.com/submit" method="POST">
            <label for="name">Username:</label>
            <input type="text" id="name" name="name" required/>
            <br></br>

            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required/>
            <br></br>

            <label for="message">Message:</label>
            <textarea id="message" name="message" rows="4" required></textarea>
            <br></br>

            <button type="submit">Submit</button>
        </form>
        </div>

    </body>
    </div>
);

}

/*
<nav> 
    <!-- make a basic naviation menu for users of my website to use to access the other elements of my project -->
    <ul>
        <li><a href="application.html">Tasks</a></li>
        <li><a href="database.html">Your Classes</a></li>
        <li style="float:right"><a class="active" href="websocket.html">Help</a></li>
        <li><a href="index.html">Home</a></li>
    </ul>
</nav>
*/