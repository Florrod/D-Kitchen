import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<div className="container-fluid">
			<nav id="navbar-example2" className="navbar navbar-light bg-light">
				<a className="navbar-brand" href="#">
					%Nombredelamarca%
				</a>
				<ul className="nav nav-pills m-2">
					<li>
						<i className="icon fas fa-user-circle mr-2" />
					</li>
					<li className="nav-item dropdown mt-2">
						<span
							className="dropdown-toggle"
							data-toggle="dropdown"
							href="#"
							role="button"
							aria-haspopup="true"
							aria-expanded="false">
							Menú
						</span>
						<div className="dropdown-menu">
							<a className="dropdown-item" href="#one">
								Mi panel
							</a>
							<a className="dropdown-item" href="#two">
								Cerrar sesión
							</a>
						</div>
					</li>
				</ul>
			</nav>
		</div>
	);
};
