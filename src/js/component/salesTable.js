import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../../styles/home.scss";

export const SalesTable = props => {
	const [state, setState] = useState({
		//initialize state here
	});

	return (
		<div className="table-responsive-sm">
			<table className="table table-bordered">
				<thead>
					<tr>
						<th scope="col">Plataformas</th>
						<th scope="col">Ventas medias</th>
						<th scope="col">Ingreso neto</th>
						<th scope="col">Volumen medio</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<th scope="row">UberEats</th>
						<td>Mark</td>
						<td>Otto</td>
						<td>@mdo</td>
					</tr>
					<tr>
						<th scope="row">Deliveroo</th>
						<td>Jacob</td>
						<td>Thornton</td>
						<td>@fat</td>
					</tr>
					<tr>
						<th scope="row">JustEat</th>
						<td colSpan="1">Larry</td>
						<td colSpan="1">The Bird</td>
						<td>@twitter</td>
					</tr>
					<tr>
						<th scope="row">Glovo</th>
						<td colSpan="2">Larry the Bird</td>
						<td>@twitter</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};
