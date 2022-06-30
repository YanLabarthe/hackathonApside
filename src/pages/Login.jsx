import { useState } from 'react';
import './Login.css';

function Login() {

const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [isLoggedin, setIsLoggedin] = useState(false);

const login = (e) => {
	e.preventDefault();
	console.log(email, password);

	const userData = {
	email,
	password,
	};

	localStorage.setItem('token-info', JSON.stringify(userData));
	setIsLoggedin(true);
	setName('');
	setEmail('');
	setPassword('');
};

const logout = () => {
	localStorage.removeItem('token-info');
	setIsLoggedin(false);
};

return (
	<>
	<div style={{ textAlign: 'center' }}>
		{!isLoggedin ? (
		<>
			<form action="" className="login">
      <div className="input-container">

			<input
				type="email"
				onChange={(e) => setEmail(e.target.value)}
				value={email}
				placeholder="Email" name="unmail"
        required
			/>
      </div>

      <div className="input-container">
			<input
				type="password"
				onChange={(e) => setPassword(e.target.value)}
				value={password}
				placeholder="Password"
        name="pass"
        required
			/>

      </div>

      <div className="button-container">
			<button type="submit" onClick={login}>
				Login
			</button>
      </div>

			</form>
		</>
		) : (
		<>
    <div className="login">
    <div className="login-form">
      <div className="button-container">
			<button onClickCapture={logout}>
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
