import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { UploadProfile } from "./uploadProfile";
import "../../styles/registerForm.scss";
import "../../styles/home.scss";

export const RegisterForm = () => {
	const { store, actions } = useContext(Context);

	return (
		<form>
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-12 col-md-8 col-lg-8 col-xl-6">
						<div className="row">
							<div className="col text-center title">
								<h1 className="titleForm">Formulario de Registro</h1>
							</div>
						</div>
						<UploadProfile />
						<div className="row align-items-center mt-4">
							<div className="col">
								<input
									type="text"
									className="form-control form-fixer form-fixer"
									placeholder="CIF o NIF"
								/>
							</div>
							<div className="col">
								<input
									type="text"
									className="form-control form-fixer"
									placeholder="Nombre de la empresa"
								/>
							</div>
						</div>
						<div className="row align-items-center mt-4">
							<div className="col">
								<input type="email" className="form-control form-fixer" placeholder="Email" />
							</div>
						</div>
						<div className="row align-items-center mt-4">
							<div className="col">
								<input type="password" className="form-control form-fixer" placeholder="Contraseña" />
							</div>
							<div className="col">
								<input
									type="password"
									className="form-control form-fixer"
									placeholder="Confirma contraseña"
								/>
							</div>
						</div>
						<div className="row align-items-center mt-4">
							<div className="col">
								<input
									type="text"
									className="form-control form-fixer"
									placeholder="Nombre de la marca"
								/>
							</div>
							<div className="col">
								<input type="text" className="form-control form-fixer" placeholder="Teléfono" />
							</div>
						</div>
						<div className="row justify-content-start mt-4">
							<div className="col">
								<input type="submit" value="Guardar" className="btn-lg buttonSubmit" />
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
		</form>
	);
};
