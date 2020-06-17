import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<div className="container-fluid">
			<nav id="navbar-example2" className="navbar navbar-light bg-light">
				<a className="navbar-brand" href="#">
					%Nombredelamarca%
				</a>
				<div className="row">
					<div className="profile pr-0 col">
						<i className="icon fas fa-user-circle" />
					</div>
					<div
						type="button"
						className="dropdown-toggle mt-2 col"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="false">
						Menu
					</div>
					<div className="dropdown-menu dropdown-menu-right">
						<Link to="/companyList">
							<button className="dropdown-item" type="button">
								Mi panel
							</button>
						</Link>
						<Link to="/">
							<button className="dropdown-item" type="button">
								Cerrar sesión
							</button>
						</Link>
					</div>
				</div>
			</nav>
		</div>
	);
};
