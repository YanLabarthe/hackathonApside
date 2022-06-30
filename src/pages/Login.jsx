import { useState } from 'react';
import './Log.css';

function Login() {

const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [isLoggedin, setIsLoggedin] = useState(false);
const [errorMessages, setErrorMessages] = useState({});
const [isSubmitted, setIsSubmitted] = useState(false);

const database = [
	{
	  username: "user1",
	  password: "pass1"
	},
	{
	  username: "user2",
	  password: "pass2"
	}
  ];
  
const errors = {
	uname: "invalid username",
	pass: "invalid password"
  };

const handleSubmit = (event) => {
	event.preventDefault();
  
var { uname, pass } = document.forms[0];
  
const userData = database.find((user) => user.username === uname.value);
  
	if (userData) {
	  if (userData.password !== pass.value) {
		setErrorMessages({ name: "pass", message: errors.pass });
	  } else {
		setIsSubmitted(true);
	  }
	} else {
	  setErrorMessages({ name: "uname", message: errors.uname });
	}
  };

const renderErrorMessage = (name) =>
  name === errorMessages.name && (
    <div className="error">{errorMessages.message}</div>
  );

const login = (event) => {
	event.preventDefault();
	console.log(email, password);

const userData = {
	email,
	password,
	};

	localStorage.setItem('token-info', JSON.stringify(userData));
	setIsLoggedin(true);
	setEmail('');
	setPassword('');
};

const logout = () => {
	localStorage.removeItem('token-info');
	setIsLoggedin(false);
};

return (
	<>

	<div 
	style={{ textAlign: 'center' }}
	className="log"
	>
		
	{!isLoggedin ? (

		<>
	<form 
	action="" 
	className="log-form"
	onSubmit={handleSubmit}>

	<div className="input-container">
	<input
	type="email"
	onChange={(e) => setEmail(e.target.value)}
	value={email}
	placeholder="Email*" 
	name="uemail"
	required
	/>
	{renderErrorMessage("uname")}
	</div>

	<div className="input-container">
	<input
	type="password"
	onChange={(e) => setPassword(e.target.value)}
	value={password}
	placeholder="Password*"
	name="pass"
	required
	/>
	{renderErrorMessage("pass")}
	</div>
	<p>*Camp obbligatoire</p>

	<div class="buttonin" >
	<button 
	type="submit" 
	onClickCapture={login}>
	Login
	</button>
	</div>

	</form>

	</>
	) : (
	<>

    <div className="log">
    <div className="log-form">
		
	<div class="buttonout">
	<button 
	type="submit" 
	onClickCapture={logout}>
	Logout
	</button>
	</div>

	</div>
	</div>
	  
  	</>
	)}
	</div>
	</>
);
}

export default Login;