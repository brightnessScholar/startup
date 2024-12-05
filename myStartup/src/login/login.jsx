import React from 'react'
import './login.css';

export function Login() {
const [userName, setUserName] = React.useState(props.userName);
const [password, setPassword] = React.useState(props.password);
    function loginUser() {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username) {
            // Save username to Local Storage
            localStorage.setItem('username', username);

            // Display the username
            document.getElementById('display-name').textContent = username;
            document.getElementById('username-display').style.display = 'block';

            // Hide the login form
            this.style.display = 'none';
        }
    }

    //logout button options - doesn't work all the way yet!
    document.getElementById('logout-button').addEventListener('click', function() {
    localStorage.removeItem('username');
    // Redirect to login page
    window.location.href = 'authentication.html';
    });

return (    
<html>
    
<head>
    <link rel="stylesheet" href="index.css"/>
</head>
<body>

    <h2>Homework Hub</h2>

    <div class="container">
        <form id="login-form">
            <input className = 'form-control' type="text" value = {userName} onChange = {(e) => setUserName(e.target.value)} id="username" placeholder="Username" required/>
            <input className = 'form-control' type="text" value = {password} onChange = {(e) => setPassword(e.target.value)} id="password" placeholder="Password" required/>
            <Button variant ='primary' onClick = {() => loginUser()}>Login</Button>
            <button id="logout-button">Logout</button>
         </form>
         <div class="username-display" id="username-display">
            <h3><p>Welcome, <span id="display-name"></span>!</p></h3>
        </div>
    </div>
</body>
</html>
)
}