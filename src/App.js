import React from "react";
import {
	BrowserRouter as Router,
	Switch,
} from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "./pages/Home";
import * as ROUTES from "./constants/routes";

export default function App() {
	return (
		<Router>
			<Switch>
				<Route exact path={ROUTES.HOME}>
					<Home />
				</Route>
				<Route path={ROUTES.SIGN_IN}>
					<p>I will be the sign in page</p>
				</Route>
				<Route path={ROUTES.SIGN_UP}>
					<p>I will be the sign up page</p>
				</Route>
				<Route path={ROUTES.BROWSE}>
					<div className="" style={{ color: "white" }}>
						browser
					</div>
				</Route>
			</Switch>
		</Router>
	);
}