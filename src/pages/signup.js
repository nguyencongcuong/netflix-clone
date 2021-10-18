import React, { useState } from "react";
import HeaderContainer from "../containers/header";
import { Form } from "../components";
import * as ROUTES from "../constants/routes";
import FooterContainer from "../containers/footer";

export default function Signup() {
	const [firstName, setFirstName] = useState("");
	const [emailAddress, setEmailAddress] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const isInvalid =
		(firstName === "") |
		(emailAddress === "") |
		(error === "");

	const handleSignup = (e) => {
		e.preventDefault();
	};

	return (
		<>
			<HeaderContainer>
				<Form>
					<Form.Title>Sign up</Form.Title>
					{error && <Form.Error></Form.Error>}
					<Form.Base>
						<Form.Input
							type="text"
							placeholder="First name"
							value={firstName}
							onChange={(e) => setFirstName(e.target.value)}
						/>
						<Form.Input
							type="email"
							placeholder="Email Address"
							value={emailAddress}
							onChange={(e) =>
								setEmailAddress(e.target.value)
							}
						/>
						<Form.Input
							type="password"
							placeholder="Password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
						<Form.Submit disabled={isInvalid} type="submit">
							Submit
            </Form.Submit>
            <Form.Text>
							Already signed up? {" "} 
							<Form.Link to={ROUTES.SIGN_IN}>
								Signup in now
							</Form.Link>
						</Form.Text>
						<Form.TextSmall>
							This page is protected by Google reCAPTCHA.
						</Form.TextSmall>
					</Form.Base>
				</Form>
			</HeaderContainer>
			<FooterContainer />
		</>
	);
}
