import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../../styles/salesTable.scss";

const ENDPOINT = "https://3000-fe4d7be6-896d-4f55-a9e8-7e8921aaf803.ws-eu01.gitpod.io/";
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

	if (platforms == null || platforms[0] == null) return <p className="text-center">Estamos cargando tus datos</p>;

	return (
		<div className="table-responsive-sm">
			<table className="table table-sm table-hover mt-5 text-center">
				<thead className="thead-success">
					<tr>
						<th scope="col">Ventas totales</th>
					</tr>
				</thead>
				<tbody>
					<div className="row">
						<div className="col-6">
							Plataformas
							{platforms
								? platforms.map((plat, index) => (
										<div className="row" key={plat.id}>
											{plat.name}
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
