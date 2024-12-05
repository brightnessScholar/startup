import React from 'react'
import './login.css';
import Button from 'react-bootstrap/Button';

export function Login(props) {
const [userName, setUserName] = React.useState(props.userName);
const [password, setPassword] = React.useState(props.password);
    function loginUser() {
        event.preventDefault();


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

    //logout button options 
    function logOut() { 
    localStorage.removeItem('username');
    localStorage.removeItem('password');
    }

return (    
<body>

    <h2>Homework Hub</h2>

    <div className="container">
        <form id="login-form">
            <input className = 'form-control' type="text" value = {userName} onChange = {(e) => setUserName(e.target.value)} id="username" placeholder="Username" required/>
            <input className = 'form-control' type="text" value = {password} onChange = {(e) => setPassword(e.target.value)} id="password" placeholder="Password" required/>
            <Button variant ='primary' onClick = {() => loginUser()}>Login</Button>
            <Button variant = 'primary' onClick = {() => logOut()}>Logout</Button>
         </form>
         <div className="username-display" id="username-display">
            <h3><p>Welcome, <span id="display-name"></span>!</p></h3>
        </div>
    </div>
</body>
)
}