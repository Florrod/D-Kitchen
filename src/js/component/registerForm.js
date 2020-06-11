import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/registerForm.scss";

export const RegisterForm = () => {
	const { store, actions } = useContext(Context);

	return (
		<div>
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-12 col-md-8 col-lg-8 col-xl-6">
						<div className="row">
							<div className="col text-center title">
								<h1 className="titleForm">Formulario de Registro</h1>
							</div>
						</div>
						<div className="row align-items-center mt-4">
							<div className="col">
								<input type="password" className="form-control" placeholder="CIF o NIF" />
							</div>
							<div className="col">
								<input type="password" className="form-control" placeholder="Nombre de la empresa" />
							</div>
						</div>
						<div className="row align-items-center mt-4">
							<div className="col">
								<input type="email" className="form-control" placeholder="Email" />
							</div>
						</div>
						<div className="row align-items-center mt-4">
							<div className="col">
								<input type="text" className="form-control" placeholder="Company Name" />
							</div>
						</div>
						<div className="row align-items-center mt-4">
							<div className="col">
								<input type="text" className="form-control" placeholder="Postal Address" />
							</div>
						</div>
						<div className="row align-items-center mt-4">
							<div className="col">
								<input type="password" className="form-control" placeholder="Contraseña" />
							</div>
							<div className="col">
								<input type="password" className="form-control" placeholder="Confirma contraseña" />
							</div>
						</div>
						<div className="row justify-content-start mt-4">
							<div className="col">
								<button className="btn-lg buttonSubmit">Submit</button>
							</div>
							<Link to="/">
								<span className="btn btn-primary btn-lg" href="#" role="button">
									Back home
								</span>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
