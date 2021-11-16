import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";

export const Login_form = () => {
	const { actions, store } = useContext(Context);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	return (
		<div className="container">
			<div className="row">
				<div className="col-5 mx-auto">
					<input
						onChange={e => {
							setEmail(e.target.value);
						}}
						className="form-control"
						type="mail"
						id="email"
						name="email"
						placeholder="email"
					/>
					<input
						onChange={e => {
							setPassword(e.target.value);
						}}
						className="form-control"
						type="password"
						id="password"
						name="password"
						placeholder="password"
					/>

					{store.message != "" ? (
						<div className="alert alert-danger" role="alert">
							{store.message}
						</div>
					) : (
						""
					)}
					<button
						onClick={() => {
							actions.generate_token(email, password);
						}}
						className="btn btn-warning mt-1"
						type="submit">
						Go into Jedi&apos;s World !
					</button>
				</div>
			</div>
		</div>
	);
};
