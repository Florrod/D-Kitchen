import React, { useState, useEffect, useContext, useRef } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { Link, useRouteMatch, useParams, useHistory } from "react-router-dom";
import "../../styles/salesTable.scss";

const ENDPOINT = "https://3000-fe4d7be6-896d-4f55-a9e8-7e8921aaf803.ws-eu01.gitpod.io/";

export const ProductTable = props => {
	const [platforms, setPlatforms] = useState([]);

	const getTopProducts = () => {
		let access_token = localStorage.getItem("access_token");
		return fetch(`${ENDPOINT}/top-products`, {
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
		getTopProducts();
	}, []);

	if (platforms == null || platforms[0] == null) return <p className="text-center">Estamos cargando tus datos</p>;

	return (
		<div className="table-responsive-sm">
			<div className="row">
				<div className="col-4">
					<p>Ranking</p>
					{platforms
						? platforms.map((plat, index) => (
								<div className="col-12" key={plat.id}>
									<span className="border border-dark">{plat.name}</span>
								</div>
						  ))
						: ""}
					<div className="row">
						{platforms
							? platforms.map((plat, index) => (
									<div key={plat.id} className="platform">
										{plat.top_products.map((product, index) => (
											<div className="col-12" key={product.name}>
												{" "}
												{product.name}
											</div>
										))}
									</div>
							  ))
							: ""}
					</div>
				</div>
			</div>
		</div>
	);
};
