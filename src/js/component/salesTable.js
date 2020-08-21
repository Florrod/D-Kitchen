import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../../styles/salesTable.scss";

const ENDPOINT = "https://3000-a2433010-e316-4209-8d0e-d0eb6549d9be.ws-eu01.gitpod.io";

export const SalesTable = props => {
	const [platforms, setPlatforms] = useState({
		//initialize state here
	});

	const getTotalSales = () => {
		let access_token = localStorage.getItem("access_token");
		return fetch(`${ENDPOINT}/total-sales`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${access_token}`,
				"Access-Control-Allow-Origin": "*"
			}
		})
			.then(res => res.json())
			.then(platforms => {
				setPlatforms(platforms);
			});
	};

	useEffect(() => {
		getTotalSales();
	}, []);

	const roundSales = x => {
		return Math.round(x);
	};

	console.log(roundSales(23, 45));
	if (platforms == null || platforms[0] == null) return <p className="text-center">Estamos cargando tus datos</p>;

	return (
		<div className="table-responsive-sm">
			<table className="table table-sm table-hover mt-5 text-center">
				<tbody>
					<div className="row">
						<div className="col-6">
							<div className="row">
								<div className="col-6 h5">Plataformas</div>
								<div className="col-6 h5">Ventas Totales</div>
							</div>
							{platforms
								? platforms.map((plat, index) => (
										<div className="row" key={plat.id}>
											<div className="col-6 h6">{plat.name}</div>
											<div className="col-6">{roundSales(plat.total_price)}</div>
										</div>
								  ))
								: ""}
						</div>
					</div>
				</tbody>
			</table>
		</div>
	);
};
