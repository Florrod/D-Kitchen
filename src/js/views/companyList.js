import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/home.scss";

import { CompanyCard } from "../component/companyCard.js";
import { RegisterForm } from "../component/registerForm.js";

export const CompanyList = () => {
	const [state, setState] = useState({
		showModal: false
	});

	return (
		<div className="container">
			<div>
				<p className="text-right my-3">
					<Link className="button" to="/registerForm">
						Añadir nueva empresa
					</Link>
				</p>
				<div id="contacts" className="panel-collapse collapse show" aria-expanded="true">
					<ul className="list-group pull-down" id="contact-list">
						<CompanyCard onDelete={() => setState({ showModal: true })} />
						<CompanyCard />
						<CompanyCard />
						<CompanyCard />
					</ul>
				</div>
			</div>
		</div>
	);
};
