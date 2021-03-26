import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

class Login extends Component {

	constructor(props) {
		super(props);

		this.state = {
			email: '',
			password: ''
		};

		this.update = this.update.bind(this);

		this.displayLogin = this.displayLogin.bind(this);

		this.error = this.error.bind(this);

	}

	update(e) {
		let name = e.target.name;
		let value = e.target.value;
		this.setState({
			[name]: value
		});
	}

	//error toast
	error = (message) => toast.error('❌'+message, {
		position: "top-right",
		autoClose: 5000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
		});


	displayLogin(e) {
		e.preventDefault();
		let {email,password} = this.state;
		console.log("sending reqest",email,password);
		const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ "email":email , "password":password })
		};
		fetch('https://api.logsafe.ml/login',requestOptions)
			.then(response => response.json())
				.then(data => {
					if(data.error==="true"){
						this.error(data.message)
					}else{
						window.location = '/dashboard'
					}
				})
					.catch(console.log("bad conncetion"))
	}
	//localhost:3000/
	

	render() {

		return (
			<div className="login">
				<h1>Logsafe</h1>
				<form onSubmit={this.displayLogin}>
					<h2>Login</h2>
					<div className="username">
						<input
							type="text"
							placeholder="Username..."
							value={this.state.email}
							onChange={this.update}
							name="email"
						/>
					</div>

					<div className="password">
						<input
							type="password"
							placeholder="Password..."
							value={this.state.password}
							onChange={this.update}
							name="password"
						/>
					</div>

					<input type="submit" value="Login" />
					<p>
						don't have account?<Link to="/register">Create an account</Link>
					</p>
				</form>	
				<ToastContainer />
			</div>
		);
	}
}

export default Login;