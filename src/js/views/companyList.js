import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/home.scss";

import { CompanyCard } from "../component/companyCard.js";
import { RegisterForm } from "../component/registerForm.js";

export const CompanyList = () => {
	const [state, setState] = useState({});

	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-0">Directorio de empresas</h1>
				<ul className="list-group pull-down" id="contact-list">
					<div className="row ml-2 justify-content-right">
						<Link className="button" to="/registerForm">
							Añadir nueva empresa
						</Link>
					</div>
					<CompanyCard />
				</ul>
			</div>
		</div>
	);
};
