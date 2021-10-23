import React, { useState } from "react";
import {useHistory} from "react-router-dom";
import {HeaderContainer} from "../containers/header";
import { Form } from "../components";
import {FooterContainer} from "../containers/footer";
import * as ROUTES from "../constants/routes";

// Firebase Auth
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


export default function Signup() {
	const history = useHistory()
	
	const [firstName, setFirstName] = useState("");
	const [emailAddress, setEmailAddress] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const isInvalid = (firstName === "") | (emailAddress === "") | (password === "");

	const handleSignup = (e) => {
		e.preventDefault();
		
		// Firebase Auth
		const auth = getAuth();
		createUserWithEmailAndPassword(auth, emailAddress, password)
			.then((userCredential) => {
				// Signed in
				const user = userCredential.user;
				return user
				// ...
				// user.updateProfile({
				// 	displayName: firstName,
				// 	photoURL: Math.floor(Math.random() * 5) + 1
				// })
				
				// Reset form

			})
			.then((user) => {
				history.push(ROUTES.BROWSE)
			})
			.catch((error) => {
				setEmailAddress('');
				setPassword('');
				const errorCode = error.code;
				const errorMessage = error.message;
				// ..
				console.log(errorCode)
				console.log(errorMessage)
			});
	};

	return (
		<>
			<HeaderContainer>
				<Form>
					<Form.Title>Sign up</Form.Title>
					{error && <Form.Error>Error </Form.Error>}
					<Form.Base onSubmit={handleSignup}>
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
