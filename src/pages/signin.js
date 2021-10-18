import React, { useState } from "react";
import { Form } from "../components";
import HeaderContainer from "../containers/header";
import * as ROUTES from "../constants/routes";
import FooterContainer from "../containers/footer";

export default function Signin() {
	const [error, setError] = useState(false);
	const [emailAddress, setEmailAddress] = useState("");
	const [password, setPassword] = useState("");

	const isInvalid =
		(password === "") | (emailAddress === "");

	const handleSignin = (event) => {
		event.preventDefault();

		// call firebaes
	};

	return (
		<>
			<HeaderContainer>
				<Form>
					<Form.Title>Sign in</Form.Title>
					{error && <Form.Error></Form.Error>}

					<Form.Base onSubmit={handleSignin}>
						<Form.Input
							placeholder="Email address"
							value={emailAddress}
							onChange={({ target }) =>
								setEmailAddress(target.value)
							}
						/>
						<Form.Input
							type="password"
							value={password}
							placeholder="Passowrd"
							onChange={({ target }) =>
								setPassword(target.value)
							}
						/>
						<Form.Submit disabled={isInvalid} type="submit">
							Sign In
						</Form.Submit>

						<Form.Text>
							New to Netflix {" "}
							<Form.Link to={ROUTES.SIGN_UP}>
								Signup now
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
