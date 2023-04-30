/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useRef, useState } from "react";
import "./LoginStyle.css";

const Login = () => {
	const [rightPanelActive, setRightPanelActive] = useState(false);
	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (containerRef.current) {
			if (rightPanelActive) {
				containerRef.current.classList.add("right-panel-active");
			} else {
				containerRef.current.classList.remove("right-panel-active");
			}
		}
	}, [rightPanelActive]);

	const handleRegisterClick = () => {
		setRightPanelActive(true);
	};

	const handleLoginClick = () => {
		setRightPanelActive(false);
	};
	return (
		<div className="container" id="container" ref={containerRef}>
			<div className="form-container register-container">
				<form action="#">
					<h1>Register</h1>
					<input type="text" placeholder="Name" />
					<input type="email" placeholder="Email" />
					<input type="password" placeholder="Password" />
					<button>Register</button>
				</form>
			</div>
			<div className="form-container login-container">
				<form action="#">
					<h1>Login</h1>
					<input type="email" placeholder="Email" />
					<input type="password" placeholder="Password" />
					<div className="content">
						<div className="checkbox">
							<input type="checkbox" name="checkbox" id="checkbox" />
							<label>Remember me</label>
						</div>
						<div className="pass-link">
							<a href="PasswordReset">Forgot password?</a>
						</div>
					</div>
					<button>Login</button>
				</form>
			</div>

			<div className="overlay-container">
				<div className="overlay">
					<div className="overlay-panel overlay-left">
						<h1 className="title">Hello friends</h1>
						<p>If you already have an account, login here!</p>
						<button className="ghost" id="login" onClick={handleLoginClick}>
							Login
							<i className="lni lni-arrow-left login"></i>
						</button>
					</div>
					<div className="overlay-panel overlay-right">
						<h1 className="title">Start your journey now</h1>
						<p>
							If you don't have an account yet, join us and start your
							journey.{" "}
						</p>
						<button
							className="ghost"
							id="register"
							onClick={handleRegisterClick}
						>
							Register
							<i className="lni lni-arrow-right register"></i>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
