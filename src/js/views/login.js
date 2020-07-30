import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import rigoImage from "../../img/rigo-baby.jpg";
import { Link, Redirect } from "react-router-dom";
import "../../styles/home.scss";

const ENDPOINT = "https://3000-d27963dd-a44a-4d1e-a2f8-b3f82d85baad.ws-eu01.gitpod.io";

export const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [loggedIn, setLoggedIn] = useState(false);
	const [is_admin, setIs_admin] = useState(false);
	const [redirectToLogin, setRedirectToLogin] = useState(false);
	const { store, actions } = useContext(Context);
	let access_token = localStorage.getItem("access_token");
	// if (access_token === "") {
	// 	setRedirectToLogin(true);
	// }

	const handleSubmit = e => {
		e.preventDefault();
		sendDetailsToServer(email, password);
	};

	const handleIsLogged = e => {
		e.preventDefault();
		isLogged();
	};

	const sendDetailsToServer = (email, password) => {
		console.log(email, password);
		return fetch(`${ENDPOINT}/login`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"Access-Control-Allow-Origin": "*"
			},
			body: JSON.stringify({
				email: email,
				password: password
			})
		})
			.then(response => response.json())
			.then(responseJson => {
				if (typeof responseJson.access_token != "undefined") {
					let token = responseJson.access_token;
					localStorage.setItem("access_token", token);
					actions.setToken(token); //que espera recibir? un parametro tipo string
					setIs_admin(responseJson.is_admin);
					setLoggedIn(true);
					console.log("Manda token : " + token);
					console.log("Guarda en el local : " + localStorage.access_token);
					console.log("Manda token after /single : " + token);
				} else {
					if (responseJson.email && responseJson.password == null) {
						console.log("'La empresa o contraseña no existen");
					}
				}
			});
		// 	if (!response.ok) throw new Error("Response is not NOT ok");
		// 	return response.json();
		// })
		// .then(responseJson => {
		// 	store.token = responseJson.access_token;
		// 	console.log(store.token);
		// });
	};

	// const isLogged = () => {
	// 	console.log("Hola, soy sessionStorage en IsLogged : ", sessionStorage.token);
	// 	if (sessionStorage.token != null) {
	// 		fetch(`${ENDPOINT}/protected`, {
	// 			method: "GET",
	// 			headers: {
	// 				"Content-Type": "application/json",
	// 				Authorization: "Bearer" + sessionStorage.token
	// 			}
	// 		});
	// 		console.log("Estas logeado--------> : " + sessionStorage.token);
	// 	} else {
	// 		console.log("No estas logeado");
	// 	}
	// };
	if (loggedIn === true && is_admin === true) {
		return <Redirect to="/home" />;
	} else if (loggedIn === true && is_admin === false) {
		return <Redirect to="/single" />;
	}
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
						{/* <button onClick={handleIsLogged} type="submit" className="buttom mb-5 ml-0">
							<strong>IsLogged</strong>
						</button> */}
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
