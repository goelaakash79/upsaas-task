import React, { lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Container = lazy(() => import("./components/Container.js"));
const Register = lazy(() => import("./components/Register.js"));
const Login = lazy(() => import("./components/Login.js"));

function App() {
	return (
		<React.Suspense
			fallback={
				<div className="flex justify-center items-center h-screen">
					<div className="loader ease-linear rounded-full border-8 border-t-8 border-color-400 h-12 w-12"></div>
				</div>
			}
		>
			<Router>
				<Switch>
					<Route exact path="/" component={Container} />
					<Route exact path="/register" component={Register} />
					<Route exact path="/login" component={Login} />
				</Switch>
				{/* <Redirect to={isLoggedIn ? "/" : "/login"} /> */}
			</Router>
		</React.Suspense>
	);
}

export default App;
