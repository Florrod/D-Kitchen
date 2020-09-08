import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.scss";

export const CompanyAdded = () => {
	const { store, actions } = useContext(Context);

	return (
		<div>
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-12 col-md-8 col-lg-8 col-xl-6" />
					<div className="row">
						<div className="col text-center title">
							<h1 className="titleForm">¡Guardado satisfactoriamente!</h1>
						</div>
					</div>
					<div className="row justify-content-center mt-4">
						<Link to="/registerForm">
							<div className="col">
								<span className="buttom" href="#" role="button">
									Añadir otra cuenta
								</span>
							</div>
						</Link>
						<Link to="/companyList">
							<div className="col">
								<span className="buttom" href="#" role="button">
									Ir a mi perfil
								</span>
							</div>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};
