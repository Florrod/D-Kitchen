import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import { Link } from "react-router-dom";
import "../../styles/home.scss";

export const Login = () => (
	<div className="text-center mt-5 ">
		<h1> Inicia sesión</h1>
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
						type="email"
						className="form-control mb-2"
						id="exampleInputEmail1"
						aria-describedby="emailHelp"
						placeholder="Escribe tu usuario"
					/>
					<dt>
						<label className="item-login" htmlFor="exampleInputPassword1">
							Contraseña
						</label>
					</dt>
					<input
						type="password"
						className="form-control mb-2"
						id="exampleInputPassword1"
						placeholder="Escribe tu contraseña"
					/>
				</div>
				<button type="submit" className="btn btn-succes mb-5">
					<strong>Log in</strong>
				</button>
				<div>
					<Link className="mt-3 w-100 text-center" to="/remind-password">
						¿Has olvidado tu contraseña?
					</Link>
				</div>
			</form>
		</div>
	</div>
);
