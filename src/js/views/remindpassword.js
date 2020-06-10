import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import { Link } from "react-router-dom";
import "../../styles/home.scss";

export const RemindPassword = () => (
	<div className="text-center mt-5 ">
		<p>
			<img
				className="form-img w-5"
				src="https://dkitchenincubator.com/wp-content/uploads/2020/02/Logo-DK-con-texto.png"
			/>
		</p>
		<div className="container">
			<h1>¿Has olvidado tu contraseña?</h1>
			<p>Si es así, por favor, contacta con D-Kitchen para cambiar tu contraseña y poder acceder a tu perfil</p>
			<p>
				<span className="fas fa-mobile-alt mr-3" />
				Llama a (+34) 644 94 06 29
			</p>
			<p>
				<span className="far fa-envelope mr-3" />
				Escribe a info@dkitchenincubator.com
			</p>
			<Link className="mt-3 w-100 text-center" to="/">
				Volver
			</Link>
		</div>
	</div>
);
