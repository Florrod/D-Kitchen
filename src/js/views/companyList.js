import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/home.scss";

import { CompanyCard } from "../component/companyCard.js";
import { RegisterForm } from "../component/registerForm.js";
import { SearchBar } from "../component/searchBar.js";

export const CompanyList = () => {
	const [state, setState] = useState({});
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-0">Directorio de empresas</h1>
				<SearchBar />
				<ul className="list-group pull-down" id="contact-list">
					<div className="row ml-2 justify-content-right">
						{store.admin == true && (
							<Link to="/registerForm">
								<button className="buttom">Añadir nueva empresa</button>
							</Link>
						)}
					</div>
					<CompanyCard />
				</ul>
			</div>
		</div>
	);
};
