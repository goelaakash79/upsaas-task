import React, { useState } from "react";
import { Link } from "react-router-dom";
import { loginService } from "../utils/services";
import Alert from "./Alert";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const [alertVisible, setAlertVisible] = useState(false);
	const [message, setMessage] = useState("");

	const handleSubmit = async e => {
		e.preventDefault();
		setIsLoading(true);
		try {
			const data = { email, password };
			const res = await loginService(data);
			if (res.message === "success") {
				setEmail("");
				setPassword("");
				setMessage("User logged in successfully");
				setAlertVisible(true);
				setTimeout(() => {
					window.location.assign("/");
				}, 1000);
			} else {
				setMessage(res.message);
				setAlertVisible(true);
			}
			setIsLoading(false);
		} catch (err) {
			setMessage(err.message);
			setAlertVisible(true);
			setIsLoading(false);
		}
	};

	return (
		<section className="body-font relative">
			<div className="flex flex-col justify-center items-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4 container px-10 md:px-0 mx-auto h-screen">
				<Alert message={message} visible={alertVisible} />
				<form
					className="w-full bg-white pt-6 pb-8 mb-4"
					onSubmit={handleSubmit}
				>
					<div className="mb-4">
						<label
							className="block text-color-700 text-sm font-bold mb-2"
							htmlFor="email"
						>
							Email
						</label>
						<input
							className="shadow appearance-none border rounded w-full py-2 px-3 text-color-700 leading-tight focus:outline-none focus:shadow-outline"
							id="email"
							value={email}
							type="email"
							onChange={e => setEmail(e.target.value)}
							placeholder="Email"
						/>
					</div>
					<div className="mb-6">
						<label
							className="block text-color-700 text-sm font-bold mb-2"
							htmlFor="password"
						>
							Password
						</label>
						<input
							className="shadow appearance-none border rounded w-full py-2 px-3 text-color-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
							id="password"
							value={password}
							onChange={e => setPassword(e.target.value)}
							type="password"
							placeholder="********"
						/>
					</div>
					<div className="flex items-center justify-between">
						<button
							className="bg-color-700 hover:bg-color-400 transition-all duration-200 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
							type="submit"
							disabled={isLoading ? true : false}
						>
							Login
						</button>
						<Link
							className="inline-block align-baseline font-medium text-sm text-color-600 hover:text-color-700"
							to="/register"
						>
							Register here
						</Link>
					</div>
				</form>
			</div>
		</section>
	);
};

export default Login;
