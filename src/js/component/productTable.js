import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../../styles/salesTable.scss";

export const ProductTable = props => {
	const [state, setState] = useState({
		//initialize state here
	});

	return (
		<div className="table-responsive-sm">
			<table className="table table-sm table-hover mt-5 text-center">
				<thead className="thead-success">
					<tr>
						<th scope="col">Ranking</th>
						<th scope="col">JustEat</th>
						<th scope="col">Glovo</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<th scope="row">1º</th>
						<td>Product</td>
						<td>Product</td>
					</tr>
					<tr>
						<th scope="row">2º</th>
						<td>Product</td>
						<td>Product</td>
					</tr>
					<tr>
						<th scope="row">3º</th>
						<td>Product</td>
						<td>Product</td>
					</tr>
					<tr>
						<th scope="row">4º</th>
						<td>Product</td>
						<td>Product</td>
					</tr>
					<tr>
						<th scope="row">5º</th>
						<td>Product</td>
						<td>Product</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};
