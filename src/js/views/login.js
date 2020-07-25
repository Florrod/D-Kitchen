import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import rigoImage from "../../img/rigo-baby.jpg";
import { Link } from "react-router-dom";
import "../../styles/home.scss";

const ENDPOINT = "https://3000-de8b7bc1-3a99-41d6-ab8c-0534a6d08ed9.ws-eu01.gitpod.io";

export const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const { store, actions } = useContext(Context);

	const handleSubmit = e => {
		e.preventDefault();
		sendDetailsToServer(email, password);
	};

	const sendDetailsToServer = (email, password) => {
		console.log(email, password);
		return fetch(`${ENDPOINT}/login`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				email: email,
				password: password
			})
		})
			.then(response => {
				if (!response.ok) throw new Error("Response is not NOT ok");
				return response.json();
			})
			.then(responseJson => {
				store.token = responseJson.access_token;
				console.log(store.token);
			});
	};

	return (
		<div className="text-center mt-3">
			<p>
				<img
					className="form-img w-5"
					src="https://dkitchenincubator.com/wp-content/uploads/2020/02/Logo-DK-con-texto.png"
				/>
			</p>
			<div className="d-flex justify-content-center align-items-center container">
				<form>
					<div className="form-group">
						<dt>
							<label className="item-login" htmlFor="exampleInputEmail1">
								Correo electrónico
							</label>
						</dt>
						<input
							name="email"
							type="email"
							className="form-control form-fixer mb-1"
							id="exampleInputEmail1"
							aria-describedby="emailHelp"
							placeholder="Escribe tu correo"
							onChange={e => setEmail(e.target.value)}
							value={email}
						/>
						<dt>
							<label className="item-login mt-3" htmlFor="exampleInputPassword1">
								Contraseña
							</label>
						</dt>
						<input
							name="password"
							type="password"
							className="form-control form-fixer mb-2"
							id="exampleInputPassword1"
							placeholder="Escribe tu contraseña"
							onChange={e => setPassword(e.target.value)}
							value={password}
						/>
					</div>
					<Link to="/registerForm">
						<button onClick={handleSubmit} type="submit" className="buttom mb-5 ml-0">
							<strong>Inicia sesión</strong>
						</button>
					</Link>
					<div>
						<Link className="tipoLink mt-3 w-100 text-center" to="/remind-password">
							¿Has olvidado tu contraseña?
						</Link>
					</div>
				</form>
			</div>
		</div>
	);
};
