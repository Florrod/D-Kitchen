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
			<div className="container-fluid">
				<div className="row justify-content-center">
					<div className="col-12 col-md-8 col-lg-8 col-xl-6">
						<div className="row">
							<div className="col text-center title col-sm-12">
								<h1 className="titleForm">Crear nueva marca</h1>
							</div>
						</div>
						<UploadProfile />
						<div className="row align-items-center mt-4">
							<div className="col">
								<label htmlFor="nombre-marca">Nombre de la marca</label>
								<input
									id="nombre-marca"
									type="text"
									className="form-control form-fixer"
									placeholder="Nombre de la marca"
								/>
							</div>
						</div>
						<div className="row align-items-center mt-4">
							<div className="col">
								<label htmlFor="api-key-just-eat">API Key Just-Eat</label>
								<input
									id="api-key-just-eat"
									type="text"
									className="form-control form-fixer"
									placeholder="API Key Just-Eat"
								/>
							</div>
						</div>
						<div className="row align-items-center mt-4">
							<div className="col">
								<label htmlFor="api-key-glovo">API Key Glovo</label>
								<input
									id="api-key-glovo"
									type="text"
									className="form-control form-fixer"
									placeholder="API Key Glovo"
								/>
							</div>
						</div>
						</div>
						<div className="row justify-content-center mt-4">
							<Link to="/companyAdded">
								<div className="col">
									<input type="submit" value="Guardar" className="button" />
								</div>
							</Link>
							<Link to="/">
								<div className="col">
									<span className="button" href="#" role="button">
										Back home
									</span>
								</div>
							</Link>
						</div>
					</div>
			</div>
		</form>
	);
};
