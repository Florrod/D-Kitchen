import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../../styles/salesTable.scss";

export const ClientTable = props => {
	const [state, setState] = useState({
		//initialize state here
	});

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
