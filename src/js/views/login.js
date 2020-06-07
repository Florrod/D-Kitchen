import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";

export const Login = () => (
	<div className="text-center mt-5 ">
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
						<label htmlFor="exampleInputEmail1">Correo electrónico</label>
					</dt>
					<input
						type="email"
						className="form-control"
						id="exampleInputEmail1"
						aria-describedby="emailHelp"
						placeholder="Escribe tu usuario"
					/>
					<dt>
						<label htmlFor="exampleInputPassword1">Contraseña</label>
					</dt>
					<input
						type="password"
						className="form-control"
						id="exampleInputPassword1"
						placeholder="Escribe tu contraseña"
					/>
				</div>
				<button type="submit" className="btn btn-primary mb-5">
					Log in
				</button>
				<div>
					<p> ¿Has olvidado tu contraseña?</p>
				</div>
			</form>
		</div>
	</div>
);
