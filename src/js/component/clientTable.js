import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../../styles/salesTable.scss";

const ENDPOINT = "https://3000-d94aa2f3-9eb4-4fd2-babe-28b285433763.ws-eu01.gitpod.io";

export const ClientTable = props => {
	const [platforms, setPlatforms] = useState({
		//initialize state here
	});

	const getRecurrentClients = () => {
		let access_token = localStorage.getItem("access_token");
		return fetch(`${ENDPOINT}/recurrent-clients`, {
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
		getRecurrentClients();
	}, []);

	if (platforms == null || platforms[0] == null) return <p className="text-center">Estamos cargando tus datos</p>;

	return (
		<div className="table-responsive-sm">
			<table className="table table-sm table-hover mt-5 text-center">
				<thead className="thead-success">
					<tr>
						<th scope="col">Plataformas</th>
						<th scope="col">Clientes recurrentes</th>
						<th scope="col">Clientes nuevos</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<th scope="row" />
						<th id="ticket" scope="row">
							Ticket medio
						</th>
						<th id="ticket" scope="row">
							Ticket medio
						</th>
					</tr>
					<tr>
						<th scope="row">JustEat</th>
						<td>The Bird</td>
						<td>@twitter</td>
					</tr>
					<tr>
						<th scope="row">Glovo</th>
						<td>Jacob</td>
						<td>@fat</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};
